import { Dimensions,StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Navbar from './navbar';

export default function Navbar_w_left_toggler() {
    const navigation = useNavigation();
    const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
    const [mobileWidth, setMobileWidth] = useState(Dimensions.get('window').width);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [togglerVisible, setTogglerVisible] = useState(false);
  
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window }) => {
          setScreenWidth(window.width);
          // setMobileWidth(window.width);
          // Hide menu when resizing to larger screen
          // if (window.width >= 400) {
          //   setTogglerVisible(false);
          // }
        });
        
        return () => subscription.remove();
      }, []);


    const Toggler_drawer =()=>{
      return (
        <View style={{marginLeft:20}}>
          <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="menu" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        {/* Show drawer toggle button only on large screens */}
        {/* {mobileWidth >= 400 && <Toggler_drawer />} */}
        {screenWidth >= 400 && <Toggler_drawer />}
        
        <Navbar />
      </View>
    );

  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection:'row',
      width:'100vw',
      justifyContent: "center",
      alignItems: "center",
    }
  
  })
  