function LatestProject({ title, description, tech, link, github, screenshot }){

    return(
    <div className="latest-project-card">
      <h3>Latest!</h3>
      <img className = "project-image" src={screenshot} alt="Latest Project" />
      <h4>{title}</h4>
      <p>{description}</p>
      <p className="tech"><strong>Technologies used:</strong> {tech}</p>
      <a href={link} target="_blank" rel="noreferrer">Learn More</a>
      {github!=="" && <a href={github} target="_blank" rel="noreferrer">See Repo</a>}
    </div>
    );

}

export default LatestProject;