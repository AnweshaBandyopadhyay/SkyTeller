import React from "react";
import MainCard from "../component/MainCard";
import SubCard from "../component/SubCard";

const LeftSec = () => {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const today = date.toLocaleDateString(undefined, options);

  return (
<div className="w-full md:max-w-[400px] p-4 md:p-6 md:m-6 m-0 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg text-white shadow-lg">
{/* Time and Date */}
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold">{time}</h1>
        <p className="text-xs sm:text-sm mt-2">{today}</p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search cities..."
        className="w-full px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm placeholder-white text-white mb-6 focus:outline-none focus:ring-2 focus:ring-white/30 transition"
      />

      {/* Main Weather Card */}
      <MainCard
        city="Kolkata"
        temp={29}
        feelsLike={31}
        date="Sunday, 20 April"
        weatherText="Sunny"
      />

      {/* Additional Cities */}
      <div className="space-y-4 mt-6">
        <SubCard city="Bangalore" temp={23} feelsLike={24} />
        <SubCard city="Mumbai" temp={24} feelsLike={26} />
      </div>
    </div>
  );
};

export default LeftSec;
