import React, { createContext, useState } from 'react';

// Create Context
export const GlobalContext = createContext();

// Create a Context Provider component
export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };
  const [navbarTogglerVisible, setNavbarTogglerVisible] = useState(false);
  const toggle_navbarTogglerVisible = () => {
    setNavbarTogglerVisible((prev) => !prev);
  };
  
  return (
    <GlobalContext.Provider value={{
      isDarkTheme, setIsDarkTheme,
      toggleTheme,
      navbarTogglerVisible, setNavbarTogglerVisible,
      toggle_navbarTogglerVisible
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider
