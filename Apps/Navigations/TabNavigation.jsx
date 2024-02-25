import { Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import BookingScreen from "../Screens/Booking/BookingScreen";
import Colors from "../../Utils/Colors";

/**
 * `TabNavigation` is a functional component that sets up the bottom tab navigation for the application.
 * It uses the `createBottomTabNavigator` function from `@react-navigation/bottom-tabs` to create a tab navigator.
 * The navigator has three screens: Home, Profile, and Booking, each with their own label and icon.
 * The `headerShown` option is set to `false` to hide the header, and `tabBarActiveTintColor` is set to `Colors.PRIMARY` to change the color of the active tab.
 *
 * @example
 * // To use this component in an application:
 * // import TabNavigation from './TabNavigation';
 * // ...
 * // <TabNavigation />
 *
 * @returns {JSX.Element} The tab navigator component.
 */
export default function TabNavigation() {
  /**
   * `Tab` is a tab navigator created using the `createBottomTabNavigator` function.
   */
  const Tab = createBottomTabNavigator();

  return (
    // The `Tab.Navigator` component is used to wrap the screens of the tab navigator.
    //  The `screenOptions` prop is used to set options for all screens in the navigator.

    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      {/*The `Tab.Screen` components are used to define the screens of the tab navigator.*/}
      {/*Each screen has a `name` prop (which is used for navigation) and a `component` prop (which is the component to render for that screen).*/}
      {/*The `options` prop is used to set options for the screen, such as the label and icon of the tab.*/}

      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <Entypo name="bookmarks" size={24} color="black" />
          ),
        }}
      />

      {/*<Tab.Screen name="login" component={Login} />*/}
    </Tab.Navigator>
  );
}
