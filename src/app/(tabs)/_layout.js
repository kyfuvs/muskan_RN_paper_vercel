import { Tabs } from 'expo-router';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { Ionicons } from '@expo/vector-icons';
// import Navbar_w_left_toggler from '@/components/navbar_w_left_toggler';
import Navbar from '../../components/navbarFolder/navbar';
import Toggler_dark_mode_paper from '@/dark_mode_paper/toggler_dark_mode_paper';


export default function Tabs_Layout() {
  const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  return (
    <Tabs
      screenOptions={{
        // headerShown: false,
        headerRight:()=><Toggler_dark_mode_paper/>,
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
       
      }}>

      <Tabs.Screen
        name="index"
        options={{
          // headerLeft:()=><Navbar_w_left_toggler/>,
          headerLeft:()=><Navbar/>,
          headerTitle: () => null,
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
        }}
      />

      <Tabs.Screen
        name="guideFolder"
        options={{
          headerShown: false, 
          tabBarLabel: 'Guide',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'navigate-circle' : 'navigate-circle-outline'}
              color={focused ? '#2b34c7' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="compFolder"
        options={{
          headerShown: false, 
          tabBarLabel: 'Components',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "qr-code" : 'qr-code-outline'}
              color={focused ? '#2b34c7' : 'grey'}
              size={24}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="showcaseFolder"
        options={{
          headerShown: false, 
          tabBarLabel: 'Showcase',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "reader" : 'reader-outline'}
              color={focused ? '#2b34c7' : 'grey'}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}