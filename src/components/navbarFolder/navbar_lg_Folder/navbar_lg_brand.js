import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'; 
import RN_PAPER_LOGO from './navbar_lg_brand_logo'
import { useThemeToggle } from '@/hooks/useThemeToggle';

const Navbar_lg_brand = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <View>
      {/* Logo */}
        <Link href={'https://reactnativepaper.com/'} target='_blank'>
          <Image source={{ uri: RN_PAPER_LOGO }} style={[styles.brand, {tintColor: theme.colors.text}]} />
        </Link>
    </View>
  )
}

export default Navbar_lg_brand

const styles = StyleSheet.create({
brand: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
},
})