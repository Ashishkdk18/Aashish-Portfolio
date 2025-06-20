"use client"

import { useEffect, useState } from "react"
import { getSkills } from "../services/api"
import "../styles/About.css"

const About = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSkills()
  }, [])

  const fetchSkills = async () => {
    try {
      const data = await getSkills()
      setSkills(data)
    } catch (error) {
      console.error("Error fetching skills:", error)
      // Fallback to static data
      setSkills(staticSkills)
    } finally {
      setLoading(false)
    }
  }

  const staticSkills = {
    technical: [
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 70 },
    ],
    soft: [
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Adaptability", level: 85 },
      { name: "Time Management", level: 80 },
      { name: "Creativity", level: 85 },
    ],
  }

  const education = [
    {
      degree: "BSc (Hons) Computing",
      institution: "Itahari International College | London Metropolitan University",
      period: "2023 - Present",
      location: "Sundarharaicha-4, Morang",
    },
    {
      degree: "SLC NEB Board",
      institution: "Vishwa Adarsha College",
      period: "2021 - 2022",
      location: "Itahari-4, Sunsari",
    },
    {
      degree: "SEE NEB Board",
      institution: "Vishwa Adarsha School",
      period: "2019 - 2020",
      location: "Itahari, Aaitabaray",
    },
  ]

  const certificates = [
    "AWS Academy Cloud Foundations",
    "AWS Academy Machine Learning Foundations",
    "AWS Academy Machine Learning for Natural Language Processing",
  ]

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know more about my journey, skills, and passion for web development</p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="intro-text">
              <h2>Hello! I'm Aashish Khadka</h2>
              <p>
                I'm a dedicated and enthusiastic individual with strong interests in frontend development and software
                engineering. My passion lies in building real-world projects and gaining practical experience through
                hands-on development.
              </p>
              <p>
                I thrive in challenging environments where I can grow both technically and personally. My goal is to
                create innovative web solutions that make a positive impact on users' lives while continuously learning
                and adapting to new technologies.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <h3>3+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>2+</h3>
                  <p>Years Learning</p>
                </div>
                <div className="stat">
                  <h3>8+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <img src="/assets/images/profile.png" alt="Aashish Khadka" />
            </div>
          </div>

          <div className="skills-section">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                  {(skills.technical || staticSkills.technical).map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h3>Soft Skills</h3>
                <div className="skills-list">
                  {(skills.soft || staticSkills.soft).map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-date">{edu.period}</div>
                  <div className="education-content">
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <p>{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="certificates-section">
            <h2>Certificates</h2>
            <div className="certificates-grid">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate-item">
                  <i className="fas fa-certificate"></i>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
