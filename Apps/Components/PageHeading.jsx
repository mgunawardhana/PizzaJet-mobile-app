import React from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {TouchableOpacity} from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
export default function PageHeading ({title}) {
    const navigation = useNavigation();


    return (
            <TouchableOpacity
                style={{
                    display: "flex", flexDirection: "row", gap: 10, alignItems: "center",
                }}
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="arrow-back" size={30} color="black"/>
                <Text style={{fontSize: 25, fontFamily: "outfit-medium"}}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
};
