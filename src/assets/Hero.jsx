import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold text-blue-400"
      >
        Vishal Gupta
      </motion.h1>

      <p className="mt-4 text-xl text-gray-300">
        Full Stack Web Developer & Cloud Enthusiast
      </p>

      <div className="mt-6 space-x-4">
        <a href="#contact" className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
          Hire Me
        </a>
        <button className="border border-blue-400 px-6 py-2 rounded-lg">
          Download Resume
        </button>
      </div>
    </section>
  )
}
