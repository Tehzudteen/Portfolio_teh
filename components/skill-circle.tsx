"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedPopup from "./animated-popup"

interface SkillCircleProps {
  skill: string
  percentage: number
  description?: string
  projects?: string[]
  yearsExperience?: number
  color?: string
}

export default function SkillCircle({
  skill,
  percentage,
  description = "Detailed skill description will be added here.",
  projects = ["Project 1", "Project 2", "Project 3"],
  yearsExperience = 2,
  color = "#a855f7", // Default purple color
}: SkillCircleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // SVG parameters
  const size = 160
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center p-4 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="relative">
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-lg"
            style={{ backgroundColor: color, opacity: 0.2 }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.3 : 0.1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* SVG Circle */}
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth={strokeWidth}
            />

            {/* Progress circle */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </svg>

          {/* Percentage text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="text-3xl font-bold">{percentage}%</span>
            </motion.div>
          </div>
        </div>

        {/* Skill name */}
        <motion.h3
          className="mt-4 text-lg font-medium text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skill}
        </motion.h3>

        {/* Hover indicator */}
        <motion.div
          className="absolute inset-0 border-2 border-purple-500/0 rounded-lg pointer-events-none"
          animate={{
            borderColor: isHovered ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <AnimatedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={`${skill} - ${percentage}%`}>
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke={color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={2 * Math.PI * 45 - (percentage / 100) * (2 * Math.PI * 45)}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold">{percentage}%</span>
              </div>
            </div>
          </div>

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
        </div>
      </AnimatedPopup>
    </>
  )
}
