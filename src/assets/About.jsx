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
        Full-Stack Web Developer with 6+ months of hands-on experience building scalable and high-performance web applications using React.js, Next.js, TypeScript, Node.js, and Express.js. Passionate about developing optimized, user-friendly interfaces and robust backend architectures.

Experienced in designing and developing RESTful APIs and working with both NoSQL and relational databases including MongoDB, PostgreSQL, and MySQL, with strong knowledge of database schema design, data modeling, query optimization, and scalable data management.

Skilled in building server-side rendered and high-performance applications using Next.js, ensuring SEO optimization and improved application performance. Proficient in developing type-safe and maintainable applications using TypeScript.

Experienced in deploying production-ready applications using AWS Cloud Services (EC2, S3, IAM) and implementing automated CI/CD pipelines using GitHub Actions.

Strong understanding of authentication and security best practices including JWT Authentication, OAuth 2.0, and Role-Based Access Control (RBAC).

Comfortable working in collaborative development environments, following clean code principles, and delivering end-to-end real-world projects.
      </p>
    </motion.section>
  )
}
