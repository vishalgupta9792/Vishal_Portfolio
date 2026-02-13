import { motion } from "framer-motion"

export default function Resume() {
  return (
    <motion.section id="resume" className="py-20 px-6 max-w-5xl mx-auto bg-transparent"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">Professional Summary</h2>

      <p className="text-gray-300 leading-7 mb-6">
        Full-Stack Web Developer with 6 months of hands-on experience working on web applications using React, Node.js, and Express.js. Experienced in developing responsive frontend interfaces, building REST APIs, and integrating databases. Familiar with frontend deployment and basic backend hosting concepts. Comfortable working on real-world projects and collaborating in a development environment.
      </p>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Education</h3>
      <div className="text-gray-300 mt-2 leading-6">
        <p className="font-semibold">Buddha Institute of Technology</p>
        <p>B.Tech - Computer Science and Engineering (AI & ML) — CGPA: 7.09/10 (Dec 2022 – Jun 2026)</p>
        <p className="mt-2 font-semibold">Vimal Vidya Mandir</p>
        <p>Intermediate (12th) - Physics, Chemistry, Mathematics — 66.67% (2020 – 2022)</p>
      </div>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Technical Skills</h3>
      <ul className="text-gray-300 list-disc pl-6 mt-2 leading-7">
        <li><strong>Frontend Technologies:</strong> React.js, HTML5, CSS, Tailwind CSS, JavaScript</li>
        <li><strong>Backend Technologies:</strong> Node.js, Express.js, JWT Authentication</li>
        <li><strong>Databases:</strong> MongoDB, MySQL</li>
        <li><strong>Deployment & Hosting:</strong> Vercel, Netlify, Basic AWS</li>
        <li><strong>Tools & Frameworks:</strong> Git & GitHub, Postman, VS Code</li>
        <li><strong>Other:</strong> Python, OpenCV (Basic)</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Professional Experience</h3>
      <div className="text-gray-300 mt-2 leading-7">
        <p className="font-semibold">Full-Stack Developer Intern | Edunet Foundation</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Building modern web applications with MERN Stack.</li>
          <li>Worked on an online auction platform.</li>
        </ul>

        <p className="font-semibold mt-4">Full-Stack Developer | EDUSUPPORT</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Developed and maintained full-stack web applications using MERN stack (MongoDB, Express.js, React, Node.js) for school websites and AI-powered tutoring platforms.</li>
          <li>Integrated AI-based features, built responsive interfaces, and worked on authentication, API integration, and database management.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Projects</h3>
      <div className="text-gray-300 mt-2 leading-7">
        <p className="font-semibold">Online Auction Platform</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Developed a full-stack auction platform using MERN stack.</li>
          <li>Designed REST APIs for user management and auction listings.</li>
          <li>Integrated frontend with backend APIs and implemented authentication and authorization.</li>
        </ul>

        <p className="font-semibold mt-3">Digital Waste Management System</p>
        <p className="mt-1">React frontend with API integration to enable donation of reusable items and pickup management.</p>

        <p className="font-semibold mt-3">College Website</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Contributed to a responsive college website and implemented UI components ensuring cross-device compatibility.</li>
        </ul>

        <p className="font-semibold mt-3">Eye Gesture Control System (Academic Project)</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Built an eye gesture control system using Python and OpenCV for gesture detection and control.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Leadership & Extracurricular</h3>
      <div className="text-gray-300 mt-2 leading-7">
        <p className="font-semibold">Buddha Institute of Technology</p>
        <p className="mt-1"><strong>I-TEND Society – AIML & Data Science Branch</strong> — Role: Secretary</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Served as Secretary coordinating AI/ML and Data Science workshops, sessions, and student activities.</li>
          <li>Managed communication, event planning, and team coordination.</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-300 mt-6">Achievements & Recognition</h3>
      <ul className="text-gray-300 list-disc pl-6 mt-2 leading-7">
        <li>Best Paper Award (2024)</li>
        <li>TECH YUVA-2024 (Runner Up)</li>
        <li>Tech-X 2025 (Winner)</li>
      </ul>

    </motion.section>
  )
}
