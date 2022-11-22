import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../../assets/colors";
import { SimpleHeader } from "../../../component";
import { 
  MBankingDefaultIcon,
  VAccDefaultIcon,
  ATMDefaultIcon,
  MinimarketDefaultIcon,
  QrisDefaultIcon,
  ArrowGreyIcon, 
 } from "../../../assets";

const PaymentMethod = ({navigation}) => {

  return (
    <View>
      <SimpleHeader title="Top Up Saldo" onBack={()=>navigation.goBack()}/>
      <View style={s.body}>
        <Text style={s.title}>Pilih Metode Pembayaran</Text>
        <View style={s.container}>
          <TouchableOpacity style={s.card} onPress={()=>navigation.navigate('MobileBanking')}>
            <Image source={MBankingDefaultIcon} style={s.imgCard} />
            <Text style={s.textCard}>Mobile Banking</Text>
            <Image source={ArrowGreyIcon} style={s.imgCard} />
          </TouchableOpacity>
          <TouchableOpacity style={s.card}>
            <Image source={VAccDefaultIcon} style={s.imgCard} />
            <Text style={s.textCard}>Internet Banking</Text>
            <Image source={ArrowGreyIcon} style={s.imgCard} />
          </TouchableOpacity>
          <TouchableOpacity style={s.card}>
            <Image source={ATMDefaultIcon} style={s.imgCard} />
            <Text style={s.textCard}>ATM</Text>
            <Image source={ArrowGreyIcon} style={s.imgCard} />
          </TouchableOpacity>
          <TouchableOpacity style={s.card}>
            <Image source={MinimarketDefaultIcon} style={s.imgCard} />
            <Text style={s.textCard}>Minimarket</Text>
            <Image source={ArrowGreyIcon} style={s.imgCard} />
          </TouchableOpacity>
          <TouchableOpacity style={s.card}>
            <Image source={QrisDefaultIcon} style={s.imgCard} />
            <Text style={s.textCard}>QRIS</Text>
            <Image source={ArrowGreyIcon} style={s.imgCard} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default PaymentMethod;
const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "95%",
    elevation: 5,
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
    width: "100%",
    paddingHorizontal: "5%",
    marginTop: 15,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "100%",
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    elevation: 8,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    marginVertical: 7,
  },
  imgCard: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  textCard: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 15,
    width: "75%",
    marginTop: 5,
    marginLeft:'3%',
  },
 
});
