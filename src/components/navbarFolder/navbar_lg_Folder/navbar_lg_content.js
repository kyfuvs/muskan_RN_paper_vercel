import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { usePathname } from 'expo-router';

const Navbar_lg_content = () => {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
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

export default Navbar_lg_content

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        gap:25,
    }
})