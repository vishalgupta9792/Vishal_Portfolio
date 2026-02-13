export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-blue-400 mb-8 text-center">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-800" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-800" />
        <textarea placeholder="Your Message" className="p-3 rounded bg-gray-800" />
        <button className="bg-blue-500 py-3 rounded-lg hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </section>
  )
}
