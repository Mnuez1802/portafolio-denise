import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <h1 className={styles.heroTitle}>Denise Martinez</h1>
      <h2 className={styles.heroSubtitle}>Lic. en Marketing Digital</h2>
      <p className={styles.heroText}>
        Tu crecimiento profesional es nuestra prioridad.
      </p>

      <div className={styles.heroButtons}>
        <a href="mailto:martinezdenisemkt@gmail.com" className={styles.heroBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          
        </a>
        <a
          href="https://wa.me/50496982121"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.heroBtnWhatsapp}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.81L2 22l5.44-1.43c1.38.75 2.95 1.18 4.6 1.18 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.99 13.19c-.21.59-1.23 1.12-1.69 1.19-.46.07-.89.1-2.87-.6-2.42-.87-3.97-3.32-4.09-3.47-.12-.16-.99-1.32-.99-2.51 0-1.2.62-1.79.85-2.03.21-.23.46-.29.61-.29.16 0 .31 0 .44.01.14.01.33-.05.52.39.19.45.65 1.59.71 1.71.06.11.1.25.02.4-.08.15-.12.24-.23.37-.11.13-.23.29-.33.39-.11.11-.23.23-.1.45.13.23.58.96 1.25 1.55.86.77 1.58 1.01 1.81 1.12.23.11.36.1.49-.06.13-.15.56-.66.71-.88.15-.23.3-.19.51-.11.21.08 1.31.62 1.54.73.23.11.38.17.43.26.06.1.06.55-.15 1.14z"/>
          </svg>
          
        </a>
      </div>
    </section>
  );
}

export default Hero;