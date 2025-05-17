import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router'; 

export default function Active_link({link_name, link_page}) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const router = useRouter();
//   const isActive = (name) => router.name === name;
//   const isActive = (path) => router.pathname === path;
//   const isActive = (path) => router.asPath === path;
//   console.log("Current path:", router.asPath);
   const isActive = (path) => {
    // Check if router.asPath is defined before calling startsWith
    return router.asPath && router.asPath.startsWith(path);
  };

  console.log("Current path:", router.asPath);



  return (
    <TouchableOpacity
    //   onPressIn={() => setIsHighlighted(true)} 
    //   onPressOut={() => setIsHighlighted(false)} 
    //   onPress={() => router.push({link_page})}
      onPress={() => router.push(link_page)}


    >
      {/* <Text
        style={[
          styles.linkText,
          isHighlighted && styles.highlightedLink
        ]}
      >
        {link_name}
      </Text> */}
      {/* <Text style={{ color: isActive('Home') ? 'orange' : 'white' }}> */}
      {/* <Text style={{ color: isActive({link_name}) ? 'orange' : 'black' }}>
        {link_name}
      </Text> */}
      <Text style={{ color: isActive(link_page) ? 'orange' : 'black' }}>
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
