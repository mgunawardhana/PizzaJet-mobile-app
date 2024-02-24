import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from 'react'
import Colors from '../../Utils/Colors'

import {useOAuth} from "@clerk/clerk-expo";
import {useWarmUpBrowser} from '../../hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";


WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const {startOAuthFlow} = useOAuth({strategy: "oauth_google"});

    const onPress = React.useCallback(async () => {
        try {
            const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow();

            if (createdSessionId) {
                await setActive({session: createdSessionId});
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (<View style={{alignItems: 'center'}}>
        <Image source={require('./../../../assets/images/girl.png')} style={styles.LoginImage}/>
        <View style={styles.subContainer}>
            <Text style={{
                fontSize: 27, color: Colors.WHITE, textAlign: 'center',
            }}>
                Let's find
                <Text style={{fontWeight: 'bold'}}> Professional Travel Guide </Text>
            </Text>

            <Text style={{
                fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20,
            }}> Best app to find services near you which one is the best guide.</Text>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style=
                          {{
                              textAlign: 'center', fontSize: 17, color: Colors.PRIMARY
                          }}
                >Let' s Get Started</Text>
            </TouchableOpacity>

        </View>
    </View>)
}

const styles = StyleSheet.create({
    LoginImage: {
        width: 240, height: 470, marginTop: 40, borderWidth: 4, borderColor: Colors.BLACK, borderRadius: 15
    }, subContainer: {
        width: '100%',
        backgroundColor: Colors.PRIMARY,
        height: '75%',
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
    }, button: {
        padding: 15, backgroundColor: Colors.WHITE, borderRadius: 99, marginTop: 30,
    }
});