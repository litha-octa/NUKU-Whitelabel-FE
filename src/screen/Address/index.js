import React from "react";
import { TouchableOpacity } from "react-native";
import {View,Text, StyleSheet} from 'react-native'
import colors from '../../assets/colors'
import {SimpleHeader} from '../../component'

const Address =({navigation})=>{
    return (
      <View style={s.body}>
        <SimpleHeader title="Alamat Saya" />
        <Text>ADDRESS PAGE HERE !</Text>
        <TouchableOpacity style={s.btnAddAddress}>
          <Text style={s.btnAddAddressText}>Tambah Alamat Baru</Text>
        </TouchableOpacity>
      </View>
    );
}
export default Address
const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "100%",
  },
  btnAddAddress: {
    backgroundColor: colors.BG_FAILED,
    borderRadius: 15,
    borderColor: colors.RED_MAIN,
    borderWidth: 2,
    padding: 15,
    width: "90%",
    alignSelf: "center",
  },
  btnAddAddressText:{
    fontFamily:'roboto',
    fontSize:18,
    fontWeight:'bold',
    color:colors.RED_MAIN,
    textAlign:'center',
  }
});