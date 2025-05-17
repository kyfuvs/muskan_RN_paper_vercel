import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Text, IconButton, Snackbar } from 'react-native-paper';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import * as Clipboard from '@react-native-clipboard/clipboard';
import clipboardCopy from 'clipboard-copy'; // For web

export default function St_code({ code }) {
  const { theme } = useThemeToggle();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (Platform.OS === 'web') {
      clipboardCopy(code);
    } else {
      Clipboard.setString(code);
    }
    setCopied(true); // Show snackbar
  };

  return (
    <View>
      <View style={[styles.container, { backgroundColor: theme.colors.code }]}>
        <Text style={[styles.code, { color: theme.colors.onCode }]}>{code}</Text>
        <IconButton
          icon="content-copy"
          size={20}
          onPress={handleCopy}
          style={styles.copyButton}
        />
      </View>
      <Snackbar
        visible={copied}
        onDismiss={() => setCopied(false)}
        duration={1500}
        style={{ width:'20%',alignSelf:'end',backgroundColor: theme.colors.secondary }}
      >
        Copied to clipboard!
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: 'center',
    width: '80%',
    maxWidth: '100%',
  },
  copyButton: {
    position: 'absolute',
    top: -2,
    right: 4,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    flexShrink: 1,
  },
});
