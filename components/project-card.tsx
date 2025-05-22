"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import AnimatedPopup from "./animated-popup"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  longDescription?: string
  features?: string[]
  demoUrl?: string
  githubUrl?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  longDescription = "Detailed project description will be added here.",
  features = ["Feature 1", "Feature 2", "Feature 3"],
  demoUrl = "#",
  githubUrl = "#",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <>
      <motion.div
        className="group relative bg-black border border-white/10 rounded-lg overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-50px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 flex items-center">
            {title}
            <motion.div
              animate={{ x: isHovered ? 5 : 0, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-2"
            >
              <ArrowUpRight className="h-4 w-4 text-purple-400" />
            </motion.div>
          </h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-purple-600"
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <AnimatedPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} title={title}>
        <div className="space-y-4">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-300">{longDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-2">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
            <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                View Code
              </a>
            </Button>
          </div>
        </div>
      </AnimatedPopup>
    </>
  )
}
