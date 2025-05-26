"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  duration?: string
  responsibilities: string[]
}

export default function ExperienceCard({ title, company, period, duration, responsibilities }: ExperienceCardProps) {
  return (
    <motion.div
      className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-purple-400">{title}</h3>
        <div className="flex items-center text-gray-400 mt-2 md:mt-0">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{period}</span>

          <span>{duration}</span>
        </div>
      </div>

      <div className="flex items-center mb-4 text-gray-300">
        <Briefcase className="h-4 w-4 mr-2" />
        <span>{company}</span>
      </div>

      <h4 className="font-medium mb-2">Responsibilities:</h4>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </motion.div>
  )
}
