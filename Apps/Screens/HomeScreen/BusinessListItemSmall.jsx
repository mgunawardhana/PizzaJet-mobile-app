import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

export default function BusinessListItemSmall({ business }) {
  return (
      <View style={styles.container}>
          <Image source={{ uri: business.images[0].url }} style={styles.image} />

          <View style={styles.infoContainer}>
              <Text style={{ fontSize: 17,
                  // fontFamily: "medium"
              }}>
                  {business?.name}
              </Text>
              <Text style={{ fontSize: 13,
                  // fontFamily: "outfit"
              }}>
                  {business?.contactPerson}
              </Text>
              <Text
                  style={{
                      fontSize: 10,
                      // fontFamily: "outfit",
                      padding: 3,
                      backgroundColor: Colors.PRIMARY,
                      borderRadius: 3,
                      alignSelf: "flex-start",
                      paddingHorizontal: 7,
                  }}
              >
                  {business?.category.name}
              </Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
  },
  infoContainer: {
    padding:0,
    display: "flex",
    gap: 5,
  },
  image: {
    width: 140,
    height: 60,
    borderRadius: 10,
  },
});
