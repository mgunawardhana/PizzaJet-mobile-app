import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import GlobalApi from "../../Utils/GlobalApi";
import { useState } from "react";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";

export default function BusinessByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businesses, setBusinesses] = useState([]);
  useEffect(() => {
    console.log("Category", param.category);
    getBusinessByCategory();
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessById(param.category)
      .then((response) => {
        setBusinesses(response.businesses);
        console.log(response.businesses);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
        <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
          {param.category}
        </Text>
      </TouchableOpacity>
      {businesses.length > 0 ? (
        <FlatList
          data={businesses}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        ></FlatList>
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: Colors.GREY,
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
          }}
        >
          No Foods Found
        </Text>
      )}
    </View>
  );
}
