import {View, Image, StyleSheet, Text} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
//28:30
export default function Login() {
  return (
      <View style={{alignItems: 'center'}}>
        <Image source={require('./../../../assets/images/login.png')} style={styles.LoginImage}/>
        <View style={styles.subContainer}>
          <Text style={{
            fontSize: 27, color: Colors.WHITE, textAlign: 'center',
          }}>
            Let's find
            <Text style={{fontWeight: 'bold'}}> Professional Cleaning and repair service</Text>
          </Text>

          <Text style={{
            fontSize: 17, color: Colors.WHITE, textAlign: 'center', marginTop: 20,
          }}> Best app to find services near you which delivery you a professorial service.</Text>

          <View style={styles.button}>
            <Text style=
            {{textAlign:'center',
            fontSize: 17,
            color:Colors.PRIMARY
          }}
          >Let' s Get Started</Text>
          </View>

        </View>
      </View>
  )
}

// rns
const styles = StyleSheet.create({
  LoginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15
  }, subContainer: {
    width: '100%',
    backgroundColor: Colors.PRIMARY,
    height: '75%',
    marginTop:-20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  button:{
    padding:15,
    backgroundColor:Colors.WHITE,
    borderRadius:99,
    marginTop:30,
  }
});
