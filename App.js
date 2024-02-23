import {StatusBar, StyleSheet, View, Text} from 'react-native';
import Colors from './Apps/Utils/Colors';
import Login from "./Apps/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

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
      return;
    }
  },
};

export default function App() {
    return (
        <ClerkProvider
         tokenCache={tokenCache}
        publishableKey='pk_test_ZnJlc2gtc3F1aXJyZWwtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
        <View style={styles.container}>
            <Login/>

            {/* Signed in components */}
            <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>

        {/* Signed out components */}
        <SignedOut>
        <Text>You are Signed out</Text>
        </SignedOut>
            <StatusBar style="auto"/>
        </View>
        </ClerkProvider>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: Colors.WHITE, paddingTop: 20
    }
});
