"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  field: string
  period: string
  gpa: string
}

export default function EducationCard({ institution, degree, field, period, gpa }: EducationCardProps) {
  return (
    <motion.div
      className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-purple-400">{institution}</h3>
        <div className="flex items-center text-gray-400 mt-2 md:mt-0">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{period}</span>
        </div>
      </div>

      <div className="flex items-center mb-4 text-gray-300">
        <GraduationCap className="h-4 w-4 mr-2" />
        <span>
          {degree} in {field}
        </span>
      </div>

      <div className="flex items-center text-gray-300">
        <Award className="h-4 w-4 mr-2" />
        <span>GPA: {gpa}</span>
      </div>
    </motion.div>
  )
}
