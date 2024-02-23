import {StatusBar, StyleSheet, View} from 'react-native';
import Colors from './Apps/Utils/Colors';
import Login from "./Apps/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
    return (
        <ClerkProvider publishableKey='pk_test_ZnJlc2gtc3F1aXJyZWwtNTEuY2xlcmsuYWNjb3VudHMuZGV2JA'>
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
