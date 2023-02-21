import Navbar, { NavLink } from "./Components/Navbar"
import Presenting from "./Components/Presenting"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import { animateScroll as scroll } from "react-scroll"

import { FaArrowUp } from "react-icons/fa"

function App() {

  return (
    <div id='top' className="bg-gradient-to-br from-slate-900 to-slate-800 text-neutral-200">
      <Navbar title="@CernunnosYQ">
        <NavLink title="Blog" href="#" />
        <NavLink title="Habilidades" href="skills" />
        <NavLink title="Proyectos" href="projects" />
        <NavLink title="Contacto" href="contact" />
      </Navbar>
      <main>
        <Presenting />
        <Skills id="skills" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <GoTop />
      <Footer />
    </div>
  )
}

function GoTop(): JSX.Element {
  return (
    <button className="fixed z-10 rounded-full p-3 bg-sky-800 bottom-10 \
      right-10 text-xl transition hover:scale-110" 
      onClick={() => scroll.scrollToTop({duration: 500})}>
      <FaArrowUp />
    </button>
  )
}

export default App
