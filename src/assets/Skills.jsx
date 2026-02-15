import { motion } from "framer-motion"
import { Code2, Server, Database, Cloud, GitBranch, Lock, Settings } from "lucide-react"

export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-cyan-500 to-blue-500",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware", "Architecture"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-emerald-500 to-cyan-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Data Modeling", "Query Optimization", "Schema Design"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS (EC2, S3, IAM)", "Vercel", "Netlify", "CI/CD Pipelines", "GitHub Actions", "Deployment"]
    },
    {
      title: "Tools & Version Control",
      icon: GitBranch,
      color: "from-pink-500 to-rose-500",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Terminal", "NPM/Yarn"]
    },
    {
      title: "Security & Auth",
      icon: Lock,
      color: "from-violet-500 to-purple-500",
      skills: ["JWT", "OAuth 2.0", "RBAC", "Secure APIs", "Data Protection", "Best Practices"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <span className="text-gray-300">Technical</span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 p-8 hover:border-white/30 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 -z-20`} />

                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${group.color}`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>

                <div className="space-y-2">
                  {group.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 backdrop-blur-sm"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-blue-400">Always learning:</span> I stay updated with the latest technologies and best practices in web development. Whether it's new frameworks, architectural patterns, or cloud solutions, I'm committed to continuous improvement and delivering cutting-edge solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
