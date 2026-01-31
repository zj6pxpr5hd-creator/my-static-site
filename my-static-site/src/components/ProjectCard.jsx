function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies used:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noreferrer">Learn More</a>
    </div>
  );
}

export default ProjectCard;