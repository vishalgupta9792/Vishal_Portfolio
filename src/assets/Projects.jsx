export default function Projects() {
  const projects = [
    {
      title: "MERN E-commerce App",
      desc: "Full stack e-commerce platform with payment integration and admin dashboard.",
    },
    {
      title: "Cloud Deployed Blog",
      desc: "Blog app deployed on AWS EC2 with MongoDB Atlas.",
    },
    {
      title: "REST API Auth System",
      desc: "JWT based authentication system using Node & Express.",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-400">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
