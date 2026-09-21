import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <CustomCursor/>
      <Loader/>

      {/* ANIMATED BACKGROUND */}

      <Background />


      {/* NAVBAR */}

      <Navbar />


      {/* WEBSITE SECTIONS */}

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
      <BackToTop/>

    </div>
  );
}

export default App;