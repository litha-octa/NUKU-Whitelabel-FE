import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native'
import {
  LeftArrowTail,
  LogoAuth,
  ByEmailIcon,
  ByFBIcon,
  ByGoogleIcon,
  ShowOff,
  ShowOn,
} from "../../assets";
import colors from '../../assets/colors'
import CheckBox from '@react-native-community/checkbox'

  const  Register = ({navigation})=>{
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false);
    const [ok,setOk] = useState(false)

    const desc= 'silahkan isi data dibawah ini dengan lengkap, dan jangan sampai terlewat ya'
    return (
      <View>
        <ScrollView>
          <View style={s.header}>
            <TouchableOpacity
              style={{ width: "15%" }}
              onPress={() => navigation.navigate('Auth')}
            >
              <Image source={LeftArrowTail} style={s.iconHeader} />
            </TouchableOpacity>
            <View style={s.midleHeader}></View>
            <View style={{ width: "25%" }}>
              <Image source={LogoAuth} style={s.logoHeader} />
            </View>
          </View>
          <View style={s.body}>
            <KeyboardAvoidingView>
              <Text style={s.title}>Daftar</Text>
              <Text style={s.desc}>{desc}</Text>
              <Text style={s.inputTitle}>Nama Lengkap</Text>
              <View style={s.input}>
                <TextInput placeholder="Contoh : Syahrul Ramdan" />
              </View>
              <Text style={s.inputTitle}>Nomor Handphone</Text>
              <View style={s.input}>
                <TextInput placeholder="Contoh : 081234567890" />
              </View>
              <Text style={s.inputTitle}>Password</Text>
              <View style={s.input}>
                <TextInput
                  placeholder="Yang Gampang Diingat ya"
                  secureTextEntry={showPass == false ? true : false}
                />
              </View>

              <Text style={s.inputTitle}>Ketik Ulang Password</Text>
              <View style={s.input}>
                <TextInput
                  placeholder="Ulangi yang sudah dibikin"
                  secureTextEntry={showPass2 == false ? true : false}
                />
              </View>
            </KeyboardAvoidingView>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: 60,
              }}
            >
              <View style={{ width: "20%" }}>
                <CheckBox value={ok} onValueChange={() => setOk(!ok)} />
              </View>
              <View
                style={{
                  width: "80%",
                  display: "flex",
                  flexWrap: "wrap-reverse",
                }}
              >
                <Text style={s.bottomText}>
                  Dengan mendaftar anda menyetujui
                </Text>
                <Text style={s.bottomText2}>Syarat dan Ketentuan</Text>
              </View>
            </View>
            <TouchableOpacity
              style={s.btn}
              onPress={() => navigation.navigate("MainApp")}
            >
              <Text style={s.btnText}>Daftar </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={s.fixedBottom}>
          <Text style={s.bottomText}>Sudah Punya Akun ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={s.bottomText2}>Masuk Sini</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  export default Register
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
    height: "80%",
    backgroundColor: colors.WHITE,
    paddingHorizontal: "3%",
    paddingTop: 10,
    paddingBottom:60,

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
    paddingTop: 10,
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
  fixedBottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent:'center',
    backgroundColor:colors.WHITE,
  },
  bottomText: {
    fontFamily: "roboto",
    fontWeight: "100",
    color: colors.BLACK,
    fontSize: 12,
    textAlign: "center",
  },
  bottomText2: {
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    fontSize: 12,
    textDecorationLine: "underline",
    textDecorationColor: colors.RED_MAIN,
    textAlign: "center",
  },
});
