"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

interface ResumeSectionProps {
  title: string
  icon: LucideIcon
  children: ReactNode
}

export default function ResumeSection({ title, icon: Icon, children }: ResumeSectionProps) {
  return (
    <motion.div
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h3 className="text-2xl font-bold mb-8 flex items-center">
        <Icon className="mr-3 text-purple-400" />
        {title}
      </h3>
      {children}
    </motion.div>
  )
}
