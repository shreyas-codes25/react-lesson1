import {Text,View,Image,StyleSheet, ImageBackground, Alert} from 'react-native'
import ici from '@/assets/images/coffee-splash.png';

import React from 'react'

function explore() {
  return (
    <View style={styles.view}>
      <ImageBackground
      source={ici}
      resizeMode='cover'
      style={styles.image}
      >
      <Text style={styles.text} onPress={test1}>Contact</Text>
      </ImageBackground>
    </View>
  )
}


 function test1(){
  Alert.alert("Explor","This is an explor tab");
}

const styles = StyleSheet.create({
  view:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  text:{
      color:'red'
      ,textAlign:'center',
      fontSize:50,  
      backgroundColor:'rgba(0,0,0,0.5)',

  },
  image:{
    justifyContent:'center',
    width:'100%',
    height:'100%',
    flex:1
  }

})
export default explore