import React, { useState } from "react";
import {View, Image ,Text, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors'
import { DefaultImgMerch, LEDIcon, LEDIconRed } from "../../assets";

const StoreInfo =(props)=>{
    const [isFollow, setFollow] = useState(false)
    return (
      <View style={s.body}>
        <Image source={props.img ? props.img : DefaultImgMerch} style={s.img} />
        <View style={{ width: "60%", marginLeft: "3%", marginTop: 20 }}>
          <TouchableOpacity onPress={props.onPress}>
            <Text style={s.storeName}>
              {props.namaToko ? props.namaToko : "Toko Eka Mandiri"}
            </Text>
          </TouchableOpacity>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image
              source={LEDIcon}
              style={
                props.status === "online" || props.status === "Online"
                  ? s.ledIcon
                  : { display: "none" }
              }
            />
            <Text
              style={
                props.status === "online" || props.status === "Online"
                  ? s.statusOn
                  : s.statusOff
              }
            >
              {props.status ? props.status : "Offline"}
            </Text>
            <Image
              source={LEDIconRed}
              style={
                props.status === "online" || props.status === "Online"
                  ? s.ledIcon
                  : { display: "none" }
              }
            />
            <Text style={s.location}>
              {props.location ? props.location : "Lokasi Toko"}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={isFollow == false ? s.btnOff : s.btnOn}
          onPress={() => {
            setFollow(!isFollow);
          }}
        >
          <Text style={isFollow == false ? s.textBtnOff : s.textBtnOn}>
            {isFollow === false ? "+ Follow" : "Followed"}
          </Text>
        </TouchableOpacity>
      </View>
    );
}
export default StoreInfo
const s = StyleSheet.create({
  body: {
    width: "100%",
    paddingHorizontal: "5%",
    borderTopColor: colors.PALE_GREY,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: colors.WHITE,
    height: 100,
    display: "flex",
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    marginVertical: 10,
    borderRadius: 60,
  },
  storeName: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.BLACK,
    textTransform: "capitalize",
  },
  statusOn: {
    color: colors.SUCCESS,
    fontFamily: "roboto",
    fontSize: 15,
    width: "30%",
    textTransform: "capitalize",
  },
  statusOff: {
    color: colors.GREY,
    fontFamily: "roboto",
    fontSize: 15,
    width: "30%",
    textTransform: "capitalize",
  },
  ledIcon: {
    width: 6,
    height: 6,
    marginHorizontal: 5,
    marginTop: 5,
  },
  location: {
    color: colors.RED_MAIN,
    fontFamily: "roboto",
    fontSize: 15,
    width: "45%",
    textTransform: "capitalize",
  },
  btnOff: {
    borderColor: colors.RED_MAIN,
    borderWidth: 2,
    height: 30,
    borderRadius: 5,
    marginTop: "5%",
  },
  textBtnOff: {
    color: colors.RED_MAIN,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 10,
  },
  btnOn: {
    borderColor: colors.GREY,
    borderWidth: 2,
    height: 30,
    borderRadius: 5,
    marginTop: "5%",
  },
  textBtnOn: {
    color: colors.GREY,
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
    marginHorizontal: 10,
  },
});