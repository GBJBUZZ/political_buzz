"use client"

import { useEffect, useRef, useState } from "react"

export function KeyMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const metrics = [
    { value: "500+", label: "Campaigns", sublabel: "Since 2008" },
    { value: "85k+", label: "Local Voter DB", sublabel: "Bhandara" },
    { value: "340", label: "Field Agents", sublabel: "Deployed" },
    { value: "60%+", label: "Voter Engagement", sublabel: "Average" },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-royal-blue" style={{ backgroundColor: "#003399" }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-gold mb-2" style={{ color: "#FFD166" }}>
                {metric.value}
              </div>
              <div className="text-base font-sans font-medium text-white mb-1">{metric.label}</div>
              <div className="text-sm font-sans text-white/70">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
