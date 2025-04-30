import React from "react";
import wind from "/assets/wind.svg"
import visibility from "/assets/visibility.svg"
import uvindex from "/assets/uvindex.svg"
import pressure from "/assets/pressure.svg"
import humidity from "/assets/humidity.svg"
import dewpoint from "/assets/dewpoint.svg"

const stats = [
  { label: "UV Index", value: "Low", icon: uvindex },
  { label: "Humidity", value: "75%", icon: humidity },
  { label: "Wind", value: "24km/hr", icon: wind },
  { label: "Dew Point", value: "24°", icon: dewpoint },
  { label: "Pressure", value: "1008.1mb", icon: pressure },
  { label: "Visibility", value: "3.54km", icon: visibility },
];

const Stats = () => {
  return (
    <div className="w-full rounded-[30px] bg-white/15 backdrop-blur-[3px] border-2 border-white/10 p-6 grid grid-cols-2 gap-6 font-poppins">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="rounded-[20px] bg-black/40 backdrop-blur-[6px] border-2 border-black/5 p-4 text-white"
        >
          <div className="flex items-center gap-1.5 text-sm font-medium mb-5">
          <img src={stat.icon} alt={stat.label} className="w-6 h-6" />
            {stat.label}
          </div>
          <div className="text-4xl font-semibold mb-5 pt-2 pl-5">{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;