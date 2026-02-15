import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, product management, and user authentication.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demo: "#",
      github: "#",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team features, and progress tracking.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      demo: "#",
      github: "#",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chat application featuring AI-powered responses, conversation history, and user preferences.",
      tags: ["React", "Express", "OpenAI API", "Redis"],
      demo: "#",
      github: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization, filtering, and export capabilities.",
      tags: ["Next.js", "D3.js", "MongoDB", "AWS"],
      demo: "#",
      github: "#",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Social Media Feed",
      description: "Twitter-like social platform with follow system, posts, likes, and real-time notifications.",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      demo: "#",
      github: "#",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio with smooth animations and optimized performance.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      demo: "#",
      github: "#",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured</span>
            <span className="text-gray-300"> Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-blue-400/30 hover:border-blue-400 hover:bg-blue-400/10 text-blue-400 font-semibold transition-all duration-300 cursor-pointer"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Decorative border glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 blur-xl -z-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
