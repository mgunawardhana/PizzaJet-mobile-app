import { FlatList, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { useState } from "react";
import { StyleSheet } from "react-native";
import Heading from "../../Components/Heading";

export default function Slider() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    getSlider();
  }, []);

  const getSlider = () => {
    GlobalApi.getSlider()
      .then((response) => {
        console.log(response.sliders);
        setSlider(response?.sliders);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <View>
      <Heading text={"Offers For You"} />
      <FlatList
        data={slider}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20 }}>
            <Image
              source={{ uri: item?.image?.url }}
              style={styles.sliderImage}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderImage: {
    width: 270,
    height: 150,
    borderRadius: 20,
    objectFit: "contain",
  },
});
