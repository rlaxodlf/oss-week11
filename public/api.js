export async function getForecast(city) {
  const params = new URLSearchParams({ city });
  const res = await fetch(`/api/forecast?${params}`);
  const body = await res.json();
  if (!res.ok) throw new Error(body.error);
  return body;
}
