import {Text} from "react-native";
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import {FontAwesome} from '@expo/vector-icons';
import BookingScreen from "../Screens/Booking/BookingScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Colors from "../../Utils/Colors";
export default function TabNavigation() {

    const Tab = createBottomTabNavigator();

    return (<Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.PRIMARY,
        }}>
            <Tab.Screen name="home" component={HomeScreen}
                        options={{
                            tabBarLabel: ({color}) => (<Text style={{color: color, fontSize: 12, marginTop: -7}}>
                                    Home</Text>),
                            tabBarIcon: ({color, size}) => (<FontAwesome name="home" size={24} color="black"/>)

                        }}
            />
            <Tab.Screen name="profile" component={ProfileScreen}
                        options={{
                            tabBarLabel: ({color}) => (<Text style={{color: color, fontSize: 12, marginTop: -7}}>
                                    Profile</Text>),
                            tabBarIcon: ({color, size}) => (<MaterialIcons name="account-circle" size={24} color="black" />)

                        }}/>
            <Tab.Screen name="booking" component={BookingScreen}
                        options={{
                            tabBarLabel: ({color}) => (<Text style={{color: color, fontSize: 12, marginTop: -7}}>
                                    Booking</Text>),
                            tabBarIcon: ({color, size}) => (<Entypo name="bookmarks" size={24} color="black" />)

                        }}/>

            {/*<Tab.Screen name="login" component={Login} />*/}
        </Tab.Navigator>)
}