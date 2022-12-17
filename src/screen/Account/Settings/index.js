import React from "react";
import {View,Text, StyleSheet, TouchableOpacity,Image} from 'react-native'
import { SimpleHeader } from "../../../component";
import colors from '../../../assets/colors'
import { ArrowGreyIcon } from "../../../assets";

const Settings = ({navigation}) =>{

  const Card = (props)=>{
    return (
      <TouchableOpacity
        style={s.card}
        onPress={props.onPress}
      >
        <Text style={s.textCard}>{props.title}</Text>
        <Image style={s.iconCard} source={ArrowGreyIcon} />
      </TouchableOpacity>
    );
  }
    return (
      <View style={s.body}>
        <SimpleHeader title="pengaturan" onBack={() => navigation.goBack()} />
        <Card
          onPress={() => navigation.navigate("SettingsPrivasi")}
          title="Privasi & Keamanan"
        />
        <Card
          onPress={() => navigation.navigate("SettingsDebit")}
          title="Kartu Debit / Rekening Bank"
        />
        <Card
          onPress={() => navigation.navigate("SettingsNotif")}
          title="Notifikasi"
        />
        <Card
          onPress={() => navigation.navigate("SettingsBantuan")}
          title="Pusat Bantuan"
        />
        <Card
          title="Nilai Kami !"
          // onPress={()=>{}}
        />
        <Card
          title="Informasi Aplikasi"
          // onPress={()=>{}}
        />
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