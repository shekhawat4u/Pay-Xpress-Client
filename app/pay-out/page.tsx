"use client"

import type React from "react"

import { useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function PayOutPage() {
  const [formData, setFormData] = useState({
    amount: "",
    recipient_email: "",
    recipient_name: "",
    payment_method: "upi",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [payoutId, setPayoutId] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handlePayout = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      const endpoint =
        formData.payment_method === "upi"
          ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/payout-upi`
          : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/payout`

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number.parseFloat(formData.amount),
          recipient_email: formData.recipient_email,
          recipient_name: formData.recipient_name,
          description: formData.description,
          upi_id: formData.payment_method === "upi" ? formData.recipient_email : undefined,
        }),
      })

      const data = await res.json()
      if (data.success) {
        setPayoutId(data.data?.payout_id || "N/A")
        setStatus("success")
        setMessage("Payout initiated successfully!")
        setFormData({
          amount: "",
          recipient_email: "",
          recipient_name: "",
          payment_method: "upi",
          description: "",
        })
      } else {
        setStatus("error")
        setMessage(data.message || "Failed to initiate payout")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Error processing payout")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Pay Out</h1>
      <p className="text-muted-foreground mb-8">Send payments to your recipients</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Initiate Payout</h2>
          <form onSubmit={handlePayout} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Amount (INR)</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount"
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Payment Method</label>
              <select
                name="payment_method"
                value={formData.payment_method}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              >
                <option value="upi">UPI</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Recipient Name</label>
              <input
                type="text"
                name="recipient_name"
                value={formData.recipient_name}
                onChange={handleChange}
                placeholder="Enter recipient name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {formData.payment_method === "upi" ? "UPI ID" : "Email"}
              </label>
              <input
                type={formData.payment_method === "upi" ? "text" : "email"}
                name="recipient_email"
                value={formData.recipient_email}
                onChange={handleChange}
                placeholder={formData.payment_method === "upi" ? "Enter UPI ID" : "Enter email"}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter payout description"
                rows={3}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Processing..." : "Initiate Payout"}
            </button>
          </form>
        </div>

        {/* Result */}
        <div>
          {status === "success" && (
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-secondary" size={32} />
                <h3 className="text-2xl font-bold">Success!</h3>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">{message}</p>
                <div className="bg-background border border-border rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Payout ID</p>
                  <p className="font-mono text-sm break-all">{payoutId}</p>
                </div>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="bg-destructive/20 border border-destructive rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-destructive" size={32} />
                <h3 className="text-2xl font-bold">Error</h3>
              </div>
              <p className="text-muted-foreground">{message}</p>
            </div>
          )}

          {status === "idle" && (
            <div className="bg-muted/50 border border-border rounded-lg p-8 text-center text-muted-foreground">
              <p>Fill in the form to initiate a payout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
