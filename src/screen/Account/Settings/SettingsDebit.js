import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SimpleHeader } from "../../../component";
import colors from '../../../assets/colors'
import { ArrowGreyIcon } from "../../../assets";

const SettingsDebit=({navigation})=>{
    return (
      <View style={s.body}>
        <SimpleHeader
          title="kartu debit / rekening baru"
          onBack={() => navigation.navigate("Settings")}
        />
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}> + tambah kartu baru</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}> + tambah rekening bank</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
      </View>
    );
}
export default SettingsDebit
const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 20,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  textCard: {
    fontFamily: "roboto",
    fontSize: 17,
    color: colors.GREY,
    width: "90%",
    textTransform:'capitalize',
  },
  iconCard: {
    width: 30,
    height: 30,
  },
});