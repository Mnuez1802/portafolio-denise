import styles from './WhyMe.module.css'
import * as Icons from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useContent } from "../hooks/useContent";

function WhyMe() {
  const ref = useScrollAnimation()
  const { content } = useContent()

  return (
    <section id="whyme" className={styles.whyme}>
      <div className={styles.whymeHeader}>
        <span className="section-label">Mi propuesta de valor</span>
        <h2 className={styles.whymeTitle}>¿Por qué elegirme?</h2>
      </div>

      <div ref={ref} className={`${styles.whymeGrid} anim-fade-up anim-stagger`}>
        {content.whyme.map((reason, i) => {
          const IconComponent = Icons[reason.icon] || Icons.Star;
          return (
            <div key={reason.id} className={styles.whymeCard} data-num={String(i + 1).padStart(2, '0')}>
              <div className={styles.whymeIconWrap}>
                <IconComponent size={30} color="var(--color-text)" />
              </div>
              <h3 className={styles.whymeCardTitle}>{reason.title}</h3>
              <p className={styles.whymeCardDesc}>{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyMe;
