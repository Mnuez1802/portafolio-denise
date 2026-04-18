import whyme from "../data/whyme";
import styles from "./Whyme.module.css";
import * as Icons from "lucide-react";

function WhyMe() {
  return (
    <section id="whyme" className={styles.whyme}>
      <h2 className={styles.whymeTitle}>¿Por qué elegirme?</h2>
      <div className={styles.whymeGrid}>
        {whyme.map((reason) => {
          const IconComponent = Icons[reason.icon];
          return (
            <div key={reason.id} className={styles.whymeCard}>
              <IconComponent size={40} color="var(--color-secondary)" />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyMe;
