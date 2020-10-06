import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { Home } from "./components/Home";
import { Game } from "./components/Game";

const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to snake</Text>
//       <Text style={styles.description}>
//         This is my first react native project. You can start your game by
//         clicking the button below!
//       </Text>
//       <TouchableHighlight
//         onPress={() => {
//           alert("hihaa");
//         }}
//         accessibilityLabel="Learn more about this purple button"
//       >
//         <View style={styles.button}>
//           <Text>Start game</Text>
//         </View>
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#95B104",
//   },
//   title: {
//     fontSize: 30,
//     textAlign: "center",
//     marginTop: 64,
//     fontWeight: "bold",
//   },
//   description: {
//     marginTop: 16,
//     fontSize: 20,
//     padding: 16,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "white",
//     width: "50%",
//     height: 50,
//     borderRadius: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//     marginTop: 32,
//   },
// });
