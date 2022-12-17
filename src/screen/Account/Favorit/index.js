import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import colors from "../../../assets/colors";
import { SimpleHeader, CardProduct } from "../../../component";

const Favorit =({navigation})=>{
    const count = 4;
    return (
      <View style={s.body}>
        <SimpleHeader title="Favorit saya" />
        <View style={s.header}>
          <Text style={s.itemCount}>{count} Barang</Text>
          <Text style={s.btnSett}>Atur</Text>
        </View>
      </View>
    );
}

export default Favorit

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: "5%",
    marginTop: 20,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  itemCount: {
    fontSize: 18,
    fontFamily: "roboto",
    fontWeight: "bold",
    width: "90%",
    color: colors.BLACK,
  },
  btnSett: {
    fontSize: 18,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    width: "10%",
  },
});