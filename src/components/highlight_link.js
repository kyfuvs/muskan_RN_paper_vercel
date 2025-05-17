import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router'; 

export default function Hightlight_link({link_name, link_page}) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const router = useRouter();

  return (
    <TouchableOpacity
      onPressIn={() => setIsHighlighted(true)} // Highlight the link on press
      onPressOut={() => setIsHighlighted(false)} // Remove highlight when press ends
    //   onPress={() => router.push({link_page})}
      onPress={() => router.push(link_page)}


    >
      <Text
        style={[
          styles.linkText,
          isHighlighted && styles.highlightedLink
        ]}
      >
        {link_name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkText: {
    fontSize: 18,
    color: 'blue',
  },
  highlightedLink: {
    textDecorationLine: 'underline', // Adds an underline to highlight
    color: 'darkblue', // Change color when highlighted
  },
});
