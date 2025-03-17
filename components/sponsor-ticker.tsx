"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function SponsorTicker() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    if (scrollWidth <= clientWidth) return

    let scrollPosition = 0
    const speed = 1

    const scroll = () => {
      scrollPosition += speed
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition
      }
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  // Sample sponsor logos
  const sponsors = [
    "Sponsor 1",
    "Sponsor 2",
    "Sponsor 3",
    "Sponsor 4",
    "Sponsor 5",
    "Sponsor 6",
    "Sponsor 7",
    "Sponsor 8",
  ]

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex items-center gap-12 py-2 overflow-hidden whitespace-nowrap">
        {/* First set of logos */}
        {sponsors.map((sponsor, index) => (
          <div key={`sponsor-${index}`} className="flex-shrink-0">
            <Image
              src={`/placeholder.svg?height=60&width=180&text=${sponsor}`}
              alt={sponsor}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}

        {/* Duplicate set for seamless scrolling */}
        {sponsors.map((sponsor, index) => (
          <div key={`sponsor-dup-${index}`} className="flex-shrink-0">
            <Image
              src={`/placeholder.svg?height=60&width=180&text=${sponsor}`}
              alt={sponsor}
              width={180}
              height={60}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

