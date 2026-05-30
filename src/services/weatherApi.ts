const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (cityIds: number[]) => {
  try {
    const weatherData = await Promise.all(
      cityIds.map(async (id) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch weather for city ${id}`);
        }

        return response.json();
      })
    );

    return weatherData;
  } catch (error) {
    console.error("Weather fetch failed:", error);
    return [];
  }
};