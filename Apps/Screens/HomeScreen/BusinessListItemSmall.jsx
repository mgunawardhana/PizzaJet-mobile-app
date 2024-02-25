import { View, Text, Image } from "react-native";
import React from "react";

export default function BusinessListItemSmall({ business }) {
  return (
    <View>
      <Image
        source={{ uri: business.images[0].url }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
