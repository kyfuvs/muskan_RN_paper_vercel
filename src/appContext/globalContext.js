import React, { createContext, useState } from 'react';

// Create Context
export const GlobalContext = createContext();

// Create a Context Provider component
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  
  return (
    <GlobalContext.Provider value={{
      isDarkTheme, setIsDarkTheme,
      toggleTheme
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider
