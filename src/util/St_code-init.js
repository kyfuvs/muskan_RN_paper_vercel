import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
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
   <View style={[styles.container, { backgroundColor: theme.colors.code }]}>
        <Text style={[styles.code, { color: theme.colors.onCode }]}>{code}</Text>
        <IconButton
            icon="content-copy"
            size={20}
            onPress={handleCopy}
            style={styles.copyButton}
        />
   </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    // alignSelf: 'flex-start', 
    // <-- Shrink to fit content
    alignSelf:'center',
    width:'80%',
    maxWidth: '100%',        // Optional: prevents overflow
  },

  copyButton: {
    position: 'absolute',
    // marginLeft:50,
    // top: 4,
    top:-5,
    right: 4,
  },

  wrapper: {
    flexDirection: 'row',   // Lay out code + button in a row
    justifyContent: 'space-between', // Push copy button to the right
    alignItems: 'flex-start',   // Align items to the top
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

