"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import AnimatedPopup from "./animated-popup"
import Image from "next/image"

interface SkillCardProps {
  skill: string
  percentage: number
  description?: string
  projects?: string[]
  yearsExperience?: number
  color?: string
  icon?: string
}

export default function SkillCard({
  skill,
  percentage,
  description = "Detailed skill description will be added here.",
  projects = ["Project 1", "Project 2", "Project 3"],
  yearsExperience = 2,
  color = "#a855f7", // Default purple color
  icon,
}: SkillCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        className="bg-white/5 rounded-lg border border-white/10 overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPopupOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              {icon && (
                <div
                  className="w-10 h-10 rounded-md mr-3 flex items-center justify-center"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Image
                    src={icon || "/placeholder.svg"}
                    alt={skill}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              )}
              <h3 className="font-bold text-lg">{skill}</h3>
            </div>
            <span className="text-lg font-bold" style={{ color }}>
              {percentage}%
            </span>
          </div>

          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {Array.from({ length: Math.min(3, projects.length) }).map((_, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full text-white/70"
                style={{ backgroundColor: `${color}30`, border: `1px solid ${color}50` }}
              >
                {projects[i]}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="h-1"
          style={{ backgroundColor: color }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <AnimatedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={`${skill} - ${percentage}%`}>
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-6">
            {icon && (
              <div
                className="w-16 h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${color}20` }}
              >
                <Image src={icon || "/placeholder.svg"} alt={skill} width={40} height={40} className="object-contain" />
              </div>
            )}
          </div>

          <div className="w-full bg-white/5 rounded-lg p-4 border border-white/10 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Proficiency</span>
              <span className="font-bold" style={{ color }}>
                {percentage}%
              </span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
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
