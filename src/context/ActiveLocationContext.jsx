import React, { createContext, useContext, useState, useEffect } from "react";

/**
 * Context to store and provide active geolocation information.
 */
const ActiveLocationContext = createContext({
  activeLocation: null,
  setActiveLocation: () => {},
  error: null,
  loading: true,
});

/**
 * Provider component to fetch and supply geolocation data to its children.
 */
export const ActiveLocationProvider = ({ children }) => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setActiveLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(`Failed to get geolocation: ${err.message}`);
        setLoading(false);
      }
    );
  }, []);

  return (
    <ActiveLocationContext.Provider
      value={{ activeLocation, setActiveLocation, error, loading }}
    >
      {children}
    </ActiveLocationContext.Provider>
  );
};

/**
 * Custom hook to use active location context.
 */
export const useActiveLocation = () => {
  return useContext(ActiveLocationContext);
};
