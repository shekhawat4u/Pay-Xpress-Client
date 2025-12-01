"use client"

import { useEffect, useState } from "react"
import { Loader2, Search } from "lucide-react"

interface Transaction {
  id: string
  order_id: string
  payment_id: string
  amount: number
  currency: string
  status: "pending" | "completed" | "failed"
  customer_email?: string
  customer_name?: string
  created_at: string
  updated_at: string
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/transactions`)
      const data = await res.json()
      if (data.success) {
        setTransactions(data.data)
      }
    } catch (error) {
      console.error("Failed to fetch transactions:", error)
    } finally {
      setLoading(false)
    }
  }

  const filtered = transactions.filter((txn) => {
    const matchesSearch =
      txn.order_id.includes(searchTerm) ||
      txn.payment_id.includes(searchTerm) ||
      txn.customer_email?.includes(searchTerm)
    const matchesStatus = filterStatus === "all" || txn.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Transactions</h1>
      <p className="text-muted-foreground mb-8">View and manage all your transactions</p>

      <div className="bg-card border border-border rounded-lg p-6 mb-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search by Order ID, Payment ID, or Email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg text-foreground"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Order ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Payment ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Customer</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-muted-foreground">
                      No transactions found
                    </td>
                  </tr>
                ) : (
                  filtered.map((txn) => (
                    <tr key={txn.id} className="border-b border-border hover:bg-muted/50 transition">
                      <td className="py-3 px-4">{txn.order_id}</td>
                      <td className="py-3 px-4 font-mono text-xs">{txn.payment_id}</td>
                      <td className="py-3 px-4">
                        {txn.currency} {txn.amount.toFixed(2)}
                      </td>
                      <td className="py-3 px-4">
                        <div>
                          <p>{txn.customer_name || "N/A"}</p>
                          <p className="text-xs text-muted-foreground">{txn.customer_email || "N/A"}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            txn.status === "completed"
                              ? "bg-secondary/20 text-secondary"
                              : txn.status === "pending"
                                ? "bg-yellow-500/20 text-yellow-600"
                                : "bg-destructive/20 text-destructive"
                          }`}
                        >
                          {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {new Date(txn.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
