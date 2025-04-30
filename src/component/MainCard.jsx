import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { useActiveLocation } from "../context/ActiveLocationContext";

const MainCard = () => {
  const [locationName, setLocationName] = useState("");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [weatherText, setWeatherText] = useState("");
  const [iconCode, setIconCode] = useState("");
  const [loading, setLoading] = useState(true);

  const { activeLocation, setActiveLocation } = useActiveLocation();

  useEffect(() => {
    // Fetch current location's weather and details
    const fetchWeatherAndLocation = async (lat, lon) => {
      try {
        // Fetch weather data from Open-Meteo
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code&timezone=auto`
        );
        const weatherData = await weatherRes.json();

        const currentTemp = Math.round(weatherData.current.temperature_2m);
        const currentFeelsLike = Math.round(weatherData.current.apparent_temperature || currentTemp);
        const currentIconCode = weatherData.current.weather_code; // Open-Meteo weather code
        const currentWeatherText = mapWeatherCodeToText(currentIconCode);

        setTemp(currentTemp);
        setFeelsLike(currentFeelsLike);
        setWeatherText(currentWeatherText);
        setIconCode(currentIconCode);

        // Fetch location name using OpenStreetMap Reverse Geocoding API
        const locationRes = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
          { headers: { "Accept-Language": "en" } }
        );
        const locationData = await locationRes.json();
        const address = locationData.address;
        const location = address.city || address.town || address.village || address.hamlet || address.county || address.state || "Unknown Location";

        setLocationName(location);

        // Set active location
        setActiveLocation({
          city: location,
          temp: currentTemp,
          feelsLike: currentFeelsLike,
          iconCode: currentIconCode,
          isDefault: true,
        });

        // Set the current date
        const now = new Date();
        const options = { weekday: "long", day: "numeric", month: "long" };
        setDate(now.toLocaleDateString("en-US", options));

        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather or location:", err);
        setLoading(false);
      }
    };

    // Get current location using geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherAndLocation(latitude, longitude); // Fetch weather and location data
      },
      (error) => {
        console.error("Geolocation error:", error);
        setLoading(false);
      }
    );
  }, []);

  const mapWeatherCodeToText = (code) => {
    // Map Open-Meteo weather codes to text descriptions
    const weatherMap = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Light drizzle",
      53: "Moderate drizzle",
      55: "Heavy drizzle",
      56: "Light freezing drizzle",
      57: "Heavy freezing drizzle",
      61: "Light rain",
      63: "Moderate rain",
      65: "Heavy rain",
      66: "Light freezing rain",
      67: "Heavy freezing rain",
      71: "Light snow",
      73: "Moderate snow",
      75: "Heavy snow",
      77: "Snow grains",
      80: "Light rain showers",
      81: "Moderate rain showers",
      82: "Heavy rain showers",
      85: "Light snow showers",
      86: "Heavy snow showers",
      95: "Thunderstorms",
      96: "Thunderstorms with light hail",
      99: "Thunderstorms with heavy hail",
    };
    return weatherMap[code] || "Unknown weather";
  };

  const getCustomIcon = (code) => {
    const iconMap = {
      0: "sunny.svg",
      1: "partly-cloudy.svg",
      2: "partly-cloudy.svg",
      3: "overcast.svg",
      45: "mist.svg",
      48: "mist.svg",
      51: "rain.svg",
      53: "rain.svg",
      55: "rain.svg",
      56: "rain.svg",
      57: "rain.svg",
      61: "rain.svg",
      63: "rain.svg",
      65: "rain.svg",
      66: "rain.svg",
      67: "rain.svg",
      71: "snow.svg",
      73: "snow.svg",
      75: "snow.svg",
      77: "snow.svg",
      80: "showers.svg",
      81: "showers.svg",
      82: "showers.svg",
      85: "snow.svg",
      86: "snow.svg",
      95: "thunderstorm.svg",
      96: "thunderstorm.svg",
      99: "thunderstorm.svg",
    };
    return `/assets/${iconMap[code] || "unknown.svg"}`;
  };

  const isActive = activeLocation?.city === locationName;

  const cardClasses = isActive
    ? "relative w-full rounded-2xl p-8 bg-white border-[2px] border-solid border-white/30 backdrop-blur-lg text-[#1E78C7] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    : "relative w-full rounded-2xl p-8 bg-white/10 border-[1px] border-solid border-white/20 backdrop-blur-lg text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg";

  const handleClick = () => {
    if (locationName && temp != null) {
      setActiveLocation({
        city: locationName,
        temp,
        feelsLike,
        iconCode,
        isDefault: true,
      });
    }
  };

  if (loading) {
    return (
      <div className="relative w-full rounded-2xl p-8 bg-white/20 border-[1px] border-solid border-white/20 backdrop-blur-lg text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className={cardClasses + " cursor-pointer"} onClick={handleClick}>
      <div className="absolute top-4 left-4 flex items-center gap-1 text-sm">
        <MapPin size={16} />
        {/* Display dynamically fetched location name */}
        <span>{locationName || "Your Location"}</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-5">
        <img
          className="w-28 h-auto mb-3"
          src={getCustomIcon(iconCode)}
          alt="Weather Icon"
        />
        <p className="text-sm mb-8">{date}</p>
        <p className="text-6xl font-bold mb-1">{temp}°</p>
        <p className="text-sm mb-6 italic">Feels like {feelsLike}°</p>
        <p className="text-xl font-semibold capitalize">{weatherText}</p>
      </div>
    </div>
  );
};

export default MainCard;
