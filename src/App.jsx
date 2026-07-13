import { Routes, Route } from 'react-router-dom'
import { ContentProvider } from './context/ContentContext'
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import WhyMe from "./sections/WhyMe"
import Contact from "./sections/Contact"
import About from "./sections/About"
import Footer from "./components/Footer"
import MediaKit from "./pages/MediaKit"
import Admin from "./pages/Admin"

function App() {
  return (
    <ContentProvider>
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
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </ContentProvider>
  )
}

export default App
