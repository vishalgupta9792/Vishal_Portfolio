import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Online Auction Platform",
      stack: "MERN Stack",
      highlights: [
        "Developed a full stack auction platform using MERN stack",
        "Designed REST APIs for user management and auction listings",
        "Integrated frontend with backend APIs",
        "Worked on authentication and basic authorization"
      ]
    },
    {
      title: "Digital Waste Management System",
      stack: "MERN (MongoDB, Express.js, React, Node.js)",
      highlights: [
        "Designed a user-friendly interface enabling users to donate reusable items and connect with those in need",
        "Reduce waste and support sustainability through digital community-driven waste management",
        "Enabled users to donate reusable items and manage pickup requests through an interactive, responsive web platform"
      ]
    },
    {
      title: "College Website",
      stack: "React",
      highlights: [
        "Contributed to development of a responsive college website",
        "Implemented UI components and page layouts",
        "Ensured cross-device compatibility"
      ]
    },
    {
      title: "Eye Gesture Control System (Academic Project)",
      stack: "Python, OpenCV",
      highlights: [
        "Built an eye gesture control system using Python and OpenCV",
        "Focused on computer vision concepts and gesture detection"
      ]
    }
  ]

  const container = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section id="projects" className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Projects
      </h2>

      <motion.div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div key={i} variants={item} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
            <p className="text-sm text-blue-400 mb-3">Tech Stack: {project.stack}</p>
            <ul className="text-gray-300 text-sm space-y-2">
              {project.highlights.map((highlight, j) => (
                <li key={j} className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
