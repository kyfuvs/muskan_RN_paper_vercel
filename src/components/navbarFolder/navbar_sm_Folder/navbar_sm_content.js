import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useThemeToggle } from '@/hooks/useThemeToggle';
import { useNavbarToggle } from '../../../hooks/useNavbarToggle';
import { usePathname, useRouter } from 'expo-router';

const Navbar_sm_content = () => {
  const { theme } = useThemeToggle();
  const { toggle_navbarTogglerVisible } = useNavbarToggle();
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path) => pathname === path;

  const handleNavigate = (path) => {
    router.push(path);
    toggle_navbarTogglerVisible();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleNavigate('/')}>
        <Text style={{
          color: isActive('/') ? 'deepskyblue' : theme.colors.text,
          fontWeight: isActive('/') ? 'bold' : 'normal',
        }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('/guideFolder')}>
        <Text style={{
          color: isActive('/guideFolder') ? 'deepskyblue' : theme.colors.text,
          fontWeight: isActive('/guideFolder') ? 'bold' : 'normal',
        }}>
          Guides
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('/compFolder')}>
        <Text style={{
          color: isActive('/compFolder') ? 'deepskyblue' : theme.colors.text,
          fontWeight: isActive('/compFolder') ? 'bold' : 'normal',
        }}>
          Components
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate('/showcaseFolder')}>
        <Text style={{
          color: isActive('/showcaseFolder') ? 'deepskyblue' : theme.colors.text,
          fontWeight: isActive('/showcaseFolder') ? 'bold' : 'normal',
        }}>
          Showcase
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar_sm_content;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 80,
    flex: 1,
    flexDirection: 'column',
    gap: 25,
  },
});
