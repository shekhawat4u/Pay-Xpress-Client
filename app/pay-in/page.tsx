"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertCircle, CheckCircle, Copy } from "lucide-react"

export default function PayInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    amount: "",
    customer_name: "",
    customer_email: "",
    description: "",
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCreateOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/payments/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Number.parseFloat(formData.amount),
          currency: "INR",
          description: formData.description,
          notes: {
            name: formData.customer_name,
            email: formData.customer_email,
          },
        }),
      })

      const data = await res.json()
      if (data.success) {
        const paymentLink = `${process.env.NEXT_PUBLIC_CLIENT_URL}/payment?order_id=${data.data.order_id}`
        setGeneratedLink(paymentLink)
        setStatus("success")
        setMessage("Payment link created successfully!")
      } else {
        setStatus("error")
        setMessage(data.message || "Failed to create payment link")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Error creating payment link")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Pay In</h1>
      <p className="text-muted-foreground mb-8">Create payment links for your customers</p>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Create Payment Link</h2>
          <form onSubmit={handleCreateOrder} className="space-y-6">
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
              <label className="block text-sm font-medium mb-2">Customer Name</label>
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleChange}
                placeholder="Enter customer name"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Customer Email</label>
              <input
                type="email"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleChange}
                placeholder="Enter customer email"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter payment description"
                rows={3}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Payment Link"}
            </button>
          </form>
        </div>

        {/* Result */}
        <div>
          {status === "success" && (
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="text-secondary" size={32} />
                <h3 className="text-2xl font-bold">Link Created!</h3>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">Share this link with your customer:</p>
                <div className="bg-background border border-border rounded-lg p-4 break-all text-sm">
                  {generatedLink}
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(generatedLink)
                    setMessage("Link copied to clipboard!")
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Copy size={20} />
                  Copy Link
                </button>
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
              <p>Fill in the form and create a payment link</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
