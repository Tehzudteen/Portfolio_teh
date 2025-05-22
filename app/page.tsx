"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Code, Layout, MapPin, GraduationCap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import AnimatedText from "@/components/animated-text"
import HeroSection from "@/components/hero-section"
import ResumeSection from "@/components/resume-section"
import ExperienceCard from "@/components/experience-card"
import EducationCard from "@/components/education-card"
import TrainingCard from "@/components/training-card"
import InternshipDetails from "@/components/internship-details"
import SkillCard from "@/components/skill-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-purple-600 rounded-sm"></div>
          <span className="font-bold text-lg">Phubet Klubchai</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {["about", "internship", "skills", "experience", "education", "contact"].map((section) => (
            <Link key={section} href={`#${section}`} className="hover:text-purple-400 transition-colors capitalize">
              {section}
            </Link>
          ))}
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">My Resume</Button>
      </nav>

      {/* Hero Section */}
      <HeroSection name="Phubet Klubchai" nickname="Teh (เท่)" />

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            </AnimatedText>
            <p className="text-gray-300 mb-4">
              Hi I'm Phubet Klubchai you can call me Teh (เท่). I want to learn about how to work with a team, and I hope
              you'll consider me to join your team.
            </p>
            <p className="text-gray-300 mb-6">
              I'm a highly skilled Software Developer in backend and frontend development. Proficient in multiple
              programming languages, frameworks, and databases, with hands-on experience in designing scalable
              applications. Passionate about building efficient, high-performance software solutions.
            </p>
            <div className="flex gap-4">
              {[["https://github.com", <Github />], ["https://linkedin.com", <Linkedin />], ["https://twitter.com", <Twitter />], ["mailto:hello@example.com", <Mail />]].map(([href, icon], i) => (
                <Link key={i} href={href as string} target="_blank">
                  <Button variant="outline" size="icon" className="rounded-full border-white/20 hover:bg-purple-600 hover:border-purple-600">
                    {icon}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-purple-600 rounded-lg opacity-75 blur"></div>
            <div className="relative aspect-square bg-black rounded-lg overflow-hidden border border-white/20">
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-xl font-bold">Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Details Section */}
      <section id="internship" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/5 rounded-xl">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Internship Details</h2>
        </AnimatedText>
        <InternshipDetails />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
        </AnimatedText>

        <div className="mb-12">
          <div className="flex items-center mb-8">
            <Code className="mr-3 text-purple-400" />
            <h3 className="text-2xl font-bold">Programming Languages</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard skill="C#" percentage={85} color="#9B4F96" projects={["MFU LCMP Web App", "Tratavel Backend", "University Projects"]} yearsExperience={2} description="Proficient in C# development with experience in .NET framework, building backend services and applications." />
            <SkillCard skill="Dart" percentage={90} color="#0175C2" projects={["Pakurng Mobile App", "Flutter UI Components", "Cross-platform Applications"]} yearsExperience={2} description="Expert in Dart programming language, primarily used with Flutter for cross-platform mobile application development." />
            <SkillCard skill="JavaScript" percentage={90} color="#F7DF1E" projects={["Tratavel Frontend", "Kinraidee Web App", "Interactive Web Components"]} yearsExperience={3} description="Strong JavaScript skills with experience in modern ES6+ features, asynchronous programming, and DOM manipulation." />
            <SkillCard skill="TypeScript" percentage={85} color="#3178C6" projects={["Next.js Projects", "React Applications", "Type-safe APIs"]} yearsExperience={2} description="Proficient in TypeScript for building type-safe applications, improving code quality and developer experience." />
            <SkillCard skill="Python" percentage={80} color="#3776AB" projects={["MFU LCMP Research", "Data Analysis", "Machine Learning Models"]} yearsExperience={2} description="Experienced in Python for data science, machine learning, and backend development with frameworks like Django." />
            <SkillCard skill="Rust" percentage={70} color="#FF4500" projects={["System Utilities", "Performance-critical Components", "Learning Projects"]} yearsExperience={1} description="Growing experience with Rust for systems programming, focusing on memory safety and performance." />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Work Experience</h2>
        </AnimatedText>
        <div className="space-y-8 max-w-4xl mx-auto">
          <ExperienceCard
            title="Developer & Data Scientist (MFU LCMP)"
            company="Mae Fah Luang University"
            period="March 2025 - Present"
            duration="1 month"
            responsibilities={[
              "Conducted deep learning research on land cover mapping, identifying urban structures in Chiang Rai province, Thailand.",
              "Developed and trained high-resolution datasets using EfficientNet in Python for improved land cover classification.",
              "Built a web application using Next.js to present research papers and model outputs.",
            ]}
          />
          {/* Other ExperienceCards... */}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Education & Training</h2>
        </AnimatedText>
        <div className="space-y-16 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-400" />
              Education
            </h3>
            <EducationCard
              institution="Mae Fah Luang University"
              degree="Bachelor of Engineering"
              field="Software Engineering"
              period="Current"
              gpa="3.00"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="mr-3 text-purple-400" />
              Training & Certifications
            </h3>
            <div className="space-y-8">
              <TrainingCard
                title="Responsive Web Design"
                provider="freeCodeCamp"
                date="February 27, 2025"
                description="Completed a certification focused on building responsive web pages using HTML and CSS."
              />
              {/* Other TrainingCards... */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-purple-400" /><span>hello@example.com</span></div>
              <div className="flex items-center gap-3"><Linkedin className="h-5 w-5 text-purple-400" /><span>linkedin.com/in/phubet-klubchai</span></div>
              <div className="flex items-center gap-3"><Github className="h-5 w-5 text-purple-400" /><span>github.com/phubet</span></div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-purple-400" /><span>Bangkok, Thailand</span></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Phubet Klubchai. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
      </footer>
    </main>
  )
}
