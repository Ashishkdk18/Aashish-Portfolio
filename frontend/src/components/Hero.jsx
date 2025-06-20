"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Hero.css"

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = ["Full Stack Developer", "React.js Developer", "Django Developer", "Problem Solver"]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(current.substring(0, currentText.length - 1))
        } else {
          setCurrentText(current.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === current) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="name-highlight">Aashish Khadka</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              Passionate about creating innovative web solutions with modern technologies. I specialize in React.js and
              Django development, bringing ideas to life through clean, efficient code and exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Let's Talk
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
            <div className="hero-social">
              <a
                href="https://github.com/Ashishkdk18"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:ashishkhadka014@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="tel:+9779702505709" className="social-link">
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/assets/images/profile.png" alt="Aashish Khadka" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
