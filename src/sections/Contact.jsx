import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Contact() {
  const ref = useScrollAnimation()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_rmx1zfk", "template_5mkunqq", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString(),
      }, "rPnhI3DRh6XBBDm8f")
      .then(() => {
        setEnviado(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setError(true));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactHeader}>
        <span className="section-label">Hablemos</span>
        <h2 className={styles.contactTitle}>Contacto</h2>
        <p className={styles.contactSubtitle}>¿Tienes un proyecto en mente? Estoy lista para escucharte.</p>
      </div>

      <form ref={ref} className={`${styles.contactForm} anim-fade-up`} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.contactLabel}>Nombre</label>
        <input
          type="text" id="name" name="name"
          value={formData.name} onChange={handleChange}
          className={styles.contactInput} placeholder="Tu nombre"
        />
        <label htmlFor="email" className={styles.contactLabel}>Correo electrónico</label>
        <input
          type="email" id="email" name="email"
          value={formData.email} onChange={handleChange}
          className={styles.contactInput} placeholder="tu@email.com"
        />
        <label htmlFor="message" className={styles.contactLabel}>Mensaje</label>
        <textarea
          id="message" name="message"
          value={formData.message} onChange={handleChange}
          className={styles.contactInput} placeholder="¿En qué puedo ayudarte?" rows="5"
          style={{ resize: "vertical" }}
        />
        <button type="submit" className={styles.contactButton}>Enviar mensaje</button>
        {enviado && <p style={{ color: "#25a560", marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>¡Mensaje enviado con éxito!</p>}
        {error && <p style={{ color: "#e55", marginTop: "0.5rem", textAlign: "center" }}>Hubo un error. Intenta de nuevo.</p>}
      </form>
    </section>
  );
}

export default Contact;
