"use client"

import { BarChart3, TrendingUp, CheckCircle, Clock } from "lucide-react"

interface Transaction {
  amount: number
  status: "pending" | "completed" | "failed"
  created_at: string
}

interface DashboardStatsProps {
  transactions: Transaction[]
}

export default function DashboardStats({ transactions }: DashboardStatsProps) {
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0)
  const completedAmount = transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)
  const completedCount = transactions.filter((t) => t.status === "completed").length
  const pendingCount = transactions.filter((t) => t.status === "pending").length

  const stats = [
    {
      label: "Total Revenue",
      value: `₹${totalAmount.toFixed(2)}`,
      icon: TrendingUp,
      color: "text-primary",
    },
    {
      label: "Completed Payments",
      value: `${completedCount}`,
      icon: CheckCircle,
      color: "text-secondary",
    },
    {
      label: "Pending Payments",
      value: `${pendingCount}`,
      icon: Clock,
      color: "text-accent",
    },
    {
      label: "Completed Amount",
      value: `₹${completedAmount.toFixed(2)}`,
      icon: BarChart3,
      color: "text-primary",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <p className="text-muted-foreground text-sm">{stat.label}</p>
            <stat.icon className={`${stat.color}`} size={24} />
          </div>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}
