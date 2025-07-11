import { useState } from "react";
import { useNavigate } from "react-router";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const Weather = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!city.trim()) return alert("Please enter a city name");

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
      const data = await res.json();

      if (data.error) {
        alert(data.error.message);
        setLoading(false);
        return;
      }

      navigate("/result", {
        state: {
          city: data.location.name,
          country: data.location.country,
          weather: {
            temperature: data.current.temp_c,
            feels_like: data.current.feelslike_c,
            condition: data.current.condition.text,
            wind_speed: data.current.wind_kph,
            humidity: data.current.humidity,
            icon: data.current.condition.icon,
          },
        },
      });
    } catch (err) {
      alert("Error fetching weather data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex justify-center bg-blue-500 text-center font-serif text-white'>
      <div className="m-10">
        <h1 className="text-3xl text-white font-bold m-5 border rounded-md p-1 bg-amber-400">
          Skycast🌦️
        </h1>
        <input
          type="text"
          placeholder='Enter city name here...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='border border-white p-2 rounded-md outline-none text-black'
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="bg-amber-500 w-fit p-2 rounded-md hover:bg-amber-400 text-white transition-colors duration-75 m-2 hover:-translate-y-0.5"
        >
          {loading ? "Searching...👀" : "Search🔍"}
        </button>
      </div>
    </div>
  );
};

export default Weather;
