import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import { useState } from "react";

export default function BusinessAboutMe({ business }) {
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    business && (
      <View>
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
    )
  );
}
