import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors';

const OrderInfo = (props) => {
    return (
      <View style={s.card}>
        <View style={s.section}>
          <View style={{ width: "15%" }}>
            <Image source={{ uri: props.img }} style={s.img} />
          </View>
          <View style={{ width: "60%" }}>
            <Text style={s.itemName}>{props.itemName}</Text>
            <Text style={s.total}>{props.count} Barang</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={props.styleStatus ? props.styleStatus : s.statusOk}>
              {props.status}
            </Text>
            <Text style={s.total}>{props.date}</Text>
          </View>
        </View>
        <View style={s.section2}>
          <View style={{ width: "65%"}}>
            <Text style={s.total}>Total Belanja</Text>
            <Text style={s.itemName}>RP{props.price}</Text>
          </View>
          <View style={{ width: "35%" }}>
            <TouchableOpacity style={s.btn}>
              <Text style={s.btnText}>Beli Lagi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}
export default OrderInfo;

const s = StyleSheet.create({
  card: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.WHITE,
    shadowColor: colors.GREY,
    shadowOpacity: 0.9,
    elevation: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  section2: {
    marginVertical: 10,
    borderTopColor: colors.PALE_GREY,
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  img: {
    width: '100%',
    height: 60,
    resizeMode:'contain',
    borderRadius: 10,
    marginRight: 10,
  },
  itemName: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 18,
  },
  total: {
    fontSize: 12,
    color: colors.GREY,
    fontFamily: "roboto",
  },
  statusOk: {
    marginLeft: 5,
    height: 30,
    padding: 5,
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: colors.BG_SUCCESS,
    color: colors.SUCCESS,
  },
  btn: {
    backgroundColor: colors.SUCCESS,
    padding: 5,
    width: '100%',
    height: 30,
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: colors.WHITE,
    textAlign: "center",
    fontFamily: "roboto",
    fontSize: 15,
  },
});