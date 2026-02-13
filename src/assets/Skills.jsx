import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express", "MongoDB",
    "MySQL", "AWS (EC2, S3)", "Azure",
    "REST API", "JWT Auth"
  ]

  return (
    <motion.section id="skills" className="py-20 px-6 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div key={index} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
