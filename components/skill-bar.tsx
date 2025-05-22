"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useState } from "react"
import AnimatedPopup from "./animated-popup"

interface SkillBarProps {
  skill: string
  percentage: number
  description?: string
  projects?: string[]
  yearsExperience?: number
}

export default function SkillBar({
  skill,
  percentage,
  description = "Detailed skill description will be added here.",
  projects = ["Project 1", "Project 2", "Project 3"],
  yearsExperience = 2,
}: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <div
        ref={ref}
        className="relative mb-8 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="flex justify-between items-center mb-2">
          <motion.span
            className="text-lg font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {skill}
          </motion.span>
          <motion.span
            className="text-lg font-bold text-purple-400"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {percentage}%
          </motion.span>
        </div>

        <div className="h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-700 to-purple-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-1 bg-white/50"
              animate={{
                opacity: isHovered ? [0.5, 1, 0.5] : 0,
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </motion.div>
        </div>

        {/* Animated dots */}
        <div className="absolute -bottom-4 left-0 w-full flex justify-between px-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${(i + 1) * 20 <= percentage ? "bg-purple-400" : "bg-white/20"}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
            />
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute inset-0 border border-purple-500/0 rounded-lg pointer-events-none"
          animate={{
            borderColor: isHovered ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0)",
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <AnimatedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={`${skill} - ${percentage}%`}>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-300">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-gray-300">
              {yearsExperience} years of experience with {skill}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Projects Using {skill}</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-700 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-1 text-sm text-gray-400">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </AnimatedPopup>
    </>
  )
}
