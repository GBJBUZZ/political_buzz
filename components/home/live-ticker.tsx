"use client"

import { useEffect, useState } from "react"

export function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const updates = [
    "🎯 Bhandara 2025: Women Mayor Seat Campaign - 35 Ward Strategies Deployed",
    "📊 New Training Cohort: Advanced Digital Campaign Management - Register Now",
    "🏆 Press Coverage: Featured in 250+ Media Platforms for Election Innovation",
    "💡 Latest Research: Voter Turnout Optimization Strategies Released",
    "🚀 GBJ Command Platform: New AI-Powered Analytics Module Launched",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % updates.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [updates.length])

  return (
    <section className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-white text-center font-medium animate-pulse-glow">{updates[currentIndex]}</div>
        </div>
      </div>
    </section>
  )
}
