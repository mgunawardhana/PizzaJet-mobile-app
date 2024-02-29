import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  /**
   * `onPress` is a callback function that is used to start the OAuth flow when the button is pressed.
   * It uses the `useCallback` hook from React to memoize the function and prevent unnecessary re-renders.
   * Inside the function, it tries to start the OAuth flow using the `startOAuthFlow` function from `@clerk/clerk-expo`.
   * If a session is created, it sets the active session using the `setActive` function.
   * If no session is created, it can use the `signIn` or `signUp` functions for next steps such as MFA.
   * If an error occurs during the process, it logs the error to the console.
   *
   * @example
   * // To use this callback in a component:
   * // const onPress = React.useCallback(async () => {
   * //   ...
   * // }, []);
   * // ...
   * // <TouchableOpacity onPress={onPress}>...</TouchableOpacity>
   *
   * @returns {void}
   */
  const onPress = React.useCallback(async () => {
    try {
      /**
       * `createdSessionId`, `signIn`, `signUp`, and `setActive` are the result of the `startOAuthFlow` function.
       * `createdSessionId` is the ID of the created session, if any.
       * `signIn` and `signUp` are functions that can be used for next steps such as MFA.
       * `setActive` is a function that can be used to set the active session.
       */
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      /**
       * If a session is created, it sets the active session using the `setActive` function.
       */
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      } else {
        /**
         * If no session is created, it can use the `signIn` or `signUp` functions for next steps such as MFA.
         */
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      /**
       * If an error occurs during the process, it logs the error to the console.
       */
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/chiken.png")}
        style={styles.LoginImage}
      />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontSize: 27,
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          Let's find
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Delicious food{" "}
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 17,
            color: Colors.WHITE,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          {" "}
          Best app to find services near you which one is the best.
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 17,
              color: Colors.LIGHT_ORANGE,
            }}
          >
            Let' s Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginImage: {
    width: 240,
    height: 470,
    marginTop: 40,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  subContainer: {
    width: "100%",
    backgroundColor: Colors.LIGHT_ORANGE,
    height: "75%",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop: 30,
  },
});
