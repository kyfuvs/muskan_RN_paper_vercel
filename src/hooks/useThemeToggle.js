import { useContext } from 'react';
import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
// import { GlobalContext } from '../context/GlobalContext';
// import { Colors } from '../constants/Colors';
import { GlobalContext } from '../appContext/globalContext';
import { Colors } from '../constants/Colors';

export const useThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(GlobalContext);

  const theme = isDarkTheme
    ? { ...MD3DarkTheme, colors: Colors.dark }
    : { ...MD3LightTheme, colors: Colors.light };

  return {
    isDarkTheme,
    toggleTheme,
    theme, // <-- return the whole theme
  };
};
