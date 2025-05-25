"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, CheckCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setIsSubmitted(true)
      form.current?.reset()

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Failed to send message:", error)
      setError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative overflow-hidden bg-transparent backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full mb-4 backdrop-blur-sm"
            >
              <CheckCircle className="w-8 h-8 text-green-400" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold text-white mb-2"
            >
              Message Sent Successfully!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80"
            >
              Thank you for reaching out. I'll get back to you soon.
            </motion.p>
          </motion.div>
        ) : (
          <motion.form key="form" ref={form} onSubmit={sendEmail} variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your message..."
                className="w-full p-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none backdrop-blur-sm"
              />
            </motion.div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 text-sm backdrop-blur-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:cursor-not-allowed group"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{
                    translateX: isSubmitting ? 0 : "200%",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
