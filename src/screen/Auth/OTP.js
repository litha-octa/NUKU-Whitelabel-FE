import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import {
  LogoAuth,
  LeftArrowTail,
 
} from "../../assets";
import colors from "../../assets/colors";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../host";

const OTP = ({ navigation, route }) => {
    const [byEmail, setByEmail] = useState(false);
    const [otp, setOtp] = useState()
  const desc =
    "tunggu sebentar untuk menerima kode otp lewat sms telepon anda, ingat jangan berikan kode tersebut ke orang lain.";

 
  return (
    <View style={{ backgroundColor: colors.WHITE }}>
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
        <Text style={s.title}>Verifikasi OTP</Text>
        <Text style={s.desc}>{desc}</Text>
        <View style={s.input}>
          <TextInput 
          style={{fontSize:20, textAlign:'center'}}
          keyboardType='numeric'
          value={otp}
          onChangeText={(text)=>setOtp(text)}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            marginTop: 15,
          }}
        >
          <Text style={s.bottomText}>Tidak Menerima Kode OTP ? </Text>
          <TouchableOpacity>
            <Text style={s.bottomText2}>Kirim Ulang</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={s.btn} onPress={() => navigation.navigate('MainApp')}>
          <Text style={s.btnText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OTP;
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
    height: "89%",
    backgroundColor: colors.WHITE,
    paddingHorizontal: "3%",
    paddingTop: 10,
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
    borderBottomColor: colors.GREY,
    borderBottomWidth: 2,
    marginVertical: "10%",
    width: "60%",
    marginHorizontal: "20%",
  },
  btn: {
    position: "absolute",
    width: "100%",
    alignSelf: "center",
    bottom: 0,
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
