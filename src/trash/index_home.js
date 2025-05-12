import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import {useTheme, Button} from 'react-native-paper';
import { useThemeToggle } from '@/hooks/useThemeToggle';

import Switch_dark_mode_paper from '@/dark_mode_paper/switch_dark_mode_paper'
import Toggler_dar_mode_paper from '@/dark_mode_paper/toggler_dark_mode_paper'

const home = () => {
  // const theme = useTheme();
  const colorScheme = useColorScheme();
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();

  return (
    <View style={[styles.container,{backgroundColor:theme.colors.background}]}>
      <Text style={{color: theme.colors.text, fontSize: 20, padding: 15}}>
        Mode: {isDarkTheme?'dark':'light'}
      </Text>
      <Switch_dark_mode_paper/>
      <Toggler_dar_mode_paper/>
      <Button icon="camera" mode="contained" style={{marginTop:10}} onPress={toggleTheme}>
        Press me
      </Button>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }

})