"use client"

import { useState } from "react"
import { Copy, ChevronDown } from "lucide-react"

const apiEndpoints = [
  {
    title: "Create Order",
    method: "POST",
    endpoint: "/api/payments/create-order",
    description: "Create a new payment order",
    params: ["amount (required)", "currency (optional)", "description (optional)", "notes (optional)"],
    example: `{
  "amount": 1000,
  "currency": "INR",
  "description": "Product purchase",
  "notes": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}`,
    response: `{
  "success": true,
  "data": {
    "order_id": "order_123456",
    "amount": 100000,
    "currency": "INR",
    "key_id": "your_key_id"
  }
}`,
  },
  {
    title: "Verify Payment",
    method: "POST",
    endpoint: "/api/payments/verify-payment",
    description: "Verify a completed payment",
    params: ["razorpay_order_id (required)", "razorpay_payment_id (required)", "razorpay_signature (required)"],
    example: `{
  "razorpay_order_id": "order_123456",
  "razorpay_payment_id": "pay_123456",
  "razorpay_signature": "signature_hash"
}`,
    response: `{
  "success": true,
  "message": "Payment verified successfully",
  "order_id": "order_123456",
  "payment_id": "pay_123456"
}`,
  },
  {
    title: "Generate Payment Link",
    method: "POST",
    endpoint: "/api/payments/generate-link",
    description: "Generate a shareable payment link",
    params: ["amount (required)", "customer_email (optional)", "customer_name (optional)"],
    example: `{
  "amount": 500,
  "customer_email": "customer@example.com",
  "customer_name": "Jane Smith"
}`,
    response: `{
  "success": true,
  "data": {
    "link": "https://orionpay.com/pay/link_123456",
    "link_id": "link_123456"
  }
}`,
  },
  {
    title: "Payout",
    method: "POST",
    endpoint: "/api/payments/payout",
    description: "Send money to a recipient",
    params: ["amount (required)", "recipient_email (required)", "recipient_name (optional)"],
    example: `{
  "amount": 1000,
  "recipient_email": "recipient@example.com",
  "recipient_name": "Bob Johnson"
}`,
    response: `{
  "success": true,
  "data": {
    "payout_id": "payout_123456",
    "status": "processing"
  }
}`,
  },
  {
    title: "Payout UPI",
    method: "POST",
    endpoint: "/api/payments/payout-upi",
    description: "Send money via UPI",
    params: ["amount (required)", "upi_id (required)", "recipient_name (optional)"],
    example: `{
  "amount": 500,
  "upi_id": "username@bank",
  "recipient_name": "Alice"
}`,
    response: `{
  "success": true,
  "data": {
    "payout_id": "payout_upi_123456",
    "status": "success"
  }
}`,
  },
  {
    title: "Order Status",
    method: "GET",
    endpoint: "/api/payments/order-status/:orderId",
    description: "Get the status of a specific order",
    params: ["orderId (required, in URL)"],
    example: `GET /api/payments/order-status/order_123456`,
    response: `{
  "success": true,
  "data": {
    "order_id": "order_123456",
    "status": "paid",
    "amount": 100000,
    "currency": "INR"
  }
}`,
  },
  {
    title: "Get All Transactions",
    method: "GET",
    endpoint: "/api/payments/transactions",
    description: "Retrieve all transactions",
    params: [],
    example: `GET /api/payments/transactions`,
    response: `{
  "success": true,
  "data": [
    {
      "id": "txn_1",
      "order_id": "order_123456",
      "payment_id": "pay_123456",
      "amount": 1000,
      "status": "completed"
    }
  ]
}`,
  },
  {
    title: "Refund Payment",
    method: "POST",
    endpoint: "/api/payments/refund",
    description: "Refund a completed payment",
    params: ["payment_id (required)", "amount (optional)"],
    example: `{
  "payment_id": "pay_123456",
  "amount": 500
}`,
    response: `{
  "success": true,
  "data": {
    "refund_id": "rfnd_123456",
    "status": "processed"
  }
}`,
  },
]

export default function ApiDocsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">API Documentation</h1>
        <p className="text-muted-foreground">Complete guide to Orion-Pay payment API endpoints</p>
      </div>

      {/* Authentication */}
      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Authentication</h2>
        <p className="text-muted-foreground mb-4">All API requests require your API key in the header:</p>
        <div className="bg-background border border-border rounded-lg p-4 relative">
          <code className="text-sm">Authorization: Bearer {`YOUR_API_KEY`}</code>
          <button
            onClick={() => copyToClipboard(`Authorization: Bearer YOUR_API_KEY`)}
            className="absolute top-4 right-4 p-1 hover:bg-muted rounded transition"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      {/* Base URL */}
      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Base URL</h2>
        <div className="bg-background border border-border rounded-lg p-4 relative">
          <code className="text-sm">{process.env.NEXT_PUBLIC_SERVER_URL}</code>
          <button
            onClick={() => copyToClipboard(process.env.NEXT_PUBLIC_SERVER_URL || "")}
            className="absolute top-4 right-4 p-1 hover:bg-muted rounded transition"
          >
            <Copy size={16} />
          </button>
        </div>
      </div>

      {/* Endpoints */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">API Endpoints</h2>
        {apiEndpoints.map((endpoint, index) => (
          <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between hover:bg-muted/50 transition"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded text-sm font-semibold ${
                    endpoint.method === "GET" ? "bg-blue-500/20 text-blue-600" : "bg-green-500/20 text-green-600"
                  }`}
                >
                  {endpoint.method}
                </span>
                <div className="text-left">
                  <h3 className="font-bold">{endpoint.title}</h3>
                  <p className="text-sm text-muted-foreground">{endpoint.endpoint}</p>
                </div>
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
              />
            </button>

            {expandedIndex === index && (
              <div className="border-t border-border px-8 py-6 bg-background/50 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{endpoint.description}</p>
                </div>

                {endpoint.params.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Parameters</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {endpoint.params.map((param, i) => (
                        <li key={i}>• {param}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold mb-2">Example Request</h4>
                  <div className="bg-card border border-border rounded-lg p-4 relative">
                    <pre className="text-sm overflow-x-auto">
                      <code>{endpoint.example}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(endpoint.example)}
                      className="absolute top-4 right-4 p-1 hover:bg-muted rounded transition"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-card border border-border rounded-lg p-4 relative">
                    <pre className="text-sm overflow-x-auto">
                      <code>{endpoint.response}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(endpoint.response)}
                      className="absolute top-4 right-4 p-1 hover:bg-muted rounded transition"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Error Handling */}
      <div className="bg-card border border-border rounded-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">Error Handling</h2>
        <p className="text-muted-foreground mb-4">Errors are returned with appropriate HTTP status codes:</p>
        <div className="space-y-3">
          <div className="flex gap-4">
            <span className="font-mono bg-destructive/20 text-destructive px-3 py-1 rounded">400</span>
            <p className="text-muted-foreground">Bad Request - Invalid parameters</p>
          </div>
          <div className="flex gap-4">
            <span className="font-mono bg-destructive/20 text-destructive px-3 py-1 rounded">401</span>
            <p className="text-muted-foreground">Unauthorized - Invalid API key</p>
          </div>
          <div className="flex gap-4">
            <span className="font-mono bg-destructive/20 text-destructive px-3 py-1 rounded">404</span>
            <p className="text-muted-foreground">Not Found - Resource doesn't exist</p>
          </div>
          <div className="flex gap-4">
            <span className="font-mono bg-destructive/20 text-destructive px-3 py-1 rounded">500</span>
            <p className="text-muted-foreground">Server Error - Internal error occurred</p>
          </div>
        </div>
      </div>
    </div>
  )
}
