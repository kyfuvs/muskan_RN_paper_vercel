import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle';

const Comp = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <Text style={{color:theme.colors.text}}>Components</Text>
    </View>
  )
}

export default Comp

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})