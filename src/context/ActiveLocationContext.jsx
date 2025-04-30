import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context with a default value
const ActiveLocationContext = createContext({
  activeLocation: null,
  setActiveLocation: () => {},
  error: null, // Optional: To store any error related to geolocation
});

// Provider component
export const ActiveLocationProvider = ({ children }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [error, setError] = useState(null); // Track geolocation errors

  // Get the user's geolocation if available
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setActiveLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (err) => {
          setError("Failed to get geolocation");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  }, []);

  return (
    <ActiveLocationContext.Provider value={{ activeLocation, setActiveLocation, error }}>
      {children}
    </ActiveLocationContext.Provider>
  );
};

// Custom hook for accessing the context
export const useActiveLocation = () => {
  const context = useContext(ActiveLocationContext);
  if (!context) {
    throw new Error("useActiveLocation must be used within an ActiveLocationProvider");
  }
  return context;
};