import React from "react";
import weather from "/assets/sunnycloudy.svg"

const hours = [
  "12:00", "Now", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
];

const Hourly = ({ activeIndex = 1 }) => {
  return (
    <div className="px-4 mt-6">
    <div className="w-full rounded-[30px] bg-white/20 backdrop-blur-[3px] border-2 border-white/10 p-4 py-4">
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-2">

        {hours.map((time, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`flex flex-col font-poppins items-center justify-center px-1 py-4 rounded-[30px] text-center transition-all w-full ${
                isActive ? "bg-white text-[#406687]" : "text-white"
              }`}
            >
              <div className="text-xs font-medium pb-2">{time}</div>
              <div className="text-xl font-bold">24°</div>
              <img className="w-8 h-auto pt-2" src={weather} alt="Weather" />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Hourly;