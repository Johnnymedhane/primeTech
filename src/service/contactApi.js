import { BASE_URL } from "../constant";


export async function sendContactForm(clienttData) {
  const response = await fetch(`${BASE_URL}/contactMessages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( clienttData),
  });
  if (!response.ok) {
    throw new Error("Failed to send contact message.");
  }
  const data = await response.json();
  return data;
} 