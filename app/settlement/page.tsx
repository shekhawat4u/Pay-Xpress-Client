"use client"

import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

export default function SettlementPage() {
  const [settlements, setSettlements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSettlements()
  }, [])

  const fetchSettlements = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/settlements`)
      const data = await res.json()
      if (data.success) {
        setSettlements(data.data || [])
      }
    } catch (error) {
      console.error("Failed to fetch settlements:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Settlement</h1>
      <p className="text-muted-foreground mb-8">View your settlement history and details</p>

      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Settled</p>
            <p className="text-3xl font-bold">₹ 0</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Pending Settlement</p>
            <p className="text-3xl font-bold">₹ 0</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-2">Settlement Rate</p>
            <p className="text-3xl font-bold">99.8%</p>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Settlement History</h2>
        {settlements.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No settlements yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Settlement ID</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {settlements.map((settlement: any) => (
                  <tr key={settlement.id} className="border-b border-border hover:bg-muted/50 transition">
                    <td className="py-3 px-4 font-mono text-xs">{settlement.id}</td>
                    <td className="py-3 px-4">₹ {settlement.amount?.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary">
                        {settlement.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">{settlement.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
