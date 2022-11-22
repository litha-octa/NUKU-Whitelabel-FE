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
  BCADefaultIcon,
  BJBDefaultIcon,
  BNIDefaultIcon,
  BRIDefaultIcon,
  MandiriDefaultIcon,
  ArrowGreyIcon,
} from "../../../assets";

const MobileBanking = ({ navigation }) => {

const listBank = [
  {
    img: BCADefaultIcon,
    label: "BCA",
  },
  {
    img: MandiriDefaultIcon,
    label: "Mandiri",
  },
  {
    img: BRIDefaultIcon,
    label: "BRI",
  },
  {
    img: BJBDefaultIcon,
    label: "BJB",
  },
  {
    img: BNIDefaultIcon,
    label: "BNI",
  },
]; 

  return (
    <View>
      <SimpleHeader title="Top Up Saldo" onBack={() => navigation.goBack()} />
      <View style={s.body}>
        <Text style={s.title}>Mobile Banking</Text>
        <View style={s.container}>
            {listBank.map((e, index)=>{
                return (
                  <TouchableOpacity style={s.card} key={index} onPress={()=>navigation.navigate('StepMobileBanking', {bank:e.label})}>
                    <Image source={e.img} style={s.imgCard} />
                    <Text style={s.textCard}>{e.label}</Text>
                    <Image source={ArrowGreyIcon} style={s.imgCard} />
                  </TouchableOpacity>
                );
            })}
          
        </View>
      </View>
    </View>
  );
};
export default MobileBanking;
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
    marginLeft: "3%",
  },
 
});
