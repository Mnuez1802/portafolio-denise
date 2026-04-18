import { useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a href="#hero" className={styles.logo}>Denise Martinez</a>

      <button 
        className={styles.hamburger}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`${styles.navLinks} ${menuAbierto ? styles.navOpen : ''}`}>
        <li><a href="#hero" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
        <li><a href="#about" onClick={() => setMenuAbierto(false)}>Sobre mí</a></li>
        <li><a href="#skills" onClick={() => setMenuAbierto(false)}>Habilidades</a></li>
        <li><a href="#projects" onClick={() => setMenuAbierto(false)}>Proyectos</a></li>
        <li><a href="#whyme" onClick={() => setMenuAbierto(false)}>¿Por qué elegirme?</a></li>
        <li><a href="#contact" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar