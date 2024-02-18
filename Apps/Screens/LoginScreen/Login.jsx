import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/login.png')} 
      style={styles.LoginImage} />


      <View style={styles.subContainer}>

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
    borderRadius:15
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20
  }
})
