import {StatusBar, StyleSheet, View} from 'react-native';
import Colors from './Apps/Utils/Colors';
import Login from "./Apps/Screens/LoginScreen/Login";

export default function App() {
    return (

        <View style={styles.container}>
            <Login/>
            <StatusBar style="auto"/>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: Colors.WHITE, paddingTop: 20
    }
});
