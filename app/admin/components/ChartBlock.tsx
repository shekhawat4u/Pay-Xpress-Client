"use client"

import React from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function ChartBlock({ data }: any) {
  return (
    <div style={{ height: 220 }}>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
  )
}
