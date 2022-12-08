import React, {useEffect, useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, Alert} from 'react-native'
import {
  LeftArrowTail,
  LogoAuth,
  ByEmailIcon,
  ByFBIcon,
  ByGoogleIcon,
  ByPhoneIcon,
  ShowOff,
  ShowOn,

} from "../../assets";
import colors from '../../assets/colors'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL, url } from "../../service";




  const  Login =({navigation, route})=>{
    const [token, setToken] = useState();
    const [byEmail, setByEmail] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [password, setPassword] = useState()
    const desc= 'selamat datang kembali pengguna tercinta, silahkan isi nomor handphone yang sudah terdaftar di bawah sini'


    const loginHandler = () =>{
if(!email || !password){
  Alert.alert('oops!', 'Lengkapi Email dan Password')
}else{         axios({
           method: "POST",
           url: `${BASE_URL}${url.auth.login}`,
           headers: {
             "Access-Control-Allow-Origin": "*",
           },
           data: {
             emailOrPhone: phone ? phone : email,
             password: password,
           },
         })
           .then((res) => {
             if (
               !res.data.data.token ||
               res.data.status !== 200 ||
               res.data.message !== "success"
             ) {
               alert("LOGIN FAILED");
             } else {
              setToken(res.data.data.token);
               const storeData = async() => {
                 try {
                  await AsyncStorage.setItem("token", res.data.data.token)
                 } catch (e) {
                   console.log(e);
                 }
               };
               storeData()
              const getData = async () => {
                try {
                  const value = await AsyncStorage.getItem("token");
                  if (value !== null) {
                    navigation.navigate('MainApp')
                  }
                } catch (e) {
                  // error reading value
                }
              };
                getData()

           }
          })
           .catch((err) => {
          //    console.log(err);
              if (
                err.toString() ===
                "AxiosError: Request failed with status code 401"
              ){
                Alert.alert("Opps!", "Email atau Password Salah");
              }else if(err.toString() ===
                "AxiosError: Request failed with status code 500"){
                  Alert.alert('Opps!', 'Ada Masalah Dengan Server Kami')
                }
           });
    }
  }
    
    return (
      <View>
        <ScrollView>
          <View style={s.header}>
            <TouchableOpacity
              style={{ width: "15%" }}
              onPress={() => navigation.navigate("Auth")}
            >
              <Image source={LeftArrowTail} style={s.iconHeader} />
            </TouchableOpacity>
            <View style={s.midleHeader}></View>
            <View style={{ width: "25%" }}>
              <Image source={LogoAuth} style={s.logoHeader} />
            </View>
          </View>
          <View style={s.body}>
            <Text style={s.title}>Masuk</Text>
            <Text style={s.desc}>{byEmail ? "Dengan Email" : ""}</Text>
            <Text style={s.desc}>{desc}</Text>
            <Text style={s.inputTitle}>
              {byEmail ? "Email" : "Nomor Handphone"}
            </Text>
            <View style={s.input}>
              <TextInput
                value={byEmail ? email : phone}
                autoCapitalize="none"
                onChangeText={
                  byEmail ? (text) => setEmail(text) : (text) => setPhone(text)
                }
                keyboardType={byEmail ? "email-address" : "numeric"}
                placeholder={
                  byEmail
                    ? "contoh : Syahrul123@gmail.com"
                    : "Contoh : 081234567890"
                }
              />
            </View>
            <Text style={byEmail ? s.inputTitle: {display:'none'}}>Password</Text>
            <View style={byEmail ? s.input : {display:'none'}}>
              <TextInput
                placeholder="Masukkan Password yang Sudah dibuat"
                secureTextEntry={showPass == false ? true : false}
                style={{ width: "90%" }}
                value={password}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
                onPress={() => setShowPass(!showPass)}
                style={{ width: "10%" }}
              >
                <Image
                  source={showPass ? ShowOff: ShowOn }
                  style={{ width: 30, height: 30, marginVertical: 10 }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={s.btn} onPress={() =>{byEmail? loginHandler() : navigation.navigate('OTP')} }>
              <Text style={s.btnText}>Masuk</Text>
            </TouchableOpacity>
            <View style={s.bottomContainer}>
              <Text style={s.titleContainer}>Metode Lain</Text>
              <View style={s.underline}>
                <Text style={s.descContainer}>
                  masuk melalui metode lainnya, klik salah satu di bawah ini
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  paddingHorizontal: "25%",
                  justifyContent: "space-between",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity onPress={() => {setByEmail(!byEmail); setPassword('')}}>
                  <Image
                    source={byEmail ? ByPhoneIcon : ByEmailIcon}
                    style={s.loginMethod}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={ByGoogleIcon} style={s.loginMethod} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={ByFBIcon} style={s.loginMethod} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={s.fixedBottom}>
          <Text style={s.bottomText}>Belum Punya Akun ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={s.bottomText2}>Sini daftar dulu</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  export default Login
const s = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.WHITE,
    paddingHorizontal: "3%",
    height: 70,
    paddingVertical: 5,
  },
  iconHeader: {
    width: 30,
    height: 30,
    marginVertical: 15,
  },
  midleHeader: {
    width: "60%",
  },
  logoHeader: {
    width: 100,
    height: 50,
  },
  body: {
    width: "100%",
    height:'100%',
    backgroundColor: colors.WHITE,
    paddingHorizontal: "3%",
    paddingTop: 10,
    paddingBottom:110,
  },
  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 30,
    color: colors.BLACK,
  },
  desc: {
    fontFamily: "roboto",
    fontSize: 12,
    color: colors.BLACK,
    marginBottom: 20,
  },
  input: {
    backgroundColor: colors.PALE_GREY,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  inputTitle: {
    color: colors.GREY,
    fontFamily: "roboto",
    fontSize: 13,
    fontWeight: "100",
  },
  btn: {
    backgroundColor: colors.RED_MAIN,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  btnText: {
    color: colors.WHITE,
    fontFamily: "roboto",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  bottomContainer: {
    marginTop: 30,
  },
  titleContainer: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.GREY,
    textAlign: "center",
    fontSize: 20,
  },
  descContainer: {
    fontFamily: "roboto",
    fontWeight: "100",
    color: colors.GREY,
    textAlign: "center",
    fontSize: 12,
  },
  underline: {
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  loginMethod: {
    width: 55,
    height: 55,
  },
  fixedBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.WHITE,
  },
  bottomText: {
    fontFamily: "roboto",
    fontWeight: "100",
    color: colors.BLACK,
    textAlign: "center",
    fontSize: 12,
    textAlign: "center",
  },
  bottomText2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    textAlign: "center",
    fontSize: 12,
    textDecorationLine: "underline",
    textDecorationColor: colors.RED_MAIN,
    textAlign: "center",
  },
});
