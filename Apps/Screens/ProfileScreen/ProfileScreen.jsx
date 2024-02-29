import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import Colors from "../../Utils/Colors";
import {Ionicons} from "@expo/vector-icons";

export default function ProfileScreen() {

    const profileMenu = [{
        id: 1, name: 'Home', icon: 'home'
    }, {
        id: 2, name: 'My Booking', icon: 'bookmark-sharp'
    }, {
        id: 3, name: 'Contact Us', icon: 'mail'
    }, {
        id: 4, name: 'Logout', icon: 'log-out'
    }]

    return (<View>
        <View style={{padding: 20, paddingTop: 0, backgroundColor: Colors.LIGHT_ORANGE}}>
            <Text style={{fontSize: 20, fontFamily: 'bold', color: Colors.WHITE}}>Profile</Text>
            <View style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20,

            }}>

                <Image source={{ uri: 'https://e0.pxfuel.com/wallpapers/289/267/desktop-wallpaper-tirolzinho-cute-cartoon-cartoon-cute-cartoon-boy-cute-cartoon-boys.jpg'}}
                       style={{width: 90, height: 90, borderRadius: 99}}/>

                <Text style={{
                    fontSize: 26, marginTop: 8,
                    // fontFamily: 'bold',
                    paddingTop: 10, color: Colors.WHITE
                }}>Maneesha Gunawardhana</Text>
                <Text style={{
                    fontSize: 18, marginTop: 8,
                    // fontFamily: 'bold',
                    paddingTop: 10, color: Colors.WHITE
                }}>mnshgnwardhana622@gmail.com

</Text>
            </View>
        </View>
        <View style={{paddingTop:60}}>
            <FlatList data={profileMenu}
                      renderItem={({item, index}) => (
                          <TouchableOpacity style={{
                          display: 'flex',
                              paddingHorizontal:80,
                              flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 40,
                      }}>
                          <Ionicons name={item.icon} size={35} color={Colors.LIGHT_ORANGE}/>
                          <Text style={{
                              // fontFamily: 'outfit',
                              fontSize: 20,
                          }}>{item.name}</Text>
                      </TouchableOpacity>)}/>
        </View>
    </View>)
}