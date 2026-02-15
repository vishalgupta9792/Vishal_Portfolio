import { motion } from "framer-motion"
import { Code2, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About</span>
            <span className="text-gray-300"> Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-blue-400 font-semibold">Full-Stack Web Developer</span> with 6+ months of hands-on experience building scalable and high-performance web applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Specialized in <span className="text-cyan-400">React.js, Next.js, TypeScript, Node.js,</span> and <span className="text-cyan-400">Express.js</span>. I craft responsive interfaces and robust backend architectures that solve real-world problems.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <Code2 className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-400 mb-1">Full-Stack Expertise</h4>
                  <p className="text-gray-400 text-sm">Proficient in modern web technologies across the entire stack</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Zap className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-400 mb-1">Cloud & DevOps</h4>
                  <p className="text-gray-400 text-sm">AWS, CI/CD pipelines, and scalable deployment strategies</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats/Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-blue-400 mb-2">6+</h4>
              <p className="text-gray-300 mb-4">Months of Professional Development</p>
              <p className="text-gray-400 text-sm">Building production-ready applications with modern tech stack</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-2xl font-bold text-cyan-400 mb-2">10+</h4>
              <p className="text-gray-300 mb-4">Projects Completed</p>
              <p className="text-gray-400 text-sm">From full-stack web apps to cloud-deployed solutions</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">Core Stack</h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "AWS"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg text-sm text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
