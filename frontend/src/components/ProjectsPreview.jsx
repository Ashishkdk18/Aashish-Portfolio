import { Link } from "react-router-dom"
import "../styles/ProjectsPreview.css"

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      title: "NetruDoc",
      description: "Healthcare appointment system with doctor-patient management",
      image: "/assets/images/netrudoc-1.png",
      technologies: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Ashishkdk18",
    },
    {
      title: "FutsalPro",
      description: "Elite booking system for futsal grounds with admin panel",
      image: "/assets/images/futsal.png",
      technologies: ["React.js", "Node.js", "MySQL"],
      github: "https://github.com/Ashishkdk18",
    },
  ]

  return (
    <section className="projects-preview">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>Some of my recent work that I'm proud of</p>
        </div>

        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-preview-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview
