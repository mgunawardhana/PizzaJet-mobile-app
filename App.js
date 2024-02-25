import { StatusBar, StyleSheet, Text, View } from "react-native";
import Colors from "./Apps/Utils/Colors";
import Login from "./Apps/Screens/LoginScreen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import TabNavigation from "./Apps/Navigations/TabNavigation";
import { useFonts } from "expo-font";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

export default function App() {
const [fontsLoaded, fontError] = useFonts({
  outfitRegular: require("./assets/fonts/Outfit-Regular.ttf"),
  outfitBold: require("./assets/fonts/Outfit-Bold.ttf"),
  outfitMedium: require("./assets/fonts/Outfit-Medium.ttf"),
});
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_ZnJlc2gtc3F1aXJyZWwtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <View style={styles.container}>
        {/* Signed in components */}
        {/* Signed out components */}
        <SignedOut>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>

          {/* <Login/> */}
        </SignedOut>

        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingTop: 20,
  },
});
