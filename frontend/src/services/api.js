import axios from "axios"

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getProjects = async () => {
  try {
    const response = await api.get("/projects/")
    return response.data
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}

export const getSkills = async () => {
  try {
    const response = await api.get("/skills/")
    return response.data
  } catch (error) {
    console.error("Error fetching skills:", error)
    throw error
  }
}

export const sendMessage = async (messageData) => {
  try {
    const response = await api.post("/contact/", messageData)
    return response.data
  } catch (error) {
    console.error("Error sending message:", error)
    throw error
  }
}

export default api
