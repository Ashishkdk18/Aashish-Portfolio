"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import SkillsPreview from "../components/SkillsPreview"
import ProjectsPreview from "../components/ProjectsPreview"
import "../styles/Home.css"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`home ${isVisible ? "fade-in" : ""}`}>
      <Hero />
      <SkillsPreview />
      <ProjectsPreview />

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work Together?</h2>
            <p>Let's create something amazing together. I'm always open to discussing new opportunities.</p>
            <Link to="/contact" className="cta-button">
              Get In Touch
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
