import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useThemeToggle } from '@/hooks/useThemeToggle';
import {useNavbarToggle} from '../../../hooks/useNavbarToggle'
import { usePathname } from 'expo-router';

const Navbar_sm_content = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  const {navbarTogglerVisible, setNavbarTogglerVisible,toggle_navbarTogglerVisible}=useNavbarToggle()
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <View style={styles.container}>
      <Link href={'/'} 
            style={{'color':isActive('/')?'deepskyblue':theme.colors.text,
                    // 'fontSize':isActive('/')? 18: 14,
                    'fontWeight':isActive('/')? 'bold': null,
            }}>
            onPress={toggle_navbarTogglerVisible}
        Home
      </Link>

      <Link href={'/guideFolder'}
            style={{'color':isActive('/guideFolder')?'deepskyblue':theme.colors.text,
                    'fontWeight':isActive('/guideFolder')? 'bold': null,
            }}>
        Guides
      </Link>

      <Link href={'/compFolder'}
            style={{'color':isActive('/compFolder')?'deepskyblue':theme.colors.text,
                    'fontWeight':isActive('/compFolder')? 'bold': null,
            }}>
        Components
      </Link>

      <Link href={'/showcaseFolder'}
            style={{'color':isActive('/showcaseFolder')?'deepskyblue':theme.colors.text,
                    'fontWeight':isActive('/showcaseFolder')? 'bold': null,
            }}>
        Showcase
      </Link>
    </View>
  )
}

export default Navbar_sm_content

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 60,
        flex: 1,
        flexDirection:'column',
        gap:25,
        
    }
})