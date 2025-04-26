// components/ThemeToggle.jsx
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react'; // Optional: icons from lucide

const ThemeToggle = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleTheme = () => {
    setIsNight(!isNight);
    // Optional: Apply theme class to body or context/state
    // document.body.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-md shadow-md hover:bg-white/30 transition-all"
    >
      {isNight ? <Moon size={20} /> : <Sun size={20} />}
      <span className="text-sm font-semibold">
        {isNight ? 'Night' : 'Day'}
      </span>
    </button>
  );
};

export default ThemeToggle;
