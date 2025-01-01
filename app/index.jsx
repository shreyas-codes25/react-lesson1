import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import ici from "../assets/images/iced-coffee.png";

import { Link } from "expo-router";
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ici} resizeMode="cover" style={styles.image}>
        <Text style={styles.text} onPress={test}>
          Coffee shop go to course resource and see the contact us page and learn that 
        </Text>
        <Link href="/contact" asChild style={styles.link}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </Pressable>
        </Link>
        <Link href="/menu" asChild style={styles.link}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Menu</Text>
          </Pressable>
        </Link>
        
      </ImageBackground>
    </View>
  );
};

function test() {
  Alert.alert("hello", "this is a test", [{ text: "okkkiiiieee" }]);
}
export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    marginBottom: 4,
  },
  link: {
    color: "cyan",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    marginHorizontal:'auto',
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flex: 1,
    alignContent: "center",
    resizeMode: "cover",
  },
  button:{
    width:200,
    justifyContent:"center",
    height:60,
    margin:10,
    borderRadius:20,
    backgroundColor:"rgba(0,0,0,0.75)"
  },
  buttonText: {
    color: "cyan",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    
    marginHorizontal:'auto',
    padding: 4,
  },
});



//https://github.com/gitdagray/react-native-course/blob/lesson-4/MyApp/app/menu.jsx
//https://www.youtube.com/watch?v=WDunoPNBxKA