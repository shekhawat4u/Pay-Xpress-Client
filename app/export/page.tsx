"use client"

import { useState } from "react"
import { Download, FileJson, FileText } from "lucide-react"

export default function ExportPage() {
  const [loading, setLoading] = useState(false)

  const handleExport = async (format: "json" | "csv") => {
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/transactions`)
      const data = await res.json()

      if (data.success) {
        let content = ""
        let filename = ""
        let type = ""

        if (format === "json") {
          content = JSON.stringify(data.data, null, 2)
          filename = `transactions_${Date.now()}.json`
          type = "application/json"
        } else {
          // CSV format
          const headers = ["ID", "Order ID", "Payment ID", "Amount", "Currency", "Status", "Customer", "Email", "Date"]
          const rows = data.data.map((txn: any) => [
            txn.id,
            txn.order_id,
            txn.payment_id,
            txn.amount,
            txn.currency,
            txn.status,
            txn.customer_name || "N/A",
            txn.customer_email || "N/A",
            new Date(txn.created_at).toLocaleDateString(),
          ])

          content = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")
          filename = `transactions_${Date.now()}.csv`
          type = "text/csv"
        }

        const blob = new Blob([content], { type })
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error("Failed to export:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Export</h1>
      <p className="text-muted-foreground mb-8">Export your transaction data</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            <FileJson className="text-primary" size={32} />
            <h2 className="text-2xl font-bold">JSON Format</h2>
          </div>
          <p className="text-muted-foreground mb-6">Export all transactions as JSON format</p>
          <button
            onClick={() => handleExport("json")}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Download size={20} />
            Download JSON
          </button>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-primary" size={32} />
            <h2 className="text-2xl font-bold">CSV Format</h2>
          </div>
          <p className="text-muted-foreground mb-6">Export all transactions as CSV format</p>
          <button
            onClick={() => handleExport("csv")}
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            <Download size={20} />
            Download CSV
          </button>
        </div>
      </div>
    </div>
  )
}
