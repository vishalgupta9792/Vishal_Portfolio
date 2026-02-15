import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, User, MessageSquare, Send, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
    blur: { scale: 1, boxShadow: "0 0 0px rgba(59, 130, 246, 0)" }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Get In</span>
            <span className="text-gray-300"> Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-emerald-900/30 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-8 text-center backdrop-blur-sm"
              >
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.6 }}>
                  <Send className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                </motion.div>
                <p className="text-emerald-300 font-semibold text-lg mb-2">Message sent successfully!</p>
                <p className="text-emerald-200/70 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-sm text-gray-300 mb-3 font-semibold">
                    <User className="w-4 h-4 mr-2 text-blue-400" />
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === "name" ? "focus" : "blur"}
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 hover:border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all backdrop-blur-sm"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-sm text-gray-300 mb-3 font-semibold">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === "email" ? "focus" : "blur"}
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 hover:border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all backdrop-blur-sm"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div variants={itemVariants}>
                  <label className="flex items-center text-sm text-gray-300 mb-3 font-semibold">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                    Message
                  </label>
                  <motion.textarea
                    placeholder="Tell me about your project..."
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    variants={inputVariants}
                    animate={focusedField === "message" ? "focus" : "blur"}
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 hover:border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 transition-all resize-none backdrop-blur-sm"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "vishalgupta979204@gmail.com",
                  link: "mailto:vishalgupta979204@gmail.com"
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Vishal Gupta",
                  link: "https://www.linkedin.com/in/vishal-gupta-913a55298"
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "@vishalgupta9792",
                  link: "https://github.com/vishalgupta9792"
                }
              ].map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={idx}
                    href={method.link}
                    target={method.link.startsWith("mailto") ? undefined : "_blank"}
                    rel={method.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-white font-semibold hover:text-blue-400 transition-colors">{method.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Availability */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-blue-300 font-semibold">Available for Projects</p>
              </div>
              <p className="text-sm text-gray-300">Open to exciting opportunities and collaborations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
