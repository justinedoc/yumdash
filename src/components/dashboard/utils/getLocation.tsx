export async function getLocationFromCoordinates(
  lat: number,
  lng: number
): Promise<string | undefined> {
  const apiKey = import.meta.env.VITE_REVERSE_GEOLOCATION_API_KEY;

  if (!apiKey) {
    throw new Error(
      "Missing VITE_REVERSE_GEOLOCATION_API_KEY in environment variables."
    );
  }

  const query = encodeURIComponent(`${lat},${lng}`);
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.results?.length > 0) {
      return data.results[0].formatted;
    } else {
      console.warn("No results found for the provided coordinates.");
      return undefined;
    }
  } catch (error) {
    console.error("Error fetching location:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unknown error occurred while fetching location data.");
  }
}
