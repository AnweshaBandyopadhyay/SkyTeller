import React from "react";
import weather from "/assets/sunnycloudyrainy.svg"

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Daily = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4 px-4 md:px-6 mr-5">
      {days.map((day, index) => {
        const isActive = index === 1;
        return (
          <div
            key={index}
            className={`flex flex-col font-poppins items-center justify-center rounded-[30px] text-center py-6 backdrop-blur-[3px] border-2 transition-all ${
              isActive
                ? "bg-white text-[#406687]"
                : "bg-white/20 text-white border-white/10"
            }`}
          >
            <img className="w-10 h-auto pb-2" src={weather} alt="Weather" />
            <div className="text-sm font-medium">{day}</div>
            <div className="text-base font-bold">24°</div>
          </div>
        );
      })}
    </div>
  );
};

export default Daily;