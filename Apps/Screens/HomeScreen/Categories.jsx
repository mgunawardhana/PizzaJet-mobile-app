import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useState } from "react";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { Image, StyleSheet } from "react-native";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    // API call to get categories
    GlobalApi.getCategories()
      .then((response) => {
        console.log(response.categories);
        setCategories(response?.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ marginTop: 10 }}>
      {/* <Text>Hello</Text>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ data }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: data?.ategories.icon?.url }}
                style={{ width: 40, height: 40 }}
              />
            </View>
          </View>
        )}
      ></FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroudColor: Colors.LIGHT_GREY,
    padding: 17,
    borderRadius: 99,
  },
});
