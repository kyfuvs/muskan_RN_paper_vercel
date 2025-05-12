import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import { useThemeToggle } from '../hooks/useThemeToggle';
import { useThemeToggle } from '../hooks/useThemeToggle';

export default function Toggler_dark_mode_paper() {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.button,
        // { backgroundColor: isDarkTheme ? 'black' : 'white' },
        { backgroundColor: theme.colors.background },
      ]}
    >
      <Ionicons
        name={isDarkTheme ? 'moon' : 'sunny'}
        size={22}
        color={isDarkTheme ? 'white' : 'black'}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 10,
  },
});
