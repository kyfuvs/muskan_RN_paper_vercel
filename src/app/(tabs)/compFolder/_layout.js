import { View, Text } from 'react-native';
import { Drawer } from 'expo-router/drawer';
// import Navbar_css from "@/components/Navbar_css";
// import Navbar_css from '@/components/navbar_css';
// import Toggler_dark_mode from '@/dark_mode/components/toggler_dark_mode';
// import CustomDrawerContent from './custom_drawerContent';
// import Navbar from '../../../components/navbar'
// import Navbar_w_left_toggler from '../../../components/navbar_w_left_toggler';
import Navbar from '../../../components/navbarFolder/navbar'
import Toggler_dark_mode_paper from '../../../dark_mode_paper/toggler_dark_mode_paper'
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Comp_custom_drawerContent from './compDrawer/comp_custom_drawerContent';

export default function Comp_Layout() {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <Drawer
      drawerContent={(props) => <Comp_custom_drawerContent {...props} />}
      screenOptions={{
        // headerLeft:()=><Navbar/>,
        headerRight: () => <Toggler_dark_mode_paper />, // Dark mode toggle
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.colors.text,
        drawerStyle: {
          backgroundColor: theme.colors.background,
        },
        drawerLabelStyle: {
          color: theme.colors.text, 
        },
        drawerActiveTintColor: theme.colors.text,
        
      }}
    >
      {/* Define Screens with actual components */}
      <Drawer.Screen
        name="index" // Default screen
        options={{
          // headerLeft:()=><Navbar_w_left_toggler/>,
          headerLeft:()=><Navbar/>,
          headerTitle: () => null,

        //   title: 'CSS',
          
          
        //   title: ()=><Navbar/>,
          // title: ()=> <DD_chap/>,
          drawerLabel: 'Components Home',
          // drawerLabel: ()=> <DD_chap/>,
          // drawerLabelStyle: {
          //   paddingVertical: 0,  
          //   height: 80,          
          // },
        }}
      />
      {/* <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: 'Home',
        }}
      /> */}
      {/* <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: 'Settings',
        }}
      /> */}
      {/* <Drawer.Screen
        name="Users"
        options={{
          drawerLabel: 'Users',
        }}
      /> */}
    </Drawer>
  );
}
