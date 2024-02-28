import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "react-native";

export default function BusinessDetailsScreen() {
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);

  useEffect(() => {
    // param && setBusiness(param.business);
  }, []);

  return (
    <View>
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: "100%", height: 300 }}
      />
    </View>
  );
}
