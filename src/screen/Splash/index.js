import React, {useEffect, useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {Logo} from '../../assets'
import colors from '../../assets/colors'
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({navigation}) => {
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      setTimeout(() => {
        navigation.replace("MainApp");
      }, 3000);
    }else{
        setTimeout(() => {
          navigation.replace("LoginRoute");
        }, 3000);
      }
  } catch (e) {
    console.log(e);
  }
};
useEffect(() => {
  getData();
}, []);

    return (
        <View style={styles.body}>
            <Image source={Logo} style={styles.logo}/>
            
        </View>
    )
}

export default Splash;

const styles =StyleSheet.create({
    body:{
        backgroundColor: colors.RED_MAIN,
        width:'100%',
        height:'100%',
    },
    logo:{
        width:'50%',
        height:'40%',
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:'45%', 
    },
})