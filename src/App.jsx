import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import About from "./assets/About";
import Skills from "./assets/Skills";
import Projects from "./assets/Projects";
import Contact from "./assets/Contact";
import Footer from "./assets/Footer";

function App() {
  return (
    <div className="bg-gray-950 text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
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
  );
}

export default App;
