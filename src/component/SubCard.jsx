import React from "react";
import { MapPin } from "lucide-react";

const SubCard = ({ city, temp, feelsLike }) => {
  return (
    <div className="flex justify-between items-center w-full rounded-2xl p-4 border border-black/5 bg-black/15 backdrop-blur-[6px] text-white">
      <div>
        <div className="flex items-center gap-1 text-sm mb-1">
          <MapPin size={16} />
          <span>{city}</span>
        </div>
        <p className="text-2xl font-semibold">{temp}°</p>
        <p className="text-xs">Feels like {feelsLike}°</p>
      </div>

      <div className="text-4xl">[Icon]</div> {/* Replace [Icon] with your actual icon */}
    </div>
  );
};

export default SubCard;