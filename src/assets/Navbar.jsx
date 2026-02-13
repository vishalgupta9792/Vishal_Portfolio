import { useState } from "react"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.nav className="fixed w-full bg-gray-900 shadow-lg z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 className="text-xl font-bold text-blue-400" variants={navItem} initial="hidden" animate="visible">
          Vishal Gupta
        </motion.h1>

        <div className="hidden md:flex space-x-6">
          <motion.a href="#about" variants={navItem} initial="hidden" animate="visible">About</motion.a>
          <motion.a href="#skills" variants={navItem} initial="hidden" animate="visible">Skills</motion.a>
          <motion.a href="#projects" variants={navItem} initial="hidden" animate="visible">Projects</motion.a>
          <motion.a href="#contact" variants={navItem} initial="hidden" animate="visible">Contact</motion.a>
          <motion.a href="/resume" variants={navItem} initial="hidden" animate="visible">Resume</motion.a>
        </div>

        <Menu className="md:hidden cursor-pointer" onClick={() => setOpen(!open)} />

        {open && (
          <motion.div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="/resume">Resume</a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
