import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import BusinessPhotos from "./BusinessPhotos";
import BusinessAboutMe from "./BusinessAboutMe";
import BookingModel from "./BookingModel";

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const business = param.business;
  const [showModel, setShowModel] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
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
                // fontWeight: "medium",
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
<<<<<<< HEAD
            style={{ fontSize: 17,
                // fontFamily: "medium",
                color: Colors.GREY }}
=======
            style={{ fontSize: 17, fontFamily: "medium", color: Colors.GREY }}
>>>>>>> origin/master
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
          <BusinessAboutMe business={business} />

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
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          margin: 5,
          gap: 8,
        }}
      >
        <TouchableOpacity style={styles.messageBtn}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.LIGHT_ORANGE,
              fontSize: 18,
<<<<<<< HEAD
              // fontWeight: "medium",
=======
              fontWeight: "medium",
>>>>>>> origin/master
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookingBtn}
          businessId={business.id}
          onPress={() => setShowModel(true)}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontSize: 18,
<<<<<<< HEAD
              // fontFamily: "medium",
=======
              fontFamily: "medium",
>>>>>>> origin/master
            }}
          >
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={showModel}>
        <BookingModel
          hideModal={() => {
            setShowModel(false);
          }}
        />
      </Modal>
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
  messageBtn: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.LIGHT_ORANGE,
    borderRadius: 99,
    paddingBottom: 15,
    flex: 1,
  },
  bookingBtn: {
    backgroundColor: Colors.LIGHT_ORANGE,
    padding: 15,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    flex: 1,
  },
});
