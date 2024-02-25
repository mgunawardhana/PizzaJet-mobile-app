import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function Heading({ text, isViewAll = false }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll ? <Text style={{ color: "blue" }}>View All</Text> : null}
      <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
        {item?.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
});
