import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectVideo}>
        <iframe
          src={`${project.instagramURL}embed`}
          width='100%'
          height='100%'
          frameBorder='0'
          scrolling="no"
          allowTransparency="true"
          title={project.title}
        />
        <a
          href={project.instagramURL}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.projectLink}
        >
          Ver en Instagram ↗
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
