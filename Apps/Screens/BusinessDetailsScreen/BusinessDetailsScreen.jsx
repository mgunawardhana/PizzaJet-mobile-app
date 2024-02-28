import { View, Text, TouchableOpacity, Touchable } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const navigation = useNavigation();
  const [isReadMore, setIsReadMore] = useState(false);

  useEffect(() => {
    // param && setBusiness(param.business);
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={styles.backBtnContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={styles.infoContainer}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {business?.name}
        </Text>
        <View styles={styles.subContainer}>
          <Text
            style={{
              fontWeight: "medium",
              color: Colors.LIGHT_ORANGE,
              fontSize: 20,
            }}
          >
            {business?.contactPerson}
          </Text>
          <Text
            style={{
              color: Colors.LIGHT_ORANGE,
              backgroundColor: Colors.LIGHT_GREY,
              padding: 5,
              borderRadius: 5,
              fontSize: 14,
            }}
          >
            {business?.category.name}
          </Text>
        </View>
        <Text
          style={{ fontSize: 17, fontFamily: "outfit", color: Colors.GREY }}
        >
          <MaterialIcons name="location-on" size={20} color="red" />
          {business?.address}
        </Text>
        {/* horizontal line */}
        <View
          style={{
            borderWidth: 0.4,
            borderColor: Colors.LIGHT_GREY,
            margin: 10,
            marginBottom: 10,
          }}
        ></View>
        {/* about me section */}
        <Heading text={"About me"} />
        <Text
          style={{
            fontFamily: "outfit",
            lineHeight: 22,
            color: Colors.GREY,
            fontSize: 14,
          }}
          numberOfLines={isReadMore ? 20 : 5}
        >
          {business.about}
        </Text>
        <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
          <Text
            style={{
              color: Colors.LIGHT_ORANGE,
              fontSize: 16,
              fontFamily: "outfit",
            }}
          >
            {isReadMore ? "Read Less" : "Read more"}
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderWidth: 0.4,
          borderColor: Colors.LIGHT_GREY,
          margin: 5,
          marginBottom: 5,
        }}
      ></View>

      <BusinessPhotos business={business} />
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
