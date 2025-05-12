import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, useTheme } from 'react-native-paper';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import * as Clipboard from '@react-native-clipboard/clipboard';
import clipboardCopy from 'clipboard-copy'; // For web

export default function St_code({ code }) {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();

  const handleCopy = () => {
    if (Platform.OS === 'web') {
      clipboardCopy(code);
    } else {
      Clipboard.setString(code);
    }
  };

  return (
   <View style={[styles.wrapper, { backgroundColor: theme.colors.code }]}>
        <Text style={[styles.code, { color: theme.colors.onCode }]}>{code}</Text>
        <IconButton
            icon="content-copy"
            size={20}
            onPress={handleCopy}
        />
   </View>

   
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',        // Lay out code + button in a row
    justifyContent: 'space-between', // Push copy button to the right
    alignItems: 'flex-start',    // Align items to the top
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 20,
    alignSelf: 'flex-start',
    maxWidth: '100%',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    flexShrink: 1,               // Allow code to shrink if needed
  },
});

