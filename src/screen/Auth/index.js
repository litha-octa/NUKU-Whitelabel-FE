import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, ScrollView} from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import colors from '../../assets/colors'
import {Splash_1,
Splash_2,
Splash_3,
Splash_4,} from '../../assets'

const Auth = ({navigation}) =>{
   img = [Splash_1, Splash_2, Splash_3, Splash_4];
   return (
     <View>
       <View style={s.body}>
         <ScrollView>
           <Text style={s.title}>Selamat Datang</Text>
           <Text style={s.title2}>Di NUKU</Text>
           <SliderBox
             images={img}
             ImageComponentStyle={{
               resizeMode: "contain",
               width: "90%",
               height: 240,
               marginTop: "20%",
             }}
             autoplay
             circleLoop
           />
           <Text style={s.desc}>
             Aplikasi lokal untuk para UMKM dan untuk kebutuhan pembelian kamu
             di daerah
           </Text>
         </ScrollView>
       </View>
       <View style={s.section}>
         <TouchableOpacity style={s.btn1} onPress={() =>navigation.navigate("Register")}>
           <Text style={s.textBtn1}>Belum Punya Akun? Daftar dulu sini</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={s.btn2}
           onPress={() =>navigation.navigate("Login")}
         >
           <Text style={s.textBtn2}>sudah punya akun</Text>
         </TouchableOpacity>
         <Text style={s.sk}>Dengan mendaftar anda menyetujui</Text>
         <Text style={s.sk2}>Syarat dan Ketentuan</Text>
       </View>
     </View>
   );
}
export default Auth

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.WHITE ,
  },
  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 45,
    textAlign: "center",
    width: "100%",
    color: colors.BLACK,
    marginTop: "15%",
  },
  title2: {
    fontFamily: "roboto",
    fontSize: 20,
    textAlign: "center",
    width: "100%",
    color: colors.BLACK,
    marginTop: 5,
  },
  btn1: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colors.white,
    borderColor: colors.RED_MAIN,
    borderWidth: 3,
    borderRadius: 13,
    padding: 10,
  },
  btn2: {
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: colors.RED_MAIN,
    borderRadius: 10,
    marginTop: 5,
    padding: 10,
  },
  textBtn1: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.RED_MAIN,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  textBtn2: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.WHITE,
    width: "100%",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  desc: {
    width: "80%",
    marginHorizontal: "10%",
    textAlign: "center",
    color: colors.BLACK,
    fontSize: 14,
    fontFamily: "roboto",
    marginTop: 10,
  },
  sk: {
    width: "100%",
    textAlign: "center",
    color: colors.BLACK,
    fontFamily: "roboto",
    fontSize: 13,
    marginTop: 5,
  },
  sk2: {
    width: "100%",
    textAlign: "center",
    color: colors.RED_MAIN,
    fontFamily: "roboto",
    fontSize: 13,
    textDecorationLine: "underline",
    textDecorationColor: colors.RED_MAIN,
  },
  section: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 135,
  },
});