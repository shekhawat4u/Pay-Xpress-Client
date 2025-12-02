"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Copy, Eye, EyeOff, Trash2 } from "lucide-react"

interface ApiKey {
  id: string
  key: string
  name: string
  created_at: string
  last_used?: string
}

export default function PaymentAPIPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [newKeyName, setNewKeyName] = useState("")
  const [loading, setLoading] = useState(false)
  const [showSecret, setShowSecret] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    fetchApiKeys()
  }, [])

  const fetchApiKeys = async () => {
    try {
      // Simulating API fetch - in production, this would call the backend
      const stored = localStorage.getItem("payxpress_api_keys")
      if (stored) {
        setApiKeys(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Failed to fetch API keys:", error)
    }
  }

  const generateApiKey = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newKeyName.trim()) return

    setLoading(true)
    try {
      const newKey: ApiKey = {
        id: `key_${Date.now()}`,
        key: `op_live_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
        name: newKeyName,
        created_at: new Date().toISOString(),
      }

      const updated = [...apiKeys, newKey]
      setApiKeys(updated)
      localStorage.setItem("payxpress_api_keys", JSON.stringify(updated))
      setNewKeyName("")
    } catch (error) {
      console.error("Failed to generate API key:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteApiKey = (id: string) => {
    const updated = apiKeys.filter((k) => k.id !== id)
    setApiKeys(updated)
    localStorage.setItem("payxpress_api_keys", JSON.stringify(updated))
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-2">Payment API</h1>
      <p className="text-muted-foreground mb-8">Manage your API keys for integration</p>

      {/* Generate New Key */}
      <div className="bg-card border border-border rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Generate New API Key</h2>
        <form onSubmit={generateApiKey} className="flex gap-4">
          <input
            type="text"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            placeholder="Enter a name for this API key (e.g., Mobile App, Website)"
            className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
          />
          <button
            type="submit"
            disabled={loading || !newKeyName.trim()}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Key"}
          </button>
        </form>
      </div>

      {/* API Keys List */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Your API Keys</h2>
        {apiKeys.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No API keys generated yet</p>
        ) : (
          <div className="space-y-4">
            {apiKeys.map((apiKey) => (
              <div
                key={apiKey.id}
                className="bg-background border border-border rounded-lg p-6 flex items-center justify-between"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-2">{apiKey.name}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <code className="text-xs bg-muted px-2 py-1 rounded truncate">
                      {showSecret[apiKey.id] ? apiKey.key : `${apiKey.key.substring(0, 10)}${"*".repeat(30)}`}
                    </code>
                    <button
                      onClick={() => setShowSecret((prev) => ({ ...prev, [apiKey.id]: !prev[apiKey.id] }))}
                      className="p-1 hover:bg-muted rounded transition"
                    >
                      {showSecret[apiKey.id] ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      onClick={() => navigator.clipboard.writeText(apiKey.key)}
                      className="p-1 hover:bg-muted rounded transition"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Created: {new Date(apiKey.created_at).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => deleteApiKey(apiKey.id)}
                  className="ml-4 p-2 hover:bg-destructive/20 text-destructive rounded transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
