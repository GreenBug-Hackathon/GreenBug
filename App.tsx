import React from "react";
import Start from "./src/navigation/stacks/Start";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Splash from "./src/navigation/screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogBox } from "react-native";
import registerNNPushToken from "native-notify";

LogBox.ignoreAllLogs();

export default function App() {
  registerNNPushToken(13463, 'viYbtekyjgrwpoQFSMzr4E');
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "fade",
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Start" component={Start} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
