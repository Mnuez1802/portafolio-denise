import styles from './Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.contactTitle}>Contacto</h2>
      <div>
        <h3>Contactame</h3>
        <div className={styles.contactForm}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" className={styles.contactInput}/>
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" className={styles.contactInput}/>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" className={styles.contactInput}></textarea>
            <button type="submit" className={styles.contactButton}>Enviar</button>
        </div>
      </div>
    </section>
  )
}

export default Contact