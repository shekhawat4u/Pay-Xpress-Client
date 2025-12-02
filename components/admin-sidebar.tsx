"use client"

import React from "react"
import { Home, Users, FileText, BarChart2 } from "lucide-react"
import Link from "next/link"

type Section = "overview" | "users" | "transactions"

interface Props {
  selectedSection: Section
  setSelectedSection: (s: Section) => void
  usersCount: number
  transactionsCount: number
}

export default function AdminSidebar({ selectedSection, setSelectedSection, usersCount, transactionsCount }: Props) {
  return (
    <aside className="w-64 hidden md:block">
      <Link href="/" className="px-6 pb-6 border-b border-border flex items-center gap-3">
                <img src="/Pay_Express_01.png" alt="Pay Xpress" className="h-8 w-auto" />
              </Link>
      <div className="sticky top-6 border rounded p-4 bg-white">
        <h3 className="text-xl font-semibold mb-4">Admin</h3>

        <nav className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedSection("overview")}
            className={`text-left px-3 py-2 rounded flex items-center gap-3 ${selectedSection === "overview" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
            <Home size={16} />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setSelectedSection("transactions")}
            className={`text-left px-3 py-2 rounded flex items-center justify-between ${selectedSection === "transactions" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
            <div className="flex items-center gap-3">
              <FileText size={16} />
              <span>Transactions</span>
            </div>
            <span className="text-sm text-muted-foreground">{transactionsCount}</span>
          </button>

          <button
            onClick={() => setSelectedSection("users")}
            className={`text-left px-3 py-2 rounded flex items-center justify-between ${selectedSection === "users" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
            <div className="flex items-center gap-3">
              <Users size={16} />
              <span>Users</span>
            </div>
            <span className="text-sm text-muted-foreground">{usersCount}</span>
          </button>

          <div className="border-t mt-3 pt-3 text-sm text-muted-foreground">More</div>

          <button className="text-left px-3 py-2 rounded hover:bg-gray-50 flex items-center gap-3 mt-2">
            <BarChart2 size={16} />
            <span>Reports</span>
          </button>
        </nav>
      </div>
    </aside>
  )
}
