import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter , usePathname} from 'expo-router';

export default function Active_link({ link_name, link_page }) {
  const router = useRouter();

//   const isActive = (path) => {
//     return router.pathname === path;
//   };

//   console.log("Current path (pathname):", router.pathname);
//   console.log("Link page:", link_page);

//   const router = useRouter();
//   console.log(router.pathname);  
  // Conditionally render if router is available
  const pathname = usePathname();
  console.log(pathname); 
  const isActive = (path) => {
    return pathname === path;
  };

//   if (!router) {
//     return null; // Or some placeholder
//   }

  return (
    <TouchableOpacity onPress={() => router.push(link_page)}>
    <Text style={{ color: isActive(link_page) ? 'orange' : 'black' ,
                   fontSize: isActive(link_page) ? '24' : '18'
    }}>
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
    textDecorationLine: 'underline',
    color: 'darkblue',
  },
});