import React from 'react';
import {Text, View} from 'react-native';
import PageHeading from "../../Components/PageHeading";
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const BookingModel = ({hideModal}) => {

    let useNavigation1 = useNavigation();

    return (<View style={{padding:20}}>
        <TouchableOpacity
            style={{
                display: "flex", flexDirection: "row", gap: 10, alignItems: "center",
            }}
            onPress={() =>hideModal()}
        >
            <Ionicons name="arrow-back" size={30} color="black"/>
            <Text style={{fontSize: 25, fontFamily: "outfit-medium"}}>
                Booking
            </Text>
        </TouchableOpacity>
        </View>);
};

export default BookingModel;