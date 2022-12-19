import React from "react";
import {View,Text,Image, StyleSheet, TouchableOpacity} from 'react-native'
import colors from "../../assets/colors";
import { IconSaldoRed, TopUpIcon, RiwayatIcon, Lainnya } from "../../assets";

const SaldoInfo = (props) => {
return (
  <View style={styles.containerSaldo}>
    <View style={styles.saldoInfoSection}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Image source={IconSaldoRed} style={styles.iconSaldomerah} />
        <Text style={styles.saldoInfoText}>Saldo Kamu</Text>
      </View>
      <Text style={styles.saldoInfoTextBold}>{props.saldo}</Text>
    </View>
    <View style={styles.containerIcon}>
      <TouchableOpacity onPress={props.onTopUp}>
        <Image source={TopUpIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onHistory}>
        <Image source={RiwayatIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onLainnya}>
        <Image source={Lainnya} style={styles.icon} />
      </TouchableOpacity>
    </View>
  </View>
);
}
export default SaldoInfo

const styles = StyleSheet.create({
  containerSaldo: {
    backgroundColor: colors.RED_MAIN,
    width: "100%",
    height: 80,
    borderRadius: 15,
    padding: 7,
    display: "flex",
    flexDirection: "row",
  },
  saldoInfoSection: {
    backgroundColor: colors.PINK,
    width: "55%",
    height: "100%",
    padding: 10,
    borderRadius: 15,
  },
  iconSaldomerah: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginRight: 7,
  },
  saldoInfoText: {
    color: colors.BLACK,
    fontFamily: "roboto",
    fontSize: 12,
  },
  saldoInfoTextBold: {
    color: colors.BLACK,
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    width: "100%",
  },
  containerIcon: {
    marginHorizontal: 15,
    marginTop: 10,
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    width:'40%',
    paddingTop:5,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode:'contain',
  },
});