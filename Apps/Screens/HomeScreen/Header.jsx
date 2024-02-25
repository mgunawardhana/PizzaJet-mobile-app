import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../../Utils/Colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

/**
 * `Header` is a functional component that renders the header of the application.
 * It uses the `useUser` hook from `@clerk/clerk-expo` to get the current user and their loading state.
 * The header consists of a profile section and a search bar section.
 *
 * @example
 * // To use this component in an application:
 * // import Header from './Header';
 * // ...
 * // <Header />
 *
 * @returns {JSX.Element} The header component.
 */
export default function Header() {
  /**
   * `user` and `isLoading` are the current user and their loading state, respectively.
   * They are obtained using the `useUser` hook from `@clerk/clerk-expo`.
   */
  const { user, isLoading } = useUser();

  /**
   * The `console.log` statement is used to log the current user to the console.
   * This can be useful for debugging purposes.
   */
  console.log(user);

  return (
    /**
     * The `View` component is used as a container for the header.
     * It has a style of `styles.container`, which sets its padding, background color, and border radius.
     */
    <View style={styles.container}>
      {/* profile section */}

      {/*The profile section consists of a `View` component with a style of `styles.profileMainContainer`.*/}
      {/*Inside this `View`, there is another `View` with a style of `styles.profileContainer`, which contains an `Image` and two `Text` components.*/}
      {/*The `Image` component displays the user's profile image, and the `Text` components display a welcome message and the user's name.*/}
      {/*There is also an `Ionicons` component, which displays a bookmark icon.*/}

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
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              Maneesha Gunawardhana
            </Text>
          </View>
        </View>
        <Ionicons name="bookmark" size={27} color="white" />
      </View>
      {/* search bar section */}

      {/*The search bar section consists of a `View` component with a style of `styles.searchBarContainer`.*/}
      {/*Inside this `View`, there is a `TextInput` component and a `FontAwesome` component.*/}
      {/*The `TextInput` component is used for the user to enter their search query, and the `FontAwesome` component displays a search icon.*/}

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
    fontFamily: "outfit",
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
