import { useRoute, useNavigation } from '@react-navigation/native';
import { Text, Pressable } from 'react-native';

const NavLink = ({ screenName, label, navigate }) => {
  const route = useRoute();
  const isActive = route.name === screenName;

  return (
    <Pressable onPress={() => navigate(screenName)}>
      <Text style={{ color: isActive ? 'blue' : '#ffcc00', fontSize: 16 }}>
        {label}
      </Text>
    </Pressable>
  );
};
