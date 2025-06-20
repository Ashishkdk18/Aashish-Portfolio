"use client"
import "../styles/ProjectCard.css"

const ProjectCard = ({ project, index }) => {
  const handleGithubClick = () => {
    window.open(project.github_url, "_blank")
  }

  const handleLiveClick = () => {
    if (project.live_url && project.live_url !== "#") {
      window.open(project.live_url, "_blank")
    }
  }

  return (
    <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="project-image">
        <img src={project.image || "/placeholder.svg"} alt={project.title} />
        <div className="project-overlay">
          <div className="project-actions">
            <button className="action-btn github-btn" onClick={handleGithubClick} title="View on GitHub">
              <i className="fab fa-github"></i>
            </button>
            {project.live_url && project.live_url !== "#" && (
              <button className="action-btn live-btn" onClick={handleLiveClick} title="View Live Demo">
                <i className="fas fa-external-link-alt"></i>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          <button className="project-link github-link" onClick={handleGithubClick}>
            <i className="fab fa-github"></i>
            GitHub
          </button>
          {project.live_url && project.live_url !== "#" && (
            <button className="project-link live-link" onClick={handleLiveClick}>
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
