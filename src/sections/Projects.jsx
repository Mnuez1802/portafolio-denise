import projects from "../data/projects";
import ProjectCard from '../components/ProjectCard'
import styles from '../sections/Projects.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projectsTitle}>Proyectos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
