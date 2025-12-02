"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import TransactionModal from "./components/TransactionModal"
import TransactionList from "@/components/transaction-list"
import DashboardStats from "@/components/dashboard-stats"
import AdminSidebar from "@/components/admin-sidebar"
import UserModal from "@/components/user-modal"
import Link from "next/link"
import { Loader2, Plus } from "lucide-react"

// Load chart client-side only
const ChartBlock = dynamic(
  () => import("./components/ChartBlock").then((m) => m.ChartBlock),
  { ssr: false }
)

export default function AdminPage() {
  const router = useRouter()

  // --- Admin Auth State ---
  const [loadingAuth, setLoadingAuth] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  // --- Page Data State ---
  const [users, setUsers] = useState<any[]>([])
  const [txns, setTxns] = useState<any[]>([])
  const [overview, setOverview] = useState<any>(null)
  const [loadingUsers, setLoadingUsers] = useState(true)
  const [loadingTxns, setLoadingTxns] = useState(true)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(25)
  const [totalTx, setTotalTx] = useState(0)
  const [selectedTxId, setSelectedTxId] = useState<string | null>(null)
  const [selectedUser, setSelectedUser] = useState<any | null>(null)
  const [selectedSection, setSelectedSection] = useState<"overview" | "users" | "transactions">("overview")
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")

  // --- Admin Authentication Check ---
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.replace("/sign-in") // redirect if not logged in
      return
    }

    async function checkAdmin() {
      try {
        const base = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"
        const res = await fetch(`${base}/api/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const data = await res.json()
        if (data.success && data.user && data.user.isAdmin) {
          setIsAdmin(true)
        } else {
          router.replace("/") // redirect non-admin users
        }
      } catch (err) {
        console.error("Failed to verify admin:", err)
        router.replace("/")
      } finally {
        setLoadingAuth(false)
      }
    }

    checkAdmin()
  }, [router])

  // --- Fetch Users & Transactions ---
  useEffect(() => {
    if (!isAdmin) return // skip fetching if not admin

    const token = localStorage.getItem("token")
    if (!token) return

    let mounted = true

    async function loadData() {
      setLoadingUsers(true)
      setLoadingTxns(true)

      try {
        const base = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"

        const [usersRes, txRes, overviewRes] = await Promise.all([
          fetch(`${base}/api/admin/users?page=1&limit=50`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(
            `${base}/api/admin/transactions?page=${page}&limit=${limit}&q=${search}&status=${statusFilter}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
            { headers: { Authorization: `Bearer ${token}` } }
          ),
          fetch(`${base}/api/admin/overview`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ])

        const [usersData, txData, ovData] = await Promise.all([
          usersRes.json(),
          txRes.json(),
          overviewRes.json(),
        ])

        if (!mounted) return

        if (usersData.success) setUsers(usersData.data.users || [])
        if (txData.success) {
          setTxns(txData.data.transactions || [])
          setTotalTx(txData.data.total || 0)
        }
        if (ovData.success) setOverview(ovData.data || null)
      } catch (err) {
        console.error(err)
      } finally {
        if (mounted) {
          setLoadingUsers(false)
          setLoadingTxns(false)
        }
      }
    }

    loadData()
    return () => { mounted = false }
  }, [isAdmin, page, limit, search, statusFilter, dateFrom, dateTo])

  // --- Toggle Admin ---
  async function toggleAdmin(userId: string, makeAdmin: boolean) {
    const token = localStorage.getItem("token")
    if (!token) return

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"}/api/admin/users/${userId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ isAdmin: makeAdmin }),
        }
      )
      const data = await res.json()
      if (data.success) {
        setUsers((prev) =>
          prev.map((u) => (u._id === userId ? { ...u, isAdmin: makeAdmin } : u))
        )
      } else alert(data.message)
    } catch {
      alert("Request failed")
    }
  }

  // --- Export CSV ---
  async function exportCSV() {
    const token = localStorage.getItem("token")
    if (!token) return
    const base = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000"
    const url = `${base}/api/admin/transactions-export?q=${search}&status=${statusFilter}&dateFrom=${dateFrom}&dateTo=${dateTo}`
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
    const blob = await res.blob()
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `transactions_${Date.now()}.csv`
    link.click()
  }

  if (loadingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin text-primary" size={32} />
      </div>
    )
  }

  if (!isAdmin) return null // prevent rendering for non-admins

  // --- Transform Transactions for UI ---
  const uiTxns = txns.map((t) => ({
    id: t._id,
    order_id: t.orderId,
    payment_id: t.paymentId,
    amount: t.amount,
    currency: t.currency,
    status: t.status,
    customer_email: t.customer?.email,
    customer_name: t.customer?.name,
    created_at: t.createdAt,
  }))

  const dashboardStatsTxns = uiTxns.map((u) => ({
    amount: u.amount,
    status: u.status,
    created_at: u.created_at,
  }))

  return (
    <div className="p-6 bg-background min-h-screen">
      <div className="flex gap-6">
        <AdminSidebar
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          usersCount={users.length}
          transactionsCount={totalTx || txns.length}
        />

        <main className="flex-1 space-y-8">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-1">Overview of payments and activity across your account.</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                placeholder="Search transactions or users..."
                className="border border-border rounded-lg px-4 py-2 w-72 focus:ring-2 focus:ring-primary outline-none transition"
              />

              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1) }}
                className="border border-border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary outline-none transition"
              >
                <option value="">All statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>

              <button
                onClick={() => {
                  const to = new Date()
                  const from = new Date()
                  from.setDate(to.getDate() - 7)
                  setDateFrom(from.toISOString())
                  setDateTo(to.toISOString())
                  setPage(1)
                }}
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition"
              >
                Last 7d
              </button>

              <button
                onClick={() => {
                  const to = new Date()
                  const from = new Date()
                  from.setDate(to.getDate() - 30)
                  setDateFrom(from.toISOString())
                  setDateTo(to.toISOString())
                  setPage(1)
                }}
                className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 transition"
              >
                Last 30d
              </button>

              <button
                onClick={exportCSV}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
              >
                Export CSV
              </button>

              <Link
                href="/pay-in"
                className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-lg flex items-center gap-2 transition"
              >
                <Plus size={18} />
                New Payment
              </Link>
            </div>
          </div>

          {/* OVERVIEW SECTION */}
          {selectedSection === "overview" && (
            <>
              <DashboardStats transactions={dashboardStatsTxns as any} />

              <div className="mt-8 space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">Recent Transactions</h2>
                <div className="bg-card border border-border rounded-lg shadow-sm">
                  {loadingTxns ? (
                    <div className="flex justify-center items-center py-12">
                      <Loader2 className="animate-spin text-primary" size={28} />
                    </div>
                  ) : (
                    <TransactionList transactions={uiTxns as any} />
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Users</h2>
                {loadingUsers ? (
                  <div>Loading users...</div>
                ) : (
                  <div className="overflow-auto border border-border rounded-lg shadow-sm bg-card">
                    <table className="w-full text-sm">
                      <thead className="text-foreground font-medium bg-gray-200">
                        <tr>
                          <th className="p-3 text-left">Name</th>
                          <th className="p-3 text-left">Email</th>
                          <th className="p-3 text-left">Company</th>
                          <th className="p-3 text-left">Phone</th>
                          <th className="p-3 text-left">Status</th>
                          <th className="p-3 text-left">Joined</th>
                          <th className="p-3 text-left">Admin Control</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {users.map((u) => (
                          <tr key={u._id} className="hover:bg-background transition">
                            <td className="p-3">{u.name}</td>
                            <td className="p-3">{u.email}</td>
                            <td className="p-3">{u.businessName || "-"}</td>
                            <td className="p-3">{u.phone || "-"}</td>
                            <td className="p-3">{u.status || "-"}</td>
                            <td className="p-3">{u.createdAt ? new Date(u.createdAt).toLocaleString() : "-"}</td>
                            <td className="p-3">
                              <button
                                onClick={() => toggleAdmin(u._id, !u.isAdmin)}
                                className={`px-3 py-1 rounded text-white font-semibold transition ${u.isAdmin ? "bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
                                  }`}
                              >
                                {u.isAdmin ? "Remove Admin" : "Make Admin"}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* TRANSACTIONS SECTION */}
          {selectedSection === "transactions" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground">Transactions</h2>
              {loadingTxns ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="animate-spin text-primary" size={28} />
                </div>
              ) : (
                <div className="bg-card border border-border rounded-lg shadow-sm">
                  <TransactionList transactions={uiTxns as any} onRowClick={(id) => setSelectedTxId(id)} />
                </div>
              )}
            </div>
          )}

          {/* MODALS */}
          {selectedTxId && (
            <TransactionModal id={selectedTxId} onClose={() => setSelectedTxId(null)} onUpdated={() => setPage(1)} />
          )}
          {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
        </main>
      </div>
    </div>
  )
}
