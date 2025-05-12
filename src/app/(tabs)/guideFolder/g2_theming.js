import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle';

const G2_theming = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
        <Text style={{color:theme.colors.text}}>Theming</Text>
    </View>
  )
}

export default G2_theming

const styles = StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }

})