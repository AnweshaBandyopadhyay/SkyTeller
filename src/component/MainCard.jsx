import React from "react";
import { MapPin } from "lucide-react";

const MainCard = ({ city, temp, feelsLike, date, weatherText }) => {
  return (
    <div className="relative w-full rounded-2xl p-6 border border-black/5 bg-black/15 backdrop-blur-[6px] text-white">
      <div className="absolute top-4 right-4 flex items-center gap-1 text-sm">
        <MapPin size={16} />
        <span>{city}</span>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <div className="text-6xl mb-2">[Icon]</div> {/* Replace [Icon] with your actual icon */}
        <p className="text-sm mb-1">{date}</p>
        <p className="text-4xl font-semibold mb-1">{temp}°</p>
        <p className="text-xs mb-1">Feels like {feelsLike}°</p>
        <p className="text-base font-medium">{weatherText}</p>
      </div>
    </div>
  );
};

export default MainCard;