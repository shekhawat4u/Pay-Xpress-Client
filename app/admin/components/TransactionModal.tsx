"use client"

import React, { useEffect, useState } from "react"

export default function TransactionModal({ id, onClose, onUpdated }: { id: string | null; onClose: () => void; onUpdated?: () => void }) {
  const [tx, setTx] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (!id) return
    let mounted = true
    setLoading(true)
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
    fetch(`${base}/api/admin/transactions/${id}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => r.json())
      .then((d) => {
        if (!mounted) return
        if (d.success) setTx(d.data)
      })
      .catch(console.error)
      .finally(() => mounted && setLoading(false))

    return () => {
      mounted = false
    }
  }, [id])

  if (!id) return null

  async function refund() {
    if (!tx?.paymentId) return alert("No payment ID to refund")
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    const base = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
    try {
      setProcessing(true)
      const res = await fetch(`${base}/api/payments/refund`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ payment_id: tx.paymentId }),
      })
      const data = await res.json()
      if (data.success) {
        alert("Refund initiated")
        if (onUpdated) onUpdated()
      } else {
        alert(data.message || "Refund failed")
      }
    } catch (err) {
      alert("Refund request failed")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded w-[90%] max-w-2xl p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">Transaction Details</h3>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        {loading ? (
          <div className="mt-4">Loading...</div>
        ) : tx ? (
          <div className="mt-4 grid grid-cols-1 gap-3">
            <div><strong>Order ID:</strong> {tx.orderId}</div>
            <div><strong>Payment ID:</strong> {tx.paymentId || "-"}</div>
            <div><strong>Amount:</strong> {tx.amount} {tx.currency}</div>
            <div><strong>Status:</strong> {tx.status}</div>
            <div><strong>Customer:</strong> {tx.customer?.name} — {tx.customer?.email}</div>
            <div><strong>Created:</strong> {tx.createdAt ? new Date(tx.createdAt).toLocaleString() : "-"}</div>
            <div className="mt-4 flex gap-2">
              <button onClick={refund} disabled={processing} className="px-3 py-2 bg-red-600 text-white rounded">Refund</button>
              <button onClick={onClose} className="px-3 py-2 bg-gray-200 rounded">Close</button>
            </div>
          </div>
        ) : (
          <div className="mt-4">No transaction found</div>
        )}
      </div>
    </div>
  )
}
