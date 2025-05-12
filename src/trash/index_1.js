import { Text, View, useColorScheme } from "react-native";

import {useTheme} from 'react-native-paper';

export default function Index() {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      
    </View>
  );
}
