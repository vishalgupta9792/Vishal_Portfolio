export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Node.js", "Express", "MongoDB",
    "MySQL", "AWS (EC2, S3)", "Azure",
    "REST API", "JWT Auth"
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
