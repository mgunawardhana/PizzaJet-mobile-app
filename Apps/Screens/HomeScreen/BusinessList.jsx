import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function BusinessList() {
  const [businesList, setBusinesses] = useState([]);

  useEffect(() => {
    getBusinesses();
  }, []);

  const getBusinesses = () => {
    // get businesses from api
    GlobalApi.getBusiness().then((res) => {
      setBusinesses(res.businesses);
    });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Latest Businesses"} isViewAll={true} />
      <FlatList
        data={businesList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
