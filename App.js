import {Image, StyleSheet, Text, View} from 'react-native';
import Login from './Apps/Screens/LoginScreen/Login';
import Colors from './Apps/Utils/Colors';

export default function App() {
  return (
    <View style={{alignItems:'center'}}>
     <Image source={require('./assets/images/login.png')} style={styles.LoginImage}/>
      <View style={styles.subContainer}>
        <Text>
          Let's get started
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LoginImage:{
    width:230,
    height:450,
    marginTop: 70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius:15,
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20,
  },
});
