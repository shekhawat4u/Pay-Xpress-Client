"use client"

import { format } from "date-fns"
import { CheckCircle, Clock, XCircle, Copy } from "lucide-react"
import { useState } from "react"

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

interface TransactionListProps {
  transactions: Transaction[]
  highlightedTxn?: string
  onRowClick?: (id: string) => void
}

export default function TransactionList({ transactions, highlightedTxn }: TransactionListProps) {
  const [copiedId, setCopiedId] = useState("")

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(""), 2000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="text-secondary" size={20} />
      case "pending":
        return <Clock className="text-accent" size={20} />
      case "failed":
        return <XCircle className="text-destructive" size={20} />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-secondary"
      case "pending":
        return "text-accent"
      case "failed":
        return "text-destructive"
      default:
        return "text-muted-foreground"
    }
  }

  if (transactions.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <p className="text-muted-foreground">No transactions yet. Start by making a payment!</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto bg-card border border-border rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-6 py-4 font-semibold">Date</th>
            <th className="text-left px-6 py-4 font-semibold">Customer</th>
            <th className="text-left px-6 py-4 font-semibold">Order ID</th>
            <th className="text-left px-6 py-4 font-semibold">Amount</th>
            <th className="text-left px-6 py-4 font-semibold">Status</th>
            <th className="text-left px-6 py-4 font-semibold">Payment ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr
              key={txn.id}
              onClick={() => onRowClick && onRowClick(txn.id)}
              className={`border-b border-border hover:bg-background transition cursor-pointer ${
                txn.order_id === highlightedTxn ? "bg-primary/10" : ""
              }`}
            >
              <td className="px-6 py-4 text-sm">{format(new Date(txn.created_at), "MMM dd, yyyy HH:mm")}</td>
              <td className="px-6 py-4 text-sm">
                <div>{txn.customer_name || "N/A"}</div>
                <div className="text-muted-foreground">{txn.customer_email || "N/A"}</div>
              </td>
              <td className="px-6 py-4 text-sm">
                <div className="flex items-center gap-2">
                  <code className="text-primary">{txn.order_id.slice(0, 12)}...</code>
                  <button onClick={(e) => { e.stopPropagation(); copyToClipboard(txn.order_id, txn.id); }} className="hover:opacity-70 transition">
                    <Copy size={16} />
                  </button>
                  {copiedId === txn.id && <span className="text-xs text-secondary">Copied!</span>}
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-semibold">
                {txn.currency} {txn.amount.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                <div className={`flex items-center gap-2 capitalize ${getStatusColor(txn.status)}`}>
                  {getStatusIcon(txn.status)}
                  {txn.status}
                </div>
              </td>
              <td className="px-6 py-4 text-sm">
                {txn.payment_id ? (
                  <div className="flex items-center gap-2">
                    <code className="text-muted-foreground">{txn.payment_id.slice(0, 12)}...</code>
                    <button
                      onClick={(e) => { e.stopPropagation(); copyToClipboard(txn.payment_id, `${txn.id}-payment`); }}
                      className="hover:opacity-70 transition"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
