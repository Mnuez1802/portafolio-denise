import skills from "../data/skills";
import styles from "./Skills.module.css";
import * as Icons from "lucide-react";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.skillsTitle}>Habilidades</h2>
      <div className={styles.skillsContent}>
        {skills.map((skill) => {
          const IconComponent = Icons[skill.icon]; // ← debe ir aquí dentro
          return (
            <div key={skill.category} className={styles.skillCard}>
              <IconComponent size={32} color="var(--color-secondary)" />
              <h3>{skill.category}</h3>
              {skill.items.map((item) => (
                <span key={item} className={styles.skillItem}>
                  {item}
                </span>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
