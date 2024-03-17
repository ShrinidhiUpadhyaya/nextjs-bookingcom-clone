export default async function getAllProperties() {
  const res = await fetch("/api/properties");

  if (!res.ok) throw new Error("Failed to Fetch Data");

  return res.json();
}
