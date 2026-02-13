import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section id="about" className="py-20 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-6">About Me</h2>

      <p className="text-gray-300 leading-7">
        I am a final year Full Stack Web Developer passionate about building scalable web applications and cloud-based solutions using AWS and Azure.
      </p>
    </motion.section>
  )
}
