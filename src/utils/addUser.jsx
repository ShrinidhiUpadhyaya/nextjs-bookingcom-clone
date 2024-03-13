export default async function addUser(data) {
  const url = "http://localhost:3000/api/user";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Failed to Fetch Data");

  return response.json();
}
