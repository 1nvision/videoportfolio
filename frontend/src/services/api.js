import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Portfolio Data
export const getPortfolioData = async () => {
  try {
    const response = await api.get("/portfolio-data");
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
    throw error;
  }
};

// Projects
export const getProjects = async (category = null) => {
  try {
    const params = category ? { category } : {};
    const response = await api.get("/projects", { params });
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

export const getProject = async (projectId) => {
  try {
    const response = await api.get(`/projects/${projectId}`);
    return response.data.project;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

// Contact
export const submitContact = async (formData) => {
  try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export default api;
