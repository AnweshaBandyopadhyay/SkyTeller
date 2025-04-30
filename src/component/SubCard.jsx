import React from "react";
import { MapPin } from "lucide-react";
import { useActiveLocation } from "../context/ActiveLocationContext";

// New function: Map Open-Meteo weather codes to your custom icons
const getCustomIcon = (weatherCode) => {
  const weatherCodeMap = {
    0: "sunny.svg",
    1: "partly-cloudy.svg",
    2: "partly-cloudy.svg",
    3: "overcast.svg",
    45: "mist.svg",
    48: "mist.svg",
    51: "showers.svg",
    53: "showers.svg",
    55: "showers.svg",
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

  return `/assets/${weatherCodeMap[weatherCode] || "unknown.svg"}`;
};

const SubCard = ({ city, temp, feelsLike, iconCode }) => {
  const { activeLocation, setActiveLocation } = useActiveLocation();

  const isActive = activeLocation?.city === city && !activeLocation?.isDefault;

  const handleClick = () => {
    setActiveLocation({ city, temp, feelsLike, iconCode, isDefault: false });
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex justify-between items-center w-full rounded-2xl p-4 ${
        isActive
          ? "bg-white border-[2px] border-solid border-white/30 backdrop-blur-lg text-[#1E78C7] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          : "bg-white/10 border-[1px] border-solid border-white/20 backdrop-blur-lg text-white transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      }`}
    >
      <div>
        <div className="flex items-center gap-1 text-sm mb-4">
          <MapPin size={16} />
          <span>{city}</span>
        </div>
        <p className="text-4xl font-bold mb-1 ml-2">{temp}°</p>
        <p className="text-sm ml-2 italic">Feels like {feelsLike}°</p>
      </div>
      <img
        className="w-20 h-auto"
        src={getCustomIcon(iconCode)}
        alt="Weather"
      />
    </div>
  );
};

export default SubCard;
