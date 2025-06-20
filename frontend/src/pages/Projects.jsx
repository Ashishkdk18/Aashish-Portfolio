"use client"

import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../services/api"
import "../styles/Projects.css"

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
    } catch (error) {
      console.error("Error fetching projects:", error)
      // Fallback to static data if API fails
      setProjects(staticProjects)
    } finally {
      setLoading(false)
    }
  }

  const staticProjects = [
    {
      id: 1,
      title: "NetruDoc - Healthcare Platform",
      description:
        "A comprehensive online doctor appointment system built with modern web technologies. Features include patient registration, doctor profiles, appointment booking, and admin dashboard.",
      image: "/assets/images/netrudoc-1.png",
      technologies: ["React.js", "Node.js", "MongoDB", "JSP/Servlet", "MySQL"],
      github_url: "https://github.com/Ashishkdk18",
      live_url: "#",
      category: "fullstack",
    },
    {
      id: 2,
      title: "FutsalPro - Booking System",
      description:
        "Elite booking system for futsal grounds with user authentication, slot management, and payment integration. Includes admin panel for ground management and booking analytics.",
      image: "/assets/images/futsal.png",
      technologies: ["React.js", "Node.js", "MySQL", "Express.js"],
      github_url: "https://github.com/Ashishkdk18",
      live_url: "#",
      category: "fullstack",
    },
    {
      id: 3,
      title: "E-commerce Printer Store",
      description:
        "Full-featured e-commerce website for printer technology with product catalog, shopping cart, user authentication, and order management system.",
      image: "/assets/images/netrudoc-2.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      github_url: "https://github.com/Ashishkdk18",
      live_url: "#",
      category: "frontend",
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects.length > 0
        ? projects
        : staticProjects
      : (projects.length > 0 ? projects : staticProjects).filter((project) => project.category === filter)

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ]

  if (loading) {
    return (
      <div className="projects-loading">
        <div className="loading-spinner"></div>
        <p>Loading projects...</p>
      </div>
    )
  }

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience in my development journey.
          </p>
        </div>

        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? "active" : ""}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <i className="fas fa-folder-open"></i>
            <h3>No projects found</h3>
            <p>No projects match the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects
