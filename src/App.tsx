"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  Users,
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Lightbulb,
  Settings,
  Monitor,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "education", "experience", "services", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    // Add scroll animation observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    })

    // Observe elements
    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white">
   

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Sulayman
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Education", "Experience", "Services", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              {["Home", "About", "Skills", "Education", "Experience", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item.toLowerCase())
                      setIsMobileMenuOpen(false)
                    }}
                    className={`block w-full text-left px-4 py-3 text-lg font-medium transition-all duration-300 hover:text-blue-400 hover:bg-gray-800/50 ${
                      activeSection === item.toLowerCase() ? "text-blue-400 bg-gray-800/30" : "text-gray-300"
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isMobileMenuOpen ? "slideInFromRight 0.5s ease-out forwards" : "none",
                    }}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 text-center animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sulayman
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 animate-slide-in-right animation-delay-200">
            Full Stack Developer | Tech Founder | CS Student
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-400 leading-relaxed">
            Building scalable digital solutions that disrupt and empower. Founder of S8Globals, currently pursuing
            Computer Science at University of the People.
          </p>
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in animation-delay-600">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce-slow animate-fade-in animation-delay-800"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-on-scroll">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gray-800 rounded-full flex items-center justify-center">
                  <Code size={80} className="text-blue-400 sm:w-[120px] sm:h-[120px]" />
                </div>
              </div>
            </div>
            <div className="animate-on-scroll animation-delay-200 order-1 lg:order-2">
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a driven full stack developer with a passion for creating innovative digital solutions. As the
                founder of S8Globals, I focus on building scalable applications that make a real-world impact.
              </p>
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                Currently grinding through my Computer Science degree at University of the People, I blend academic
                rigor with hands-on project execution. I specialize in crafting clean, maintainable code and
                user-centric designs.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-8">
                <StatCard icon={<Code />} number={50} label="Projects Completed" />
                <StatCard icon={<Users />} number={25} label="Happy Clients" />
                <StatCard icon={<Award />} number={3} label="Years Experience" />
                <StatCard icon={<BookOpen />} number={15} label="Technologies" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <SkillCategory
              title="Frontend"
              icon={<Globe />}
              skills={["React.js", "Next.js", "Vue.js", "TypeScript", "TailwindCSS", "Bootstrap"]}
            />
            <SkillCategory
              title="Backend"
              icon={<Code />}
              skills={["Node.js", "Express", "Python", "Django", "Flask", "REST APIs"]}
            />
            <SkillCategory
              title="Database & Tools"
              icon={<Database />}
              skills={["MongoDB", "PostgreSQL", "MySQL", "Git", "JWT", "Vercel"]}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-on-scroll">
            My <span className="text-blue-400">Education</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <EducationCard
              degree="Bachelor of Science in Computer Science"
              institution="University of the People"
              year="Expected 2025"
              description="Currently pursuing a comprehensive Computer Science degree, focusing on algorithms, data structures, software engineering, and artificial intelligence."
            />
            <EducationCard
              degree="High School Diploma"
              institution="[Your High School Name]"
              year="2019"
              description="Completed secondary education with a strong foundation in mathematics and science, fostering an early interest in technology."
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-on-scroll">
            Work <span className="text-blue-400">Experience</span>
          </h2>
          <div className="space-y-12">
            <ExperienceCard
              title="Founder & Lead Developer"
              company="S8Globals"
              duration="Jan 2022 - Present"
              description="Founded S8Globals to build scalable digital solutions. Led development of multiple full-stack applications, managed client relationships, and drove product innovation from concept to deployment."
              responsibilities={[
                "Architected and developed full-stack applications using React, Node.js, and MongoDB.",
                "Managed project lifecycles from ideation to deployment on Vercel and DigitalOcean.",
                "Led a small team, ensuring code quality and adherence to Agile methodologies.",
                "Secured and managed client projects, delivering tailored software solutions.",
              ]}
            />
            <ExperienceCard
              title="Freelance Full Stack Developer"
              company="Self-Employed"
              duration="Mar 2020 - Dec 2021"
              description="Provided full-stack development services to various clients, building custom web applications and improving existing systems."
              responsibilities={[
                "Developed responsive frontends with React.js and TailwindCSS.",
                "Built robust backend APIs using Node.js and Express.",
                "Implemented database solutions with PostgreSQL and MySQL.",
                "Collaborated directly with clients to gather requirements and deliver solutions.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-on-scroll">
            My <span className="text-blue-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Monitor />}
              title="Full Stack Development"
              description="End-to-end development of web applications, from robust backend APIs to dynamic user interfaces."
            />
            <ServiceCard
              icon={<Lightbulb />}
              title="Custom Software Solutions"
              description="Tailored software development to meet unique business needs and solve complex problems."
            />
            <ServiceCard
              icon={<Settings />}
              title="API Development & Integration"
              description="Building secure and scalable RESTful APIs and integrating third-party services."
            />
            <ServiceCard
              icon={<Database />}
              title="Database Design & Management"
              description="Designing efficient database schemas and managing data for optimal performance."
            />
            <ServiceCard
              icon={<Globe />}
              title="UI/UX Design & Prototyping"
              description="Creating intuitive and engaging user interfaces with a focus on user experience."
            />
            <ServiceCard
              icon={<Code />}
              title="Code Review & Optimization"
              description="Analyzing existing codebases for improvements, performance optimization, and best practices."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-on-scroll">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto animate-on-scroll">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
          </p>

          <div className="space-y-12">
            {/* Project 1 - Featured */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                    <div className="text-center">
                      <Globe size={80} className="text-white/80 mx-auto mb-4" />
                      <div className="text-white/60 text-sm">Live Preview</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Live</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white">S8Globals Platform</h3>
                      <div className="flex space-x-3">
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      A comprehensive digital solutions platform serving multiple clients worldwide. Features include
                      real-time analytics, client management, project tracking, and automated billing systems. Built
                      with modern technologies for scalability and performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["React.js", "Node.js", "MongoDB", "Socket.io", "Stripe API", "AWS"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
                        View Live <ExternalLink size={16} className="ml-2" />
                      </button>
                      <button className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-6 py-2 rounded-lg transition-colors duration-200 flex items-center">
                        Source Code <Github size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll">
                <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 h-full">
                  <div className="relative h-48 bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                    <Database size={60} className="text-white/80" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                        In Progress
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">E-Commerce Dashboard</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Full-stack e-commerce management system with real-time analytics, inventory management, and
                      automated reporting features.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Next.js", "PostgreSQL", "TailwindCSS", "Chart.js"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                          85% Complete
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center"
                      >
                        Preview <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105 h-full">
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Users size={60} className="text-white/80" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Task Management App</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      Collaborative task management application with real-time updates, team collaboration, and project
                      timeline tracking.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Vue.js", "Express", "Socket.io", "MongoDB"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center">
                          <Award size={14} className="text-yellow-400 mr-2" />
                          Award Winner
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center"
                      >
                        View Project <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Projects Button */}
            <div className="text-center animate-on-scroll">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-on-scroll">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-on-scroll animation-delay-200">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex justify-center space-x-8 animate-on-scroll animation-delay-400">
            <ContactButton icon={<Mail />} label="Email" href="mailto:sulayman@example.com" />
            <ContactButton icon={<Linkedin />} label="LinkedIn" href="#" />
            <ContactButton icon={<Github />} label="GitHub" href="#" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2024 Sulayman. Built with React & TailwindCSS.</p>
      </footer>
    </div>
  )
}

// Components
function StatCard({ icon, number, label }: { icon: React.ReactNode; number: number; label: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < number) {
        setCount(count + 1)
      }
    }, 50)
    return () => clearTimeout(timer)
  }, [count, number])

  return (
    <div className="text-center p-4 bg-gray-800/50 rounded-lg transform hover:scale-105 transition-transform duration-200">
      <div className="text-blue-400 mb-2 flex justify-center">{icon}</div>
      <div className="text-2xl font-bold text-blue-400">{count}+</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}

function SkillCategory({ title, icon, skills }: { title: string; icon: React.ReactNode; skills: string[] }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg animate-on-scroll transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <div className="text-blue-400 mr-3">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div
            key={skill}
            className="flex items-center animate-slide-in-left"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
            <span className="text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactButton({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/50"
    >
      <div className="text-blue-400 mb-2">{icon}</div>
      <span className="text-gray-300">{label}</span>
    </a>
  )
}

function EducationCard({
  degree,
  institution,
  year,
  description,
}: {
  degree: string
  institution: string
  year: string
  description: string
}) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg animate-on-scroll transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center mb-4">
        <GraduationCap size={24} className="text-blue-400 mr-3" />
        <div>
          <h3 className="text-xl font-semibold text-white">{degree}</h3>
          <p className="text-gray-400 text-sm">
            {institution} ({year})
          </p>
        </div>
      </div>
      <p className="text-gray-300 text-base leading-relaxed">{description}</p>
    </div>
  )
}

function ExperienceCard({
  title,
  company,
  duration,
  description,
  responsibilities,
}: {
  title: string
  company: string
  duration: string
  description: string
  responsibilities: string[]
}) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-lg animate-on-scroll transform hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center mb-4">
        <Briefcase size={24} className="text-blue-400 mr-3" />
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">
            {company} ({duration})
          </p>
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-blue-400">&bull;</span>
            <span>{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg animate-on-scroll transform hover:scale-105 transition-transform duration-300 text-center">
      <div className="text-blue-400 mb-4 mx-auto">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
