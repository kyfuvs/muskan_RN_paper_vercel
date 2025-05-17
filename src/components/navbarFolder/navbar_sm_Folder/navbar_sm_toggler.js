import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useThemeToggle } from '@/hooks/useThemeToggle';
import {useNavbarToggle} from '../../../hooks/useNavbarToggle'

const Navbar_sm_toggler= () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  const {navbarTogglerVisible, setNavbarTogglerVisible,toggle_navbarTogglerVisible}=useNavbarToggle()
  
  return (
    <View style={{marginLeft:20}}>
            <TouchableOpacity 
            onPress={() => toggle_navbarTogglerVisible()}
            style={{ marginLeft: 10 }}
            >
            <Ionicons name="menu" size={24} color={theme.colors.text} />
            </TouchableOpacity>
    </View>
  )
}

export default Navbar_sm_toggler

const styles = StyleSheet.create({})