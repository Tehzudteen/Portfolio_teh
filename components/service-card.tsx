"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import AnimatedPopup from "./animated-popup"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  details?: string
  offerings?: string[]
  process?: { step: string; description: string }[]
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  details = "Detailed service description will be added here.",
  offerings = ["Offering 1", "Offering 2", "Offering 3"],
  process = [
    { step: "Discovery", description: "Understanding your needs and requirements" },
    { step: "Planning", description: "Creating a roadmap and strategy" },
    { step: "Execution", description: "Building the solution with regular updates" },
    { step: "Delivery", description: "Finalizing and launching the product" },
  ],
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <motion.div
        className="bg-black border border-white/10 rounded-lg p-6 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="mb-4 relative">
          <div className="h-12 w-12 bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-800/50">
            <Icon className="h-6 w-6 text-purple-400" />
          </div>
          <motion.div
            className="absolute -inset-1 bg-purple-600 rounded-lg opacity-0 blur"
            animate={{ opacity: isHovered ? 0.3 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>

      <AnimatedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={title}>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-800/50">
              <Icon className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>

          <div>
            <p className="text-gray-300">{details}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What I Offer</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {offerings.map((offering, index) => (
                <li key={index}>{offering}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">My Process</h3>
            <div className="space-y-3">
              {process.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.step}</h4>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedPopup>
    </>
  )
}
