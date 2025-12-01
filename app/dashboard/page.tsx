"use client"

import { useEffect, useState } from "react"
import TransactionList from "@/components/transaction-list"
import DashboardStats from "@/components/dashboard-stats"
import { Loader2, Plus } from "lucide-react"
import Link from "next/link"

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

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTransactions()
    const interval = setInterval(fetchTransactions, 5000)
    return () => clearInterval(interval)
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

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's your payment overview.</p>
        </div>
        <Link
          href="/pay-in"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <Plus size={20} />
          New Payment
        </Link>
      </div>

      <DashboardStats transactions={transactions} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="animate-spin text-primary" size={32} />
          </div>
        ) : (
          <TransactionList transactions={transactions} />
        )}
      </div>
    </div>
  )
}
