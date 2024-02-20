export default async function getAllProperties() {
  const res = await fetch("http://localhost:3000/api/flights");

  if (!res.ok) throw new Error("Failed to Fetch Data");

  console.log(res);
  return res.json();
}
