import React from 'react'
import { useState } from "react";
import DayNightToggle from "../src/DayNightToggle";
const App = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <div className={`min-h-screen relative ${isDay ? 'bg-blue-100' : 'bg-gray-900'} transition-all`}>
      
    {/* Top-Right Toggle */}
    <div className="absolute top-1 right-4 z">
      <DayNightToggle isDay={isDay} setIsDay={setIsDay} />
    </div>

    {/* Rest of your weather dashboard goes here */}
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      {/* weather cards, graphs, info etc */}
    </main>
  </div>
);
};


export default App