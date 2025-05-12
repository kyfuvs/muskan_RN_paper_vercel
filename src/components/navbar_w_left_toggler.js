import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import Navbar from './navbar';

export default function Navbar_w_left_toggler() {
    const navigation = useNavigation();
    const { isDarkTheme, toggleTheme,theme } = useThemeToggle();
  
    const Toggler_drawer =()=>{
      return (
        <View style={{marginLeft:20}}>
          <TouchableOpacity 
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            style={{ marginLeft: 10 }}
          >
            <Ionicons name="menu" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>
      )
    }

    return (
    //   <View style={{ flexDirection: 'row', alignItems: 'center', height: 56, width:'90%' }}>
    <View style={styles.container}>    
    {/* Drawer toggle button */}
        {/* <TouchableOpacity 
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          style={{ marginLeft: 10 }}
        >
          <Ionicons name="menu" size={24} color={theme.colors.text} />
        </TouchableOpacity> */}
        <Toggler_drawer/>
        {/* <View style={{ width: 10 }} /> */}
  
        {/* Navbar */}
        <Navbar/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection:'row',
      width:'100vw',
      justifyContent: "center",
      alignItems: "center",
    }
  
  })
  