import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import BusinessByCategoryScreen from "../Screens/BusinessByCategoryScreen/BusinessByCategoryScreen";
import BusinessDetailsScreen from "../Screens/BusinessDetailsScreen/BusinessDetailsScreen";
const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="business-list" component={BusinessByCategoryScreen} />

      <Stack.Screen name="business-details" component={BusinessDetailsScreen} />
    </Stack.Navigator>
  );
}
