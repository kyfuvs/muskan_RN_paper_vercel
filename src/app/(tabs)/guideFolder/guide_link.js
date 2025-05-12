import { View, Text, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const Guide_link = () => {
  const handlePress = () => {
    Linking.openURL('https://callstack.github.io/react-native-paper/docs/guides/getting-started/');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ color: 'blue' }}>Guides -- React Native Paper</Text>
    </TouchableOpacity>
  );
};

export default Guide_link;
