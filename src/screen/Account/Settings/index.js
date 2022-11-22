import React from "react";
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import { SimpleHeader } from "../../../component";
import colors from '../../../assets/colors'
import { ArrowGreyIcon } from "../../../assets";

const Settings = ({navigation}) =>{
    return (
      <View style={s.body}>
        <SimpleHeader
          title="pengaturan"
          onBack={() => navigation.navigate("Account")}
        />
        <TouchableOpacity
          style={s.card}
          onPress={() => navigation.navigate("SettingsPrivasi")}
        >
          <Text style={s.textCard}>Privasi & Keamanan</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.card}
          onPress={() => navigation.navigate("SettingsDebit")}
        >
          <Text style={s.textCard}>Kartu Debit / Rekening Bank</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.card}
          onPress={() => navigation.navigate("SettingsNotif")}
        >
          <Text style={s.textCard}>Notifikasi</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={s.card}
          onPress={() => navigation.navigate("SettingsBantuan")}
        >
          <Text style={s.textCard}>Pusat Bantuan</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}>Nilai Kami !</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}>Informasi Aplikasi</Text>
          <Image style={s.iconCard} source={ArrowGreyIcon} />
        </TouchableOpacity>
      </View>
    );
}
export default Settings

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  card: {
    width: "90%",
    marginHorizontal:'5%',
    paddingVertical:20,
    borderBottomColor:colors.PALE_GREY,
    borderBottomWidth:2,
    display:'flex',
    flexDirection:'row',
    marginVertical:10,

  },
  textCard:{
    fontFamily:'roboto',
    fontSize:17,
    color:colors.GREY,
    width :'90%',
  },
  iconCard:{
    width :30,
    height:30,
  }
});