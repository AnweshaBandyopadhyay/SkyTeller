import React from "react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Daily = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 px-4 md:px-6 mr-5">
      {days.map((day, index) => {
        const isActive = index === 1;
        return (
          <div
            key={index}
            className={`flex flex-col items-center justify-center rounded-[30px] text-center py-6 backdrop-blur-[20px] border border-[2pt] transition-all ${
              isActive
                ? "bg-white text-[#406687]"
                : "bg-[rgba(183,183,183,0.25)] text-white border-[#B7B7B7]/30"
            }`}
          >
            <div className="text-xl mb-2">[icon]</div>
            <div className="text-sm font-medium">{day}</div>
            <div className="text-sm font-bold">24°</div>
          </div>
        );
      })}
    </div>
  );
};

export default Daily;
