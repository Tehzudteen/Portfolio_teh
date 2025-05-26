"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function InternshipDetails() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={item}
        className="bg-white/5 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
          <Briefcase className="mr-3" />
          Internship Positions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Software Engineer</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Fullstack Developer</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Frontend Developer</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Backend Developer</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white/5 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
          <Calendar className="mr-3" />
          Internship Period
        </h3>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <span className="text-lg font-medium">
            January 10, 2026 - May 31, 2026
          </span>
          <p className="text-gray-400 mt-2">General Internship Format</p>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white/5 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
          <MapPin className="mr-3" />
          Preferred Locations
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Bangkok</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Prachinburi</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Chonburi</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Chiang Mai</span>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <span className="text-lg font-medium">Somewhere and Anywhere😁</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white/5 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
          <BadgeCheck className="mr-3" />
          Desired Benefits
        </h3>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <span className="text-lg font-medium">
            Allowance, Accommodation, and Transportation
          </span>
          <p className="text-gray-400 mt-2">(If available)</p>
        </div>
      </motion.div>

      <motion.div
        variants={item}
        className="bg-white/5 rounded-lg p-6 border border-purple-500/20"
      >
        <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
          <Building2 className="mr-3" />
          English Proficiency
        </h3>
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <span className="text-lg font-medium">Intermediate Level</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
