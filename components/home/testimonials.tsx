"use client"

import { Quote } from "lucide-react"
import { useState, useEffect } from "react"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      quote:
        "Political BuZZ transformed our campaign with data-driven strategies. Their field operations and digital expertise helped us win decisively.",
      author: "Rajesh Kumar",
      role: "Campaign Manager",
      tag: "Municipal Corporation Election",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The GBJ Command Platform gave us real-time insights that changed how we made decisions. Every ward, every booth, every voter - all tracked perfectly.",
      author: "Priya Sharma",
      role: "Candidate",
      tag: "Nagar Parishad Member",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "From social media to door-to-door, they executed flawlessly. The war room support in the last 20 days was game-changing.",
      author: "Amit Deshmukh",
      role: "Volunteer Coordinator",
      tag: "MLA Campaign",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-soft-gray" style={{ backgroundColor: "#F5F7FA" }}>
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-heading font-bold text-neutral-dark mb-4"
            style={{ color: "#0F1724" }}
          >
            Voices of Victory
          </h2>
          <p className="text-lg text-neutral-dark/70 font-sans">
            Hear from the leaders who trusted us with their campaigns
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-12 min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"
                }`}
              >
                <Quote className="h-12 w-12 text-gold mb-6" style={{ color: "#FFD166" }} />

                <p
                  className="text-xl md:text-2xl text-neutral-dark font-sans leading-relaxed mb-8 italic"
                  style={{ color: "#0F1724" }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-full bg-light-blue flex items-center justify-center text-2xl font-heading font-bold text-royal-blue"
                    style={{ backgroundColor: "#E6F0FF", color: "#003399" }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-neutral-dark text-lg" style={{ color: "#0F1724" }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-neutral-dark/70 font-sans">{testimonial.role}</div>
                    <div className="text-sm text-royal-blue font-ui font-medium" style={{ color: "#003399" }}>
                      {testimonial.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-royal-blue w-8" : "bg-neutral-dark/20"
                }`}
                style={{ backgroundColor: index === activeIndex ? "#003399" : "rgba(15, 23, 36, 0.2)" }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
