import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { SimpleHeader } from "../../../component";
import colors from '../../../assets/colors'
import { HelpCSIcon, HelpEmailIcon, HelpPhoneIcon, ArrowGreyIcon } from "../../../assets";

const SettingsBantuan=({navigation})=>{
    return (
      <View>
        <ScrollView>
          <View style={s.body}>
            <SimpleHeader
              title="pusat bantuan"
              onBack={() => navigation.navigate("Settings")}
            />

            <View style={s.card}>
              <Text style={s.titleCard}>FAQ</Text>
            </View>
            <TouchableOpacity style={s.card}>
              <Text style={s.textCard}>
                Mengapa saya tidak bisa mendaftar dengan nomor telepon saya?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Text style={s.textCard}>
                bagaimana cara menghubingi customer service nuku ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Text style={s.textCard}>
                berapa lama saya akan menerima pesanan saya
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Text style={s.textCard}>
                apa yang harus saya lakukan jika mendapat peringatan login
                mencurigakan dari nuku ?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Text style={s.textCard}>
                bagaimana cara reset password akun nuku saya jika lupa password
                ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[s.body, s.margin]}>
            <View style={s.card}>
              <Text style={s.titleCard}>Hubungi Kami</Text>
            </View>
            <TouchableOpacity style={s.card}>
              <Image source={HelpCSIcon} style={s.iconHelp} />
              <Text style={s.textCard}>chat nuku sekarang</Text>
              <Image source={ArrowGreyIcon} style={{width :35,height:35,}}/>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Image source={HelpEmailIcon} style={s.iconHelp} />
              <View style={{ width: "100%" }}>
                <Text style={s.textCard}>email</Text>
                <Text style={s.textCardMini}>tulis pertanyaanmu sekarang</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Image source={HelpPhoneIcon} style={s.iconHelp} />
              <View style={{ width: "100%" }}>
                <Text style={s.textCard}>telepon</Text>
                <Text style={s.textCardMini}>082382837848</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
}
export default SettingsBantuan
const s = StyleSheet.create({
  margin: {
    marginTop: 10,
    paddingBottom: 10,
    marginBottom: 20,
  },
  body: {
    width: "100%",
    paddingBottom: 20,
    backgroundColor: colors.WHITE,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 10,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
  },
  textCard: {
    fontFamily: "roboto",
    fontSize: 13,
    color: colors.BLACK,
    width: "80%",
    textTransform: "capitalize",
  },
  textCardMini: {
    fontFamily: "roboto",
    fontSize: 10,
    color: colors.GREY,
    width: "80%",
    textTransform: "capitalize",
  },
  iconCard: {
    width: 30,
    height: 30,
  },
  titleCard: {
    fontFamily: "roboto",
    fontSize: 17,
    color: colors.BLACK,
    width: "90%",
    fontWeight: "bold",
    marginTop: 20,
  },
  iconHelp: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
});