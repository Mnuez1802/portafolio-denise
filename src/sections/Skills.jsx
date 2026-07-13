import styles from "./Skills.module.css";
import * as Icons from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useContent } from "../hooks/useContent";

function Skills() {
  const ref = useScrollAnimation()
  const { content } = useContent()

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.skillsHeader}>
        <span className="section-label">Lo que ofrezco</span>
        <h2 className={styles.skillsTitle}>Habilidades</h2>
      </div>

      <div ref={ref} className={`${styles.skillsContent} anim-fade-up`}>
        {content.skills.map((skill) => {
          const IconComponent = Icons[skill.icon] || Icons.Star;
          return (
            <div key={skill.category} className={styles.skillCard}>
              <div className={styles.skillCardHeader}>
                <div className={styles.skillIconWrap}>
                  <IconComponent size={28} color="var(--color-text)" />
                </div>
                <span className={styles.skillCardTitle}>{skill.category}</span>
              </div>
              <div className={styles.skillCardBody}>
                {skill.items.map((item) => (
                  <span key={item} className={styles.skillItem}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
