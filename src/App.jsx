import Navbar from "./assets/Navbar"
import Hero from "./assets/Hero"
import About from "./assets/About"
import Skills from "./assets/Skills"
import Projects from "./assets/Projects"
import Contact from "./assets/Contact"
import Footer from "./assets/Footer"

function App() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      {/* Dark background with gradient overlay */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
