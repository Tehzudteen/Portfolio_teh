"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroSectionProps {
  name: string
}

export default function HeroSection({ name }: HeroSectionProps) {
  const dotRef = useRef<HTMLDivElement>(null)
  const [dots, setDots] = useState<Array<{ top: string; left: string; opacity: number }>>([])

  // Generate dot positions only once on client side
  useEffect(() => {
    const newDots = Array.from({ length: 200 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.5 + 0.25,
    }))
    setDots(newDots)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dotRef.current) return

      const dotElements = Array.from(dotRef.current.children) as HTMLElement[]

      dotElements.forEach((dot, index) => {
        const speed = 0.1 - index * 0.01
        const x = (window.innerWidth / 2 - e.clientX) * speed
        const y = (window.innerHeight / 2 - e.clientY) * speed

        dot.style.transform = `translate(${x}px, ${y}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [dots.length]) // Only re-run if dots array length changes

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dot pattern background */}
      <div ref={dotRef} className="absolute inset-0 z-0">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            style={{
              top: dot.top,
              left: dot.left,
              opacity: dot.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Hi, I'm {name}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Teh (เท่)</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software Engineer & Full-Stack Developer with expertise in multiple programming languages and frameworks.
          Passionate about building efficient, high-performance software solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6">View My Work</Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6">
            Contact Me <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Animated bars */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="h-2 w-64 bg-purple-600 rounded-full mb-3"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 250, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="h-2 w-48 bg-purple-600 rounded-full mb-3"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 180, opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="h-2 w-32 bg-purple-600 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 120, opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>
    </section>
  )
}
