"use client"

import React, { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Save } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function AccountPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token")
      if (!token) return

      const res = await fetch("http://localhost:5000/api/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()

      if (data.success) {
        setFormData({
          businessName: data.user.businessName || "",
          email: data.user.email,
          phone: data.user.phone || "",
          address: data.user.address || "",
          city: data.user.city || "",
          state: data.user.state || "",
          pincode: data.user.pincode || "",
        })
      }
    }

    loadUser()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = localStorage.getItem("token")
      const res = await fetch("http://localhost:5000/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (data.success) {
        toast.success("Account updated successfully!")
      } else {
        toast.error(data.message || "Update failed")
      }
    } catch (err) {
      toast.error("Update failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-4xl font-bold mb-2">Account</h1>
      <p className="text-muted-foreground mb-8">Manage your business account details</p>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Status Card */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Account Status</h2>
          <p className="font-medium">Business Account</p>
          <p className="mt-2">
            Status: <span className="px-2 py-1 bg-green-200 rounded">Active</span>
          </p>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Edit Details</h2>

          <div className="grid grid-cols-2 gap-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="text-sm text-muted-foreground capitalize">{key}</label>
                <input
                  type="text"
                  name={key}
                  value={(formData as any)[key]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 bg-background border border-border rounded"
                  disabled={key === "email"}
                />
              </div>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2"
          >
            <Save size={18} />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  )
}