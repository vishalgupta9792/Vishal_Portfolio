import { motion } from "framer-motion"

export default function Skills() {
  const frontend = ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive Design"]
  const backend = ["Node.js", "Express.js", "REST API Development"]
  const database = ["MongoDB", "PostgreSQL", "MySQL", "Database Design", "Data Modeling", "Query Optimization", "CRUD Operations"]
  const cloud = ["AWS EC2", "S3", "IAM", "Vercel", "Netlify"]
  const devops = ["CI/CD Pipeline", "GitHub Actions"]
  const auth = ["JWT Authentication", "OAuth 2.0", "RBAC"]
  const tools = ["Git", "GitHub", "Postman"]

  const section = (title, items, delayStart = 0) => (
    <div>
      <h3 className="text-xl font-semibold text-blue-400 mb-3">{title}</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        {items.map((it, i) => (
          <motion.div key={i}
            className="bg-gray-800 p-3 rounded-lg"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: delayStart + i * 0.03 }}
          >
            {it}
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <motion.section id="skills" className="py-20 px-6 bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Technical Skills
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {section("Frontend", frontend, 0)}
        {section("Backend", backend, 0.2)}
        {section("Database", database, 0.4)}
        {section("Cloud & Deployment", cloud, 0.6)}
        {section("DevOps", devops, 0.8)}
        {section("Authentication & Security", auth, 1.0)}
        {section("Tools", tools, 1.2)}

        <p className="text-gray-300 mt-4">Strong understanding of scalable backend architecture, database management, and secure cloud-based deployment strategies.</p>
      </div>
    </motion.section>
  )
}
