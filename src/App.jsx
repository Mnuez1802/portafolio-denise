import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import WhyMe from "./sections/WhyMe"
import Contact from "./sections/Contact"
import About from "./sections/About"
import Footer from "./components/Footer"
import MediaKit from "./pages/MediaKit"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div style={{ width: '100%', overflowX: 'hidden' }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <WhyMe />
          <Contact />
          <Footer />
        </div>
      } />
      <Route path="/mediakit" element={<MediaKit />} />
    </Routes>
  )
}

export default App