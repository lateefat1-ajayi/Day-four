import { useLocation, useNavigate } from "react-router";



const Ressult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const weather = location.state;

    if (!weather) {
        return (
            <div className="min-h-screen bg-red-100 flex items-center justify-center text-red-600 font-semibold">
                No data found. Go back and search.
            </div>
        );
    }

    const condition = weather.weather.condition.toLowerCase();
    let advice = "";

    if (condition.includes("rain")) {
        advice = "Don't forget your raincoat!☔";
    } else if (condition.includes("sun") || condition.includes("clear")) {
        advice = "It's sunny! Grab your face cap and shades";
    } else if (condition.includes("cloud")) {
        advice = "A bit cloudy take a stroll or serve siesta🏃!";
    } else {
        advice = "Stay comfy and check back later for updates!";
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-blue-200 text-center font-serif text-black p-4">
            <h1 className="text-3xl text-white font-bold m-5 border rounded-md p-1 bg-amber-400">
                Skycast🌦️
            </h1>
            <h1 className="text-2xl font-bold mb-4">
                🌤️ Weather in {weather.city}, {weather.country}
            </h1>

            <div className="bg-white/90 p-10 rounded-xl border shadow-md max-w-md hover:-translate-y-1 duration-500">

                <p>
                    <strong>Temperature 🌞:</strong> {weather.weather.temperature}°C
                </p>
                <p>
                    <strong>Feels Like 🙂:</strong> {weather.weather.feels_like}°C
                </p>
                <p>
                    <strong>Wind Speed 💨:</strong> {weather.weather.wind_speed} km/h
                </p>
                <p>
                    <strong>Condition ☁️:</strong> {weather.weather.condition}
                </p>
                <p>
                    <strong>Humidity 💧:</strong> {weather.weather.humidity}%
                </p>

                <div className="mt-4 p-3 bg-blue-100 text-blue-900 rounded-lg font-semibold">
                    {advice}
                </div>
            </div>

            <button
                onClick={() => navigate("/weather")}
                className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition "
            >
                Back to Search
            </button>
        </div>
    );
};

export default Ressult;
