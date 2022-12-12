import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../assets/colors";
import {RushLine, StarIcon} from '../../assets'

const CardMerchant =(props)=>{

    // PROPS LIST  : 
    // img
    // rate
    // merchantName
    // kategori
    // location
    // jarak


     const img =
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3k6vUpG2bDfVksN11KjPowCOVs5L0kxHwNw&usqp=CAU";
    return (
      <View style={s.body}>
        <View style={{ width: "35%" }}>
          <Image source={{ uri: img }} style={s.img} />
          <View style={s.rateContainer}>
            <Image source={StarIcon} />
            <Text style={s.rate}>{props.rate}</Text>
          </View>
        </View>
        <View style={{ width: "65%" }}>
          <Text style={s.merchantName}>{props.merchantName}</Text>
          <Text style={s.kategori}>{props.kategori}</Text>
          <Image source={RushLine} style={s.line} />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={s.location}>{props.location}</Text>
            <Text style={s.jarak}>{props.jarak}</Text>
          </View>
        </View>
      </View>
    );
}
export default CardMerchant;

const s = StyleSheet.create({
  body: {
    width: "90%",
    height: 150,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    elevation: 8,
    display: "flex",
    flexDirection: "row",
    padding: 15,
    marginVertical:10,
  },
  img: {
    width: "90%",
    height: "90%",
    borderRadius: 20,
  },
  merchantName: {
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.BLACK,
    textTransform: "capitalize",
    width: "100%",
  },
  kategori: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.BLACK,
    textTransform: "capitalize",
    width: "100%",
  },
  line: {
    marginVertical: 20,
  },
  location: {
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.BLACK,
    textTransform: "capitalize",
    width: "60%",
  },
  jarak: {
    fontFamily: "roboto",
    fontSize: 13,
    color: colors.BLACK,
    textTransform: "capitalize",
    width: "40%",
  },
  rate: {
    fontFamily: "roboto",
    fontSize: 13,
    fontWeight: "bold",
    color: colors.BLACK,
  },
  rateContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.WHITE,
    marginTop: -15,
    alignSelf: "center",
    width: 55,
    borderRadius: 15,
    padding: 2,
    elevation: 4,
  },
});