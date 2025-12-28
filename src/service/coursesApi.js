import { BASE_URL } from "../constant";

export async function fetchCourses() {
  const res = await fetch(`${BASE_URL}/courses`);

  if (!res.ok) throw new Error("Failed to fetch courses");

  const data = await res.json();

  return data;
}

export async function fetchCourseById(courseId) {
  const res = await fetch(`${BASE_URL}/courses/${courseId}`);

  if (!res.ok) throw new Error("Failed to fetch course");

  const data = await res.json();

  return data;
}

export async function addNewCourse(course) {
  const res = await fetch(`${BASE_URL}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });

  if (!res.ok) throw new Error("Failed to add new course");

  const data = await res.json();

  return data;
}


export async function updateCourse(courseId, course) {
  const res = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(course),
  });

  if (!res.ok) throw new Error("Failed to update course");

  const data = await res.json();

  return data;
}

export async function deleteCourse(courseId) {
  const res = await fetch(`${BASE_URL}/courses/${courseId}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete course");
}