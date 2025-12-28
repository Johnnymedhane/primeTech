import { BASE_URL } from "../constant";


export async function fetchProjects() {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) 
    throw new Error("Failed to fetch projects");
  
  const data = await response.json();
  return data.projects;
}

export async function fetchProjectById(projectId) {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) 
    throw new Error("Failed to fetch project");
  
  const data = await response.json();
  return data.projects.find(project => project.id === projectId);
}



export async function addNewProject(project) {
  const response = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) 
    throw new Error("Failed to add new project");
  const data = await response.json();
  return data;
}

export async function updateProject(projectId, project) {
  const response = await fetch(`${BASE_URL}/projects/${projectId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });
  if (!response.ok) 
    throw new Error("Failed to update project");
  const data = await response.json();
  return data;
}

export async function deleteProject(projectId) {
  const response = await fetch(`${BASE_URL}/projects/${projectId}`, {
    method: "DELETE",
  });
  if (!response.ok) 
    throw new Error("Failed to delete project");
}