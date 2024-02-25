import { View, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function BusinessListItem({ business }) {
  return (
    <View>
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
