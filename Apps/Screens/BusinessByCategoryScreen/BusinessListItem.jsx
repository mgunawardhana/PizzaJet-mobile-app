import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function BusinessListItem({ business }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("business_deta")}
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContaimer}>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GREY,
            fontSize: 15,
          }}
        >
          {business.contactPerson}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 19,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GREY,
            fontSize: 16,
          }}
        >
          <MaterialIcons name="location-on" size={22} color="red" />
          {business.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContaimer: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
