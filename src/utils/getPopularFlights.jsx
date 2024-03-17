export default async function getPopularFlights() {
  const res = await fetch("/api/flights");

  if (!res.ok) throw new Error("Failed to Fetch Data");

  return res.json();
}
