import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, User, MessageSquare, Send } from "lucide-react"

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
    <motion.section id="contact" className="py-20 px-6 bg-gray-950 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <motion.div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-2"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </motion.h2>
        
        <motion.p className="text-gray-400 text-center mb-12"
          variants={itemVariants}
        >
          Let's collaborate and create something amazing together
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-green-900 border border-green-500 rounded-lg p-6 text-center"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              <Send className="w-12 h-12 text-green-400 mx-auto mb-3" />
            </motion.div>
            <p className="text-green-300 font-semibold">Message sent successfully!</p>
            <p className="text-green-200 text-sm mt-1">Thanks for reaching out. I'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center text-sm text-gray-300 mb-2">
                <User className="w-4 h-4 mr-2 text-blue-400" />
                Your Name
              </label>
              <motion.input
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === "name" ? "focus" : "blur"}
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center text-sm text-gray-300 mb-2">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                Your Email
              </label>
              <motion.input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === "email" ? "focus" : "blur"}
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center text-sm text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                Your Message
              </label>
              <motion.textarea
                placeholder="Tell me about your project or inquiry..."
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                variants={inputVariants}
                animate={focusedField === "message" ? "focus" : "blur"}
                required
                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none transition-all resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all"
            >
              <span>Send Message</span>
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                <Send className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </form>
        )}

        {/* Contact Info Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: "📧", label: "Email", value: "vishalgupta9792@gmail.com" },
            { icon: "💼", label: "LinkedIn", value: "@vishalgupta" },
            { icon: "🐙", label: "GitHub", value: "@vishalgupta9792" }
          ].map((item, i) => (
            <motion.div key={i}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-gray-400 text-sm">{item.label}</p>
              <p className="text-blue-400 font-semibold text-sm mt-1">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
