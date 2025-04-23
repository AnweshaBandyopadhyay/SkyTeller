import React from "react";

const ToggleSwitch = ({ isDay, setIsDay }) => {
  return (
    <div
      className={`w-32 h-12 rounded-full relative cursor-pointer transition-all duration-500 
        ${isDay ? 'bg-gradient-to-r from-yellow-300 to-yellow-500' : 'bg-gradient-to-r from-indigo-900 to-purple-700'}`}
      onClick={() => setIsDay(!isDay)}
    >
      {/* Background City Silhouette */}
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-full z-0 transition-all duration-500
          ${isDay ? 'bg-[url("/day-city.svg")]' : 'bg-[url("/night-city.svg")]'} 
          bg-cover bg-center opacity-60`}
      ></div>

      {/* Sun or Moon */}
      <div
        className={`w-10 h-10 rounded-full absolute top-1/2 -translate-y-1/2 z-10 transition-transform duration-500 ease-in-out
          ${isDay ? 'translate-x-[4px] bg-yellow-200 shadow-xl' : 'translate-x-[85px] bg-white'}`}
      >
        <div className="flex items-center justify-center w-full h-full text-xl">
          {isDay ? (
            <span className="text-yellow-500 transition-opacity duration-500">☀️</span>
          ) : (
            <span className="text-white transition-opacity duration-500">🌙</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
