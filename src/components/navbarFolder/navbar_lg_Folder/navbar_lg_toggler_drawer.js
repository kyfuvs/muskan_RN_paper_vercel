import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useThemeToggle } from '@/hooks/useThemeToggle';

const Navbar_lg_toggler_drawer = () => {
  const navigation = useNavigation();
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  
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

export default Navbar_lg_toggler_drawer

const styles = StyleSheet.create({})