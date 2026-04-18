import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectVideo}>
        <a href={project.instagramURL} target='_blank' rel='noopener noreferrer'>
          <iframe
            src={`${project.instagramURL}embed`}
            width='100%'
            height='100%'
            frameBorder='0'
            scrolling="no"
            allowtransparency="true"
          ></iframe>
        </a>
      </div>
      {/* <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectCategory}>{project.category}</p>
      <p className={styles.projectDescription}>{project.description}</p>
      <p className={styles.projectResult}>{project.result}</p>
      <div className={styles.projectTools}>
        {project.tools.map((tool) => (
          <span key={tool} className={styles.toolTag}>
            {tool}
          </span>
        ))}
      </div> */}
    </div>
  );
}

export default ProjectCard;
