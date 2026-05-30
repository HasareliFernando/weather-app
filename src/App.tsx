import { useEffect, useState } from "react";
import { fetchWeather } from "./services/weatherApi";
import cities from "./data/cities.json";
import bgImage from "./assets/cumulus-clouds-blue-sky.jpg";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const ids = cities.map((c: any) => c.CityCode);
      const data = await fetchWeather(ids);
      setWeather(data);
    };

    load();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="mb-8 text-center text-3xl font-bold">Weather App</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {weather.map((city) => (
          <div
            key={city.id}
            className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">{city.name}</h3>

            <p className="mb-2 text-4xl font-bold text-blue-600">
              {Math.round(city.main.temp)}°C
            </p>

            <p className="text-gray-600">{city.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
