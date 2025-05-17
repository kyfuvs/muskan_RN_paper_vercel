import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { useThemeToggle } from '@/hooks/useThemeToggle';

export default function Active_link({ link_name, link_page }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <TouchableOpacity onPress={() => router.push(link_page)}>
      <Text
        style={[
          styles.linkText, // Base styles
          {color:theme.colors.text},
          isActive(link_page) && styles.activeLinkText, // Apply active styles if active
        ]}
      >
        {link_name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkText: {
    fontSize: 14,
    // color: 'black', 
  },
  activeLinkText: { // Styles for active link
    fontSize: 18,
    fontWeight:'bold',
    color: 'orange',
  },
});
