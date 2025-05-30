import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Code,
  Layout,
  Database,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import AnimatedText from "@/components/animated-text";
import HeroSection from "@/components/hero-section";
import ExperienceCard from "@/components/experience-card";
import EducationCard from "@/components/education-card";
import TrainingCard from "@/components/training-card";
import InternshipDetails from "@/components/internship-details";
import SkillCard from "@/components/skill-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition"
        >
          <img
            src="/103448179.jpg"
            alt="User"
            className="h-8 w-8 rounded-sm object-cover"
          />
          <span className="font-bold text-lg">Phubet Klubchai</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {[
            "about",
            "internship",
            "skills",
            "experience",
            "education",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="hover:text-purple-400 transition-colors capitalize"
            >
              {section}
            </Link>
          ))}
        </div>
        <a
          href="\Phubet_Klubchai.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-purple-600 hover:bg-purple-700">
            My Resume
          </Button>
        </a>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <AnimatedText>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            </AnimatedText>
            <p className="text-gray-300 mb-4">
              Hi I'm Phubet Klubchai you can call me Teh (เท่). I want to learn
              about how to work with a team, and I hope you'll consider me to
              join your team.
            </p>
            <p className="text-gray-300 mb-6">
              I'm a highly skilled Software Developer in backend and frontend
              development. Proficient in multiple programming languages,
              frameworks, and databases, with hands-on experience in designing
              scalable applications. Passionate about building efficient,
              high-performance software solutions.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/Tehzudteen" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-purple-600 hover:border-purple-600"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://linkedin.com/in/phubet-klubchai"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-purple-600 hover:border-purple-600"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:luckyteh7777@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/20 hover:bg-purple-600 hover:border-purple-600"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-purple-600 rounded-lg opacity-50 blur"></div>
            <div className="relative aspect-square bg-black rounded-lg overflow-hidden border border-white/20">
              <div className="absolute inset-0 grid place-items-center">
                <img src="\teh.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Details Section */}
      <section
        id="internship"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-white/5 rounded-xl"
      >
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Internship Details
          </h2>
        </AnimatedText>
        <InternshipDetails />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Skills & Expertise
          </h2>
        </AnimatedText>

        <div className="space-y-16">
          {/* Programming Languages */}
          <div>
            <div className="flex items-center mb-8">
              <Code className="mr-3 text-purple-400" />
              <h3 className="text-2xl font-bold">Programming Languages</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCard
                skill="C#"
                percentage={45}
                color="#9B4F96"
                projects={[
                  ".Net REST APIs",
                  "Backend Services",
                  "University Assignments",
                ]}
                yearsExperience={2}
                description="Solid understanding of C# with hands-on experience in building .NET backend services and REST APIs, suitable for medium-scale applications."
              />
              <SkillCard
                skill="Dart"
                percentage={35}
                color="#0175C2"
                projects={[
                  "Pakurng Mobile App",
                  "Flutter UI Components",
                  "Cross-platform Applications",
                ]}
                yearsExperience={1}
                description="Working knowledge of Dart, primarily through building cross-platform apps using Flutter. Able to design UI and handle basic logic efficiently."
              />
              <SkillCard
                skill="JavaScript"
                percentage={60}
                color="#F7DF1E"
                projects={[
                  "Tratavel Frontend",
                  "Kinraidee Web App",
                  "Interactive Web Components",
                ]}
                yearsExperience={3}
                description="Strong JavaScript skills with experience in modern ES6+ features, asynchronous programming, and DOM manipulation."
              />
              <SkillCard
                skill="TypeScript"
                percentage={55}
                color="#3178C6"
                projects={[
                  "Next.js Projects",
                  "React Applications",
                  "Type-safe APIs",
                ]}
                yearsExperience={2}
                description="Confident using TypeScript to enhance code reliability and maintainability in modern React and backend applications."
              />
              <SkillCard
                skill="Python"
                percentage={60}
                color="#3776AB"
                projects={[
                  "MFU LCMP Research",
                  "Data Analysis",
                  "Machine Learning Models",
                ]}
                yearsExperience={2}
                description="Strong Python skills used in machine learning, data analysis, and scripting. Comfortable working with libraries like pandas, NumPy, and TensorFlow."
              />
              <SkillCard
                skill="Rust"
                percentage={5}
                color="#FF4500"
                projects={["Rocket REST APIs", "University Assignments"]}
                yearsExperience={0.2}
                description="Beginner in Rust with limited project exposure. Exploring systems programming concepts and memory-safe architecture."
              />
              <SkillCard
                skill="Java"
                percentage={30}
                color="#6DB33F"
                projects={[
                  "Spring Boot REST APIs",
                  "Backend Services",
                  "University Assignments",
                ]}
                yearsExperience={2}
                description="Basic knowledge of Java and Spring Boot for backend services. Familiar with OOP principles and RESTful API design in academic settings."
              />
            </div>
          </div>

          {/* Frontend Development */}
          <div>
            <div className="flex items-center mb-8">
              <Layout className="mr-3 text-purple-400" />
              <h3 className="text-2xl font-bold">Frontend Development</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCard
                skill="Vue.js"
                percentage={50}
                color="#4FC08D"
                projects={[
                  "Dashboard Interfaces",
                  "Interactive Web Apps",
                  "Component Libraries",
                ]}
                yearsExperience={2}
                description="Proficient in Vue.js framework for building interactive user interfaces with a component-based architecture."
              />
              <SkillCard
                skill="React.js"
                percentage={60}
                color="#61DAFB"
                projects={[
                  "Tratavel Frontend",
                  "Portfolio Website",
                  "E-commerce Interfaces",
                ]}
                yearsExperience={3}
                description="Expert in React.js for building dynamic user interfaces with hooks, context API, and state management."
              />
              <SkillCard
                skill="Next.js"
                percentage={50}
                color="#000000"
                projects={[
                  "MFU LCMP Web App",
                  "Portfolio Website",
                  "SEO-optimized Applications",
                ]}
                yearsExperience={2}
                description="Experienced with Next.js for server-side rendering, static site generation, and building full-stack React applications."
              />
              <SkillCard
                skill="Flutter"
                percentage={25}
                color="#02569B"
                projects={[
                  "Pakurng Mobile App",
                  "Cross-platform UIs",
                  "Material Design Implementations",
                ]}
                yearsExperience={2}
                description="Skilled in Flutter for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase."
              />
              <SkillCard
                skill="Tailwind CSS"
                percentage={60}
                color="#38BDF8"
                projects={[
                  "Portfolio Website",
                  "Responsive Layouts",
                  "Custom Design Systems",
                ]}
                yearsExperience={2}
                description="Expert in using Tailwind CSS for rapid UI development with utility-first approach and custom design systems."
              />
              <SkillCard
                skill="Figma"
                percentage={70}
                color="#F24E1E"
                projects={[
                  "Pakurng UI Design",
                  "Kinraidee Wireframes",
                  "Design System Creation",
                ]}
                yearsExperience={2}
                description="Proficient in Figma for UI/UX design, prototyping, and collaboration with design teams."
              />
            </div>
          </div>

          {/* Backend Development */}
          <div>
            <div className="flex items-center mb-8">
              <Database className="mr-3 text-purple-400" />
              <h3 className="text-2xl font-bold">Backend Development</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkillCard
                skill=".NET (C#)"
                percentage={30}
                color="#512BD4"
                projects={["Web APIs", "Practice Projects"]}
                yearsExperience={2}
                description="Basic to intermediate experience using the .NET framework for backend APIs and practice projects involving business logic."
              />
              <SkillCard
                skill="Express.js"
                percentage={50}
                color="#d4f44c"
                projects={[
                  "Tratavel Backend",
                  "RESTful APIs",
                  "Authentication Systems",
                  "Practice Projects",
                ]}
                yearsExperience={3}
                description="Intermediate developer with practical experience building RESTful APIs and auth flows using Express.js and Node.js."
              />
              <SkillCard
                skill="NestJS"
                percentage={35}
                color="#E0234E"
                projects={["Practice Projects"]}
                yearsExperience={2}
                description="Hands-on experience with NestJS for building modular and scalable server-side applications using TypeScript."
              />
              <SkillCard
                skill="Django"
                percentage={10}
                color="#092E20"
                projects={["Practice Projects"]}
                yearsExperience={2}
                description="Beginner-level exposure to Django, suitable for small-scale practice projects involving quick API and admin panel setup."
              />
              <SkillCard
                skill="MongoDB"
                percentage={30}
                color="#47A248"
                projects={[
                  "NoSQL Databases",
                  "Document Storage",
                  "Real-time Applications",
                ]}
                yearsExperience={2}
                description="Good working knowledge of MongoDB, used for NoSQL data modeling and building real-time or flexible-schema applications."
              />
              <SkillCard
                skill="MySQL"
                percentage={40}
                color="#4479A1"
                projects={[
                  "Relational Databases",
                  "Data Modeling",
                  "Query Optimization",
                ]}
                yearsExperience={3}
                description="Intermediate skills in MySQL for designing relational databases, writing efficient queries, and optimizing schema performance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Work Experience
          </h2>
        </AnimatedText>
        <div className="space-y-8 max-w-4xl mx-auto">
          <ExperienceCard
            title="Software Tester & QA (Summer Intern)"
            company="Summit Computer"
            period="June 2025 – August 2025 (now)"
            responsibilities={[
              "Executed manual test cases to identify bugs and ensure software functionality met requirements.",
              "Collaborated with developers to report and verify fixes using bug-tracking tools.",
              "Participated in regression and smoke testing for web-based applications.",
              "Wrote test reports and assisted in developing test plans for new feature releases.",
            ]}
          />

          <ExperienceCard
            title="Developer & Data Scientist (MFU LCMP)"
            company="Mae Fah Luang University"
            period="March 2025 - Present"
            responsibilities={[
              "Conducted deep learning research on land cover mapping, identifying urban structures in Chiang Rai province, Thailand.",
              "Developed and trained high-resolution datasets using EfficientNet in Python for improved land cover classification.",
              "Built a web application using Next.js to present research papers and model outputs.",
            ]}
          />
          <ExperienceCard
            title="UX/UI Designer & Android Developer (Flutter/Dart)"
            company="Mae Fah Luang University"
            period="August 2024 - December 2024"
            responsibilities={[
              "Designed and developed Pakurng, an e-commerce mobile application for buying and selling amulets in Thailand.",
              "Led UX/UI design, ensuring an intuitive user experience and seamless navigation.",
              "Developed the Flutter-based mobile app, integrating core functionalities and backend services.",
            ]}
          />
          <ExperienceCard
            title="Full-Stack Developer"
            company="Mae Fah Luang University"
            period="January 2024 - May 2024"
            responsibilities={[
              "Developed Tratavel, a web application for travelers to find hostels, book accommodations, and explore festivals.",
              "Implemented the frontend using React.js and backend using Express.js, ensuring a responsive and efficient user experience.",
              "Designed and optimized database structures to support user-generated content and real-time updates.",
            ]}
          />
          <ExperienceCard
            title="UX/UI Designer"
            company="Mae Fah Luang University"
            period="August 2023 - December 2023"
            responsibilities={[
              "Designed the Kinraidee (กินไรดี) web application, a restaurant review and location discovery platform for students at Mae Fah Luang University.",
              "Focused on user-centric design, improving accessibility and ease of navigation.",
              "Delivered a fully functional prototype as part of the academic submission project in the first year.",
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Education & Training
          </h2>
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
              <TrainingCard
                title="Hackathon"
                provider="Mae Fah Luang University"
                date="August 11, 2024"
                description="Participated in a university hackathon where I worked on both frontend and backend development within a limited time."
              />
              <TrainingCard
                title="Barcamp"
                provider="Mae Fah Luang University"
                date="May 11, 2023"
                description="Attended a technology event featuring talks from industry professionals on emerging tech trends."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
      >
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
        </AnimatedText>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>luckyteh7777@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-purple-400" />
                <span>www.linkedin.com/in/phubet-klubchai</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-purple-400" />
                <span>https://github.com/Tehzudteen</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>Prachinburi, Thailand</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 text-center text-gray-400">
        <p>
          © {new Date().getFullYear()} Phubet Klubchai. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </footer>
    </main>
  );
}
