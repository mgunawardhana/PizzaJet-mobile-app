import {FlatList, Text, TouchableOpacity, View} from "react-native";
import React, { useEffect, useState } from 'react';
import GlobalApi from "../../Utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "../BusinessByCategoryScreen/BusinessListItem";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import Colors from "../../Utils/Colors";


export default function BookingScreen() {
    const { user } = useUser();
    const navigation = useNavigation();

    const [booking, setBooking] = useState([]);

    useEffect(() => {
        getUserBooking();
    }, []);

    const getUserBooking = () => {
        GlobalApi.getUserBooking("mahesh@gmail.com").then((res) => {
            console.log("****", res.bookings);
            setBooking(res.bookings || []);
        });
    }

    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity
                style={{position:"absolute",padding:20,marginBottom:20}}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <View>
                {/*<FlatList*/}
                {/*    data={booking}*/}
                {/*    renderItem={({ item, index }) => (*/}
                {/*        item.businesses ? <BusinessListItem business={item.businesses} /> :*/}
                {/*            <Text>No Business Found</Text>*/}
                {/*    )}*/}
                {/*/>*/}
                <Text style={{
                    textAlign: "center",
                    textAlignVertical: "center",

                    paddingTop: 40,
                    fontWeight: 'bold',
                    color: Colors.GREY,
                    display: 'flex',fontSize:25
                }}>
                    No Bookings Available Right Now
                </Text>

            </View>
        </View>
    )
}
