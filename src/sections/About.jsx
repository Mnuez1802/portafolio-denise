import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.aboutTitle}>Sobre mí</h2>
      <div className={styles.aboutContent}>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae, reprehenderit odit, repudiandae vitae quidem est
            assumenda eos aliquam repellendus aperiam! Doloribus officiis
            temporibus suscipit sapiente consequatur earum magni atque!
          </p>
          <br />
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae, reprehenderit odit, repudiandae vitae quidem est
            assumenda eos aliquam repellendus aperiam! Doloribus officiis
            temporibus suscipit sapiente consequatur earum magni atque!
          </p>
        </div>
        {/* <div>
          <img src="public\assets\Foto_About.webp" alt="Imagen de Denise" className={styles.aboutImage}/>
        </div> */}

        {/* Seccion del video About Me */}
        <div className={styles.aboutVideo}>
          <iframe
            src="https://www.instagram.com/reel/DS3bm9MEYxY/embed"
            width='100%'
            height='100%'
            frameBorder='0'
            scrolling="no"
            allowtransparency="true"
            allowFullScreen
          />
        </div>

      </div>
      <a href="" download className={styles.aboutLink}>
        Descargar CV
      </a>
    </section>
  );
}

export default About;
