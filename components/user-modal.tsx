"use client"

import React from "react"

interface User {
  _id: string
  name: string
  email: string
  phone?: string
  company?: string
  status?: string
  createdAt?: string
  isAdmin?: boolean
}

interface Props {
  user: User
  onClose: () => void
}

export default function UserModal({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">User Details</h3>
          <button onClick={onClose} className="text-muted-foreground">Close</button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="font-medium">{user.phone || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Company</p>
            <p className="font-medium">{user.company || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="font-medium">{user.status || "-"}</p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Joined</p>
            <p className="font-medium">{user.createdAt ? new Date(user.createdAt).toLocaleString() : "-"}</p>
          </div>

          <div className="col-span-2 mt-4">
            <p className="text-sm text-muted-foreground">Admin</p>
            <p className="font-medium">{user.isAdmin ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
