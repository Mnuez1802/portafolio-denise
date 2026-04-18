import styles from "./Hero.module.css";

function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <h1 className={styles.heroTitle}>Denise Martinez</h1>
            <h2 className={styles.heroSubtitle}>Lic. en Marketing Digital</h2>
            <p className={styles.heroText}>Tu crecimiento profesional es nuestra prioridad.</p>
        </section>
    );
}

export default Hero;