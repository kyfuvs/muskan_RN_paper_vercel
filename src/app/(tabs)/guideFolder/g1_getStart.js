import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeToggle } from '@/hooks/useThemeToggle';
import St_code from '../../../util/st_code';

const G1_getStart = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
        <Text style={[styles.h1,{color:theme.colors.text}]}>Getting Started</Text>
        <Text style={[styles.h2,{color:theme.colors.text}]}>Installation</Text>
        <St_code code={`const x = 10;\nconsole.log(x);`} />

    </View>
  )
}

export default G1_getStart

const styles = StyleSheet.create({
   container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
   },

   h1:{
    fontSize:22,
    fontWeight:'bold'
   },

   h2:{
    marginTop:10,
    fontSize:20,
    fontWeight:'bold'
   }

})