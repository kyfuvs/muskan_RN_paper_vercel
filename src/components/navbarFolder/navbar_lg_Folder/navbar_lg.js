import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar_lg_toggler_drawer from './navbar_lg_toggler_drawer'
import Navbar_lg_brand from './navbar_lg_brand'
import Navbar_lg_content from './navbar_lg_content'

const Navbar_lg = () => {
  return (
    <View style={styles.container}>
      <Navbar_lg_toggler_drawer/>
      <Navbar_lg_brand/>
      <Navbar_lg_content/>
    </View>
  )
}

export default Navbar_lg

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        gap:10,
        justifyContent:'flex-start',
        alignItems:'center'
    }
})