import { Dimensions,StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react';
import Navbar_lg from './navbar_lg_Folder/navbar_lg';
import Navbar_sm from './navbar_sm_Folder/navbar_sm';

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
        setScreenWidth(window.width);
        // Hide menu when resizing to larger screen
        // if (window.width >= 400) {
        // setMenuVisible(false);
        // }
    });
    
    return () => subscription.remove();
    }, []);  
  return (
    <View>
    {screenWidth > 400 && <Navbar_lg/>}
    {screenWidth <= 400 && <Navbar_sm/>}
      
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({})