import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle';
import {useNavbarToggle} from '../../../hooks/useNavbarToggle'
import Navbar_sm_toggler from './navbar_sm_toggler';
import Navbar_sm_content from './navbar_sm_content';

const Navbar_sm = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  const {navbarTogglerVisible, setNavbarTogglerVisible,toggle_navbarTogglerVisible}=useNavbarToggle()
   
  return (
    <View style={styles.container}>
      <Navbar_sm_toggler/>
      {/* {!navbarTogglerVisible && <Navbar_sm_toggler/>} */}
      {navbarTogglerVisible && <Navbar_sm_content/>}
    </View>
    
    // <View>
    //   <Text style={{'color':theme.colors.text}}>Navbar_sm</Text>
    // </View>
  )
}

export default Navbar_sm

const styles = StyleSheet.create({
  container:{
    position:'relative',
    flex:1,
  }
})