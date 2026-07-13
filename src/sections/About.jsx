import styles from "./About.module.css";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useContent } from "../hooks/useContent";

function About() {
  const ref = useScrollAnimation()
  const { content } = useContent()
  const { bio1, bio2, reelUrl } = content.about

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutHeader}>
          <span className="section-label">Conóceme</span>
          <h2 className={styles.aboutTitle}>Sobre mí</h2>
        </div>

        <div ref={ref} className={`${styles.aboutContent} anim-fade-up`}>
          <div className={styles.aboutBio}>
            <p>{bio1}</p>
            <p>{bio2}</p>
          </div>

          <div className={styles.aboutVideo}>
            <iframe
              src={reelUrl}
              width='100%'
              height='100%'
              frameBorder='0'
              scrolling="no"
              allowTransparency="true"
              allowFullScreen
              title="Video de presentación"
            />
          </div>
        </div>
      </div>

      {/* CV button oculto - base para otro portafolio */}
      {/* <a href="" download className={styles.aboutLink}>Descargar CV</a> */}
    </section>
  );
}

export default About;
