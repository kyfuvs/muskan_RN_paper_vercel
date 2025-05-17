import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router'; 
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Hightlight_link from './highlight_link';
import Active_link from './active_link';

const Navbar = () => {
  const router = useRouter();
  const { theme } = useThemeToggle();
  
  // Track screen width with state to enable responsiveness
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  // State to control menu visibility on small screens
  const [menuVisible, setMenuVisible] = useState(false);
  
  // Update screenWidth when dimensions change
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
      // Hide menu when resizing to larger screen
      if (window.width >= 400) {
        setMenuVisible(false);
      }
    });
    
    return () => subscription.remove();
  }, []);

  const RN_PAPER_LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iLTYgMCA0OCA0OCI+PHRpdGxlPmxvZ288L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxnIGlkPSJBcnRib2FyZCIgZmlsbD0iIzk5OSIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuMDAwMDAwLCAtMzIuMDAwMDAwKSI+PHBhdGggaWQ9ImxvZ28iIGQ9Ik02Ni4yNjUzNTk1LDQwLjA3OTI5NDkgTDYyLjk0MzIyODUsNTIuMzQwODY3MiBDNjIuOTExMzI0MSw1Mi4yNjk5NTg0IDYyLjg3NjI5MTcsNTIuMjAxMjQ1OSA2Mi44NDE1NzIxLDUyLjEzMTU5MjIgQzYyLjc4MTIwMzksNTIuMDA1MTQ4NiA2Mi43MTc3MDc3LDUxLjg3OTY0NjMgNjIuNjQ3MzMwMiw1MS43NTc1OTU0IEM2MS44MTkzNzgsNTAuMzE4NzExOCA2MC41MjAwNTI5LDQ5LjI2MzIzNzYgNTguOTY0MjQwOSw0OC43MzczODMxIEM1OC44MjcyMzkzLDQ4LjY5MDk0NzMgNTguNjkxNDg5LDQ4LjY0MjAwMTQgNTguNTUwNDIxMiw0OC42MDQwMzY5IEM1OC41MDgxOTQ3LDQ4LjU5Mjc0MTcgNTguNDY1NjU1NCw0OC41ODY3ODA0IDU4LjQyMzQyODksNDguNTc2NDI2NCBDNTYuNzIxMjMxNiw0OC4xNTMxNyA1NC45NTMzNDg4LDQ4LjM5ODIxMzIgNTMuNDMwMDY2OCw0OS4yODAxODA0IEwzNC4wMzU1OTA4LDYwLjUxMjYzNDEgTDM3Ljg5ODIyMDksNDYuMjg3MjY0OSBMNTguNjU4NjQ2MSwzNC4yNjQxNDY5IEM2MS4xMzQwNTc1LDMyLjgzMDI4MzQgNjQuMzEwMTE2LDMzLjY4NDY0MDEgNjUuNzM5MjQ4NiwzNi4xNjczODg5IEM2Ni40MjY0NDU4LDM3LjM2MDkxNTYgNjYuNjEyNTU1MiwzOC43NTMwNDk2IDY2LjI2NTM1OTUsNDAuMDc5Mjk0OSBaIE01OS4zODY4MTg3LDU5LjY1MDExOTcgTDUzLjUwODU3NjgsNjMuMTU3OTA4MyBMNDIuOTQwNjkwOSw2OS40MDQ3ODQxIEw0Ni45MzQzNzk2LDU0Ljg1MzczNjUgTDU0LjIxMjAzOTEsNTAuNjM4NzQyNiBDNTQuNTExNjkwOCw1MC40NjU1NDk0IDU0LjgyMzg1NDEsNTAuMzIzNDE4MSA1NS4xNDQ0NjI4LDUwLjIxNDIzMTEgQzU1Ljk2MzM0NDEsNDkuOTM0Njc0OCA1Ni44MzY2NTA3LDQ5Ljg2OTQxMzYgNTcuNjk3NDQ1OCw1MC4wMjE4OTg5IEM1Ny44NDcyNzE3LDUwLjA0ODU2ODEgNTcuOTk2Nzg0OCw1MC4wNzk2Mjk5IDU4LjE0NTY3MjMsNTAuMTE5NDc2OSBDNTkuNDgyODQ0OSw1MC40NzkwNDA5IDYwLjYwMDc1MjQsNTEuMzM5MzU5IDYxLjI5Mjk1NDMsNTIuNTQyMjk4MyBDNjEuMjkzNTc5OSw1Mi41NDM1NTM0IDYxLjI5NDUxODIsNTIuNTQ1MTIyMiA2MS4yOTUxNDM4LDUyLjU0NjM3NzIgQzYxLjgzNjI2ODYsNTMuNDg5ODQwNSA2Mi4wNjIxMDIyLDU0Ljg5MTM4NzIgNjEuODgyODc0MSw1Ni4xNDU3ODI0IEM2MS41OTI2MDYsNTcuNjIwNzQ3OSA2MC42OTgzNDI2LDU4Ljg5MDUxNzIgNTkuMzg2ODE4Nyw1OS42NTAxMTk3IFogTTQ5LjM5NjAyODMsNzcuNzAwMTcwOCBMNDIuOTQxMzE2NSw3MS4yMjU1MDg0IEw1MS43ODAxMDUzLDY2LjAwMDUzNDkgTDUyLjY1NjIyNyw2NS40ODI4MzggTDQ5LjM5NjAyODMsNzcuNzAwMTcwOCBaIE02Ny4wOTM2MjQ1LDM1LjM4Mjk5OTcgQzY1LjIzMzc4MTcsMzIuMTUwNjg4NiA2MS4wOTgzOTk2LDMxLjAzOTM2NTkgNTcuODc2NjczOSwzMi45MDU1ODQ4IEwzNi44MzcyNDEsNDUuMDkwMjg3IEMzNi42NTg2Mzg1LDQ1LjE5MzUxMjYgMzYuNTI4MjA1NSw0NS4zNjM1NjgyIDM2LjQ3Mzc4MDMsNDUuNTYzNDMwNSBMMzIuMDI3NDg2LDYxLjkzODAyNjIgQzMxLjk0NDI4NDEsNjIuMjQ0ODc5MyAzMi4wNTM3NjAzLDYyLjU3MTgxMjcgMzIuMzA0NjE3LDYyLjc2NTcxMzcgQzMyLjQ0NDc0NjQsNjIuODczNjQ1NyAzMi42MTMwMjY4LDYyLjkyODU1MjkgMzIuNzgyMjQ1Niw2Mi45Mjg1NTI5IEMzMi45MTY0MzIxLDYyLjkyODU1MjkgMzMuMDUxNTU2OSw2Mi44OTQwMzk4IDMzLjE3MjkxOSw2Mi44MjM0NDQ4IEw0NS4wMDU3MjMyLDU1Ljk3MDM5MyBMNDAuOTIwMzg3Myw3MC44NTU1OTA0IEM0MC45MTEwMDM3LDcwLjg4ODUzNDggNDAuOTA1MzczNSw3MC45MjE3OTI5IDQwLjkwMDY4MTYsNzAuOTU1MDUxIEM0MC45MDAzNjg4LDcwLjk1ODUwMjMgNDAuODk4ODA0OSw3MC45NjE2Mzk5IDQwLjg5ODQ5MjEsNzAuOTY0Nzc3NCBDNDAuODk4MTc5Myw3MC45NjU0MDQ5IDQwLjg5ODQ5MjEsNzAuOTY2MzQ2MiA0MC44OTg0OTIxLDcwLjk2NzI4NzUgQzQwLjg5MTYxMDgsNzEuMDIwNjI1OSA0MC44OTIyMzYzLDcxLjA3MzY1MDYgNDAuODk2NjE1NCw3MS4xMjYzNjE2IEM0MC44OTc1NTM3LDcxLjEzODU5ODEgNDAuODk4ODA0OSw3MS4xNTA1MjA4IDQwLjkwMDM2ODgsNzEuMTYyNDQzNSBDNDAuOTA2OTM3NCw3MS4yMTQ4NDA3IDQwLjkxNjk0NjcsNzEuMjY2NjEwNCA0MC45MzQxNSw3MS4zMTY0OTc1IEM0MC45MzQ3NzU2LDcxLjMxODA2NjMgNDAuOTM1NzE0LDcxLjMxOTk0ODkgNDAuOTM2MzM5Niw3MS4zMjE4MzE0IEM0MC45NTMyMzAyLDcxLjM3MDE0OTggNDAuOTc1NzUxLDcxLjQxNjI3MTggNDEuMDAxNzEyNSw3MS40NjA4MjUyIEM0MS4wMDc2NTU0LDcxLjQ3MDU1MTYgNDEuMDEzMjg1Niw3MS40Nzk5NjQzIDQxLjAxOTIyODYsNzEuNDg5Mzc2OSBDNDEuMDQ4MDA1Miw3MS41MzQyNDQgNDEuMDgwNTM1Myw3MS41NzY2MDEgNDEuMTE4MzgyNyw3MS42MTQ4NzkyIEM0MS4xMTk2MzM5LDcxLjYxNjEzNDIgNDEuMTIwMjU5NCw3MS42MTczODkyIDQxLjEyMTE5NzgsNzEuNjE4MzMwNSBMNDkuMjQ4MDc5MSw3OS43NzAzMzA4IEM0OS4zOTY2NTM5LDc5LjkxOTY3ODUgNDkuNTk2MjEzMiw4MCA0OS44MDEwODk5LDgwIEM0OS44Njg2NTIzLDgwIDQ5LjkzNjUyNzUsNzkuOTkxMjE0OCA1MC4wMDM0NjQzLDc5Ljk3MzMzMDggQzUwLjI3MzQwMTIsNzkuOTAwODUzMiA1MC40ODQyMjA5LDc5LjY4OTM4MTkgNTAuNTU2NDc1MSw3OS40MTg2MTA3IEw1NC41Nzg2Mjc2LDY0LjM0NDUzMjQgTDYwLjE3Nzg2MTgsNjEuMDAzMzQ4IEM2MS44NDA2NDc2LDYwLjA0MDExODEgNjIuOTcwNzU0LDU4LjI2MzMxOTYgNjMuNTE0MzgxMSw1Ni4yMTEzNTc0IEM2My41MTgxMzQ1LDU2LjE5OTQzNDcgNjMuNTIxODg4LDU2LjE4NzUxMTkgNjMuNTI1MDE1OSw1Ni4xNzU1ODkyIEw2Ny43NzYxMjk5LDQwLjQ4NTI5NDcgQzY4LjIzMDYxMjIsMzguNzQ4OTcwNyA2Ny45ODgyMDA4LDM2LjkzNjcxNzkgNjcuMDkzNjI0NSwzNS4zODI5OTk3IFoiLz48L2c+PC9nPjwvc3ZnPgo=';

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Custom hamburger menu icon component
  const HamburgerIcon = () => (
    <View style={styles.hamburgerIcon}>
      <View style={[styles.hamburgerLine, {backgroundColor: theme.colors.text || '#ffcc00'}]} />
      <View style={[styles.hamburgerLine, {backgroundColor: theme.colors.text || '#ffcc00'}]} />
      <View style={[styles.hamburgerLine, {backgroundColor: theme.colors.text || '#ffcc00'}]} />
    </View>
  );

  return (
    <View style={[
      styles.navbar, 
      {
        backgroundColor: theme.colors.background,
        flexDirection: 'row', // Always row for the top bar
      }
    ]}>
      {/* Logo */}
      <Link href={'https://reactnativepaper.com/'} target='_blank'>
        <Image source={{ uri: RN_PAPER_LOGO }} style={[styles.brand, {tintColor: theme.colors.text}]} />
      </Link>
      
      {/* Show hamburger menu on small screens */}
      {screenWidth < 400 && (
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={toggleMenu}
        >
          <HamburgerIcon />
        </TouchableOpacity>
      )}
      
      {/* Navigation Links - conditional rendering based on screen size and menu state */}
      {(screenWidth >= 400 || (screenWidth < 400 && menuVisible)) && (
        <View style={[
          styles.linksContainer,
          // screenWidth < 400 && styles.mobileLinksContainer
          screenWidth < 400 ? [styles.mobileLinksContainer, { backgroundColor: theme.colors.background }] : null,
        ]}>
          <View style={[
            styles.links,
            { 
              flexDirection: screenWidth >= 400 ? 'row' : 'column',
              alignItems: screenWidth >= 400 ? 'center' : 'flex-start',
            }
          ]}>
           

            <Active_link link_name={'Home'} link_page={'/'}/>
            <Active_link link_name={'Guides'} link_page={'/guideFolder'}/>
           <Active_link link_name={'Components'} link_page={'/compFolder'}/>
           <Active_link link_name={'Showcase'} link_page={'/showcaseFolder'}/>
     
          </View>
        </View>
      )}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    width: '100vw',
    minHeight: 56,
    // justifyContent: 'space-between',
    justifyContent: 'start',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: 'grey',
    zIndex: 1000, // Ensure navbar is above other content
  },
  
  brand: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  
  menuButton: {
    position: 'absolute',
    // right: 20,
    right: 280,
    height: 40,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  hamburgerIcon: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  
  hamburgerLine: {
    width: 24,
    height: 2,
    borderRadius: 1,
  },
  
  linksContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  
  mobileLinksContainer: {
    position: 'absolute',
    top: 60, 
    // top: 56, 
    // Position just below the navbar
    // left: 0,
    left: 50,
    right: 0,
    width:'50%',
    // backgroundColor: 'rgba(63, 62, 62, 0.9)', 
    // Semi-transparent background
    paddingVertical: 15,
    paddingHorizontal: 20,
    zIndex: 999,
  },
  
  links: {
    gap: 20,
  },
  
  link: {
    color: '#ffcc00',
    fontSize: 14,
    paddingVertical: 8, // More touch area for mobile
  },
});