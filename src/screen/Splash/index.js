import React, {useEffect} from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {Logo} from '../../assets'
import colors from '../../assets/colors'

const Splash = ({navigation}) => {

useEffect(() => {
        setTimeout( () => {
            navigation.replace('LoginRoute');
        }, 3000)
    }, [navigation]);

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
        width:'30%',
        height:'30%',
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:'55%', 
    },
})