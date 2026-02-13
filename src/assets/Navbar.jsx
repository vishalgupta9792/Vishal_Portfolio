import { useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">
          Vishal Gupta
        </h1>

        <div className="hidden md:flex space-x-6">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <Menu className="md:hidden cursor-pointer" onClick={() => setOpen(!open)} />

        {open && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center py-4 space-y-4 md:hidden">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
