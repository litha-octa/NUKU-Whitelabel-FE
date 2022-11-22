import React, {useState} from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity, ScrollView} from 'react-native'
import { SimpleHeader } from "../../../component";
import colors from "../../../assets/colors";
import {
  BtnSalinCode,
  OneRounded,
  TwoRounded,
  ThreeRounded,
  FourRounded,
  FiveRounded,
  SixRounded,
  SevenRounded,
  EightRounded,
  NineRounded,
} from "../../../assets";
import Clipboard from "@react-native-clipboard/clipboard";


const StepMobileBanking =({navigation, route})=>{
    const {bank} = route.params;
    const [noVA, setNoVA] = useState('7001 0838101567218')
     const [copiedText, setCopiedText] = useState("");

     const copyToClipboard = () => {
       Clipboard.setString(noVA);
     };

     const fetchCopiedText = async () => {
       const text = await Clipboard.getString();
       setCopiedText(text);
     };
    return (
      <View>
        <SimpleHeader title="Top Up Saldo" onBack={() => navigation.goBack()} />
        <View style={s.body}>
          <ScrollView>
            <Text style={s.title}>{bank}</Text>
            <View style={s.container}>
              <View style={s.containerTitle}>
                <Text style={s.textTitle}>Virtual Account No.</Text>
              </View>
              <Text
                style={s.va}
                onLongPress={copyToClipboard}
              >
                {noVA}
              </Text>
            </View>
            <TouchableOpacity onPress={() => copyToClipboard()}>
              <Image source={BtnSalinCode} style={s.btnSalin} />
            </TouchableOpacity>
            <View style={s.container2}>
              <Text style={s.stepTitle}>Cara isi Saldo top up :</Text>
              <Text style={s.descStep}>
                Biaya Admin Rp.1000, Minimum isi Saldo Rp. 10.000
              </Text>
              <View style={s.stepCard}>
                <Image source={OneRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>Login ke m-BCA</Text>
              </View>
              <View style={s.stepCard}>
                <Image source={TwoRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>
                  Pilih M-TRANSFER>TRANSFER BCA VIRTUAL ACCOUNT
                </Text>
              </View>
              <View style={s.stepCard}>
                <Image source={ThreeRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>
                  Masukkan nomor Virtual Account diatas
                </Text>
              </View>
              <View style={s.stepCard}>
                <Image source={FourRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>
                  Masukkan jumlah saldo yang ingin di isi
                </Text>
              </View>
              <View style={s.stepCard}>
                <Image source={FiveRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>Masukkan PIN m-BCA Kamu</Text>
              </View>
              <View style={s.stepCard}>
                <Image source={SixRounded} style={s.stepIcon} />
                <Text style={s.textStepCard}>
                  Ikuti petunjuk selanjutnya untuk menyelesaikan proses
                  pengisian saldo
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={s.bottomBtn} onPress={()=>navigation.navigate('TopUpStatus')}>
          <Text style={s.bottomBtnText}>Saya Sudah Top Up</Text>
        </TouchableOpacity>
      </View>
    );
}
export default StepMobileBanking
const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "95%",
    elevation: 5,
    paddingBottom:90,
    marginBottom:0,
  },
  title: {
    color: colors.RED_MAIN,
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 4,
    width: "100%",
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
  },
  container: {
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 10,
    elevation: 8,
    backgroundColor: colors.WHITE,
    marginTop: 20,
  },
  container2: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  containerTitle: {
    width: "100%",
    backgroundColor: colors.RED_MAIN,
    paddingVertical: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  textTitle: {
    color: colors.WHITE,
    fontFamily: "roboto",
    textAlign: "center",
    fontSize: 15,
  },
  va: {
    color: colors.BLACK,
    fontFamily: "roboto",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    marginVertical: 20,
  },
  stepTitle: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.BLACK,
    marginTop: 10,
  },
  descStep: {
    fontFamily: "roboto",
    fontSize: 13,
    color: colors.GREY,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
    paddingBottom: 3,
  },
  stepCard: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  stepIcon: {
    width: 30,
    height: 30,
  },
  textStepCard: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.GREY,
    fontWeight: "lighter",
    marginTop: 10,
    marginLeft: 10,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
    width: "89%",
    flexWrap:'wrap',
  },
  bottomBtn: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 30,
    height: 40,
    backgroundColor: colors.RED_MAIN,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  bottomBtnText: {
    textAlign: "center",
    fontSize: 15,
    width: "100%",
    fontWeight: "bold",
    fontFamily: "roboto",
    color: colors.WHITE,
  },
  btnSalin:{
    width:'20%',
    height:30,
    resizeMode:'contain',
    marginLeft:'70%',
    marginTop:20,
}
});