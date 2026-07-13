import ProjectCard from '../components/ProjectCard'
import styles from '../sections/Projects.module.css'
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useContent } from "../hooks/useContent";

function Projects() {
  const ref = useScrollAnimation()
  const { content } = useContent()

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHeader}>
        <span className="section-label">Mi trabajo</span>
        <h2 className={styles.projectsTitle}>Proyectos</h2>
      </div>
      <div ref={ref} className={`${styles.projectsGrid} anim-fade-up anim-stagger`}>
        {content.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
