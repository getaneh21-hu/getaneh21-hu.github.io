
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Freelance from "./sections/Freelance";


import "./styles/global.css";
import "./styles/Navbar.css";
import "./styles/Home.css";
import "./styles/About.css";
import "./styles/Skills.css";
import "./styles/Projects.css";
import "./styles/Education.css";
import "./styles/Contact.css";
import "./styles/Footer.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
