import React from 'react';
import { Button, Text, Switch } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useThemeToggle } from '../hooks/useThemeToggle';
import { View } from 'react-native'; // ✅ correct import

export default function Switch_dark_mode_paper() {
  const { isDarkTheme, toggleTheme, theme } = useThemeToggle();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
      <Ionicons 
        name="sunny"
        size={22}
        color={isDarkTheme ? 'white' : 'black'}
        onPress={isDarkTheme ? () => toggleTheme() : () => {}}
      />

      <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      <Ionicons 
        name="moon"
        size={22}
        color={isDarkTheme ? 'white' : 'black'}
        onPress={!isDarkTheme ? () => toggleTheme() : () => {}}
      />
    </View>
  );
}
