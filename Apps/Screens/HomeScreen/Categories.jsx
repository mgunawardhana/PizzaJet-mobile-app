import { View, Text } from "react-native";
import React, { useEffect } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { useState } from "react";
import Heading from "../../Components/Heading";
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
      <Heading text={"Categories"} isViewAll={true} />
    </View>
  );
}
