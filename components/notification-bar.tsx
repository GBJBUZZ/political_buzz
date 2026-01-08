"use client"

import { X } from "lucide-react"
import { useState } from "react"

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-white py-2 px-4 text-center text-sm relative">
      <p className="font-medium">
        🎯 New Training Cohort Starting Soon | 📊 Bhandara 2025 Case Study Now Live | 📞 Book Your Strategy Call:
        +917058253695
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
