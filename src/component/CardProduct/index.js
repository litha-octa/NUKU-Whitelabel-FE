import React from "react";
import {  TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native'
import colors from "../../assets/colors";
import { LocationIcon } from "../../assets";

const CardProduct = (props) =>{
  // PROPS LIST : 
  // onPress,     ->> Saat card di Press
  //idCard,          ->> Key card list
  // img,         ->> Gambar Product
  // nameProduct, ->> Nama Product
  // price,       ->> Harga Product
  // location,    ->> Lokasi Toko yang Menjual produk
  // rate,        ->> Rate barang dari ulasan user
  // sold,        ->> Sold Count, Bayak barang yang terjual per transaksi


    return (
      <TouchableOpacity style={s.card} onPress={props.onPress} key={props.idCard}>
        <Image style={s.cardImg} source={props.img} />
        <Text style={s.cardName}>{props.nameProduct}</Text>
        <Text style={s.cardPrice}>Rp.{props.price}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <Image source={LocationIcon} style={s.LocationIcon} />
          <Text style={s.cardLocation}>{props.location}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginHorizontal: 10,
          }}
        >
          <Image source={LocationIcon} style={s.LocationIcon} />
          <Text>{props.rate}</Text>
          <Text> | </Text>
          <Text>Terjual ({props.sold})</Text>
        </View>
      </TouchableOpacity>
    );
}
export default CardProduct
const s = StyleSheet.create({
  card: {
    width: "48%",
    height: "auto",
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: colors.WHITE,
    elevation: 10,
    marginVertical:10,
    marginHorizontal:'1%',
  },
  cardImg: {
    width: "100%",
    height: 150,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  cardName: {
    paddingHorizontal: 10,
    width: "100%",
    fontFamily: "roboto",
    fontSize: 13,
    marginVertical:5,
    color: colors.BLACK,
  },
  cardPrice: {
    paddingHorizontal: 10,
    width: "100%",
    fontFamily: "roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.BLACK,
    marginBottom: 10,
  },
  cardLocation: {
    paddingHorizontal: 10,
    width: "90%",
    fontFamily: "roboto",
    fontSize: 13,
    color: colors.BLACK,
    marginBottom: 10,
  },
  LocationIcon:{
    width:15,
    height:15,
  }
});
