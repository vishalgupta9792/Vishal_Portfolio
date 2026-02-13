import Navbar from "./assets/Navbar";
import Hero from "./assets/Hero";
import About from "./assets/About";
import Skills from "./assets/Skills";
import Resume from "./assets/Resume";
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
        <Resume />
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
