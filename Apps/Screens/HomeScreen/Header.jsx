import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Image, Text, View, StyleSheet, TextInput } from "react-native";
import Colors from "../../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  const { user, isLoading } = useUser();

  console.log(user);

  return (
    <View style={styles.container}>
      {/* profile section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
          <View>
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 18,
                paddingEnd: 10,
              }}
            >
              Welcome,{" "}
            </Text>
            <Text
              style={{ color: "#ffffff", fontWeight: "bold", fontSize: 16 }}
            >
              Maneesha Gunawardhana
            </Text>
          </View>
        </View>
        <Ionicons name="bookmark" size={27} color="white" />
      </View>
      {/* search bar section */}
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Search here" style={styles.textInput} />
        <FontAwesome
          name="search"
          size={24}
          style={styles.searchButton}
          color={Colors.PRIMARY}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
  },
  searchBarContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  searchButton: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
// 01:10:16
