import React from "react";

const stats = [
  { label: "UV Index", value: "Low", icon: "[icon]" },
  { label: "Humidity", value: "75%", icon: "[icon]" },
  { label: "Wind", value: "24km/hr", icon: "[icon]" },
  { label: "Dew Point", value: "24°", icon: "[icon]" },
  { label: "Pressure", value: "1008.1mb", icon: "[icon]" },
  { label: "Visibility", value: "3.54km", icon: "[icon]" },
];

const Stats = () => {
  return (
    <div className="w-full rounded-[30px] bg-[#E2E2E2]/10 backdrop-blur-[6px] border border-[#E2E2E2]/10 border-[1pt] p-6 grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-[20px] bg-black/15 backdrop-blur-[6px] border border-black/5 p-4 text-white"
        >
          <div className="flex items-center gap-2 text-xs font-medium mb-8">
            <span className="text-lg">{stat.icon}</span>
            {stat.label}
          </div>
          <div className="text-3xl font-semibold mb-4">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;