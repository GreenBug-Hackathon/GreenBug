import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Image from "../screens/Image";
import SvgHome from "../../assets/icons/home";
import SvgPlant from "../../assets/icons/plant";
import { Platform } from "react-native";

const Tab = () => {
  const TabStack = createBottomTabNavigator();
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "white",
          borderRadius: 15,
          height: 60,
          elevation: 15,
          shadowRadius: 15,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
      }}
    >
      <TabStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgHome stroke={focused ? "green" : "#1C274C"} />
          ),
        }}
      />
      <TabStack.Screen
        name="Images"
        component={Image}
        options={{
          tabBarIcon: ({ focused }) => (
            <SvgPlant stroke={focused ? "green" : "#1C274C"} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default Tab;
