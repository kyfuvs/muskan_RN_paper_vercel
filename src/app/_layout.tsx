import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import AppProvider, { GlobalContext } from '../appContext/globalContext';
import { useThemeToggle } from '../hooks/useThemeToggle';
import {
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
} from 'react-native-paper';
// import {Colors} from '@/constants/Colors'
import {Colors} from '../constants/Colors'

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function RootLayout() {
  return (
    <AppProvider>
      <InnerLayout/>
    </AppProvider>
  )
}

function InnerLayout() {
  const { isDarkTheme } = useThemeToggle();
  const theme = isDarkTheme
  ? { ...MD3DarkTheme, colors: Colors.dark }
  : { ...MD3LightTheme, colors: Colors.light };

return (
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <MaterialCommunityIcons {...props} />,
      }}
    >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
  </PaperProvider>
);
}