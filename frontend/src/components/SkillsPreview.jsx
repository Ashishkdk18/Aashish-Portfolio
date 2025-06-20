import { Link } from "react-router-dom"
import "../styles/SkillsPreview.css"

const SkillsPreview = () => {
  const skills = [
    { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
    { name: "Django", icon: "fas fa-server", color: "#092E20" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
    { name: "Python", icon: "fab fa-python", color: "#3776AB" },
    { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
    { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
    { name: "Java", icon: "fab fa-java", color: "#ED8B00" },
  ]

  return (
    <section className="skills-preview">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with to bring ideas to life</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon" style={{ color: skill.color }}>
                <i className={skill.icon}></i>
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="skills-cta">
          <Link to="/about" className="btn btn-outline">
            View All Skills
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SkillsPreview
