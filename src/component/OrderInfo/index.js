import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors';

const OrderInfo = (props) => {
    return (
      <View style={s.card}>
        <View style={s.section}>
          <Image source={{ uri: props.img }} style={s.img} />
          <View>
            <Text style={s.itemName}>{props.itemName}</Text>
            <Text style={s.total}>{props.count} Barang</Text>
          </View>
          <View>
            <Text style={props.styleStatus ? props.styleStatus : s.statusOk}>
              {props.status}
            </Text>
            <Text style={s.total}>{props.date}</Text>
          </View>
        </View>
        <View style={s.section2}>
          <View>
            <Text style={s.total}>Total Belanja</Text>
            <Text style={s.itemName}>RP{props.price}</Text>
          </View>
          <TouchableOpacity style={s.btn}>
            <Text style={s.btnText}>Beli Lagi</Text>
          </TouchableOpacity>
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
  },
  section2: {
    marginVertical: 10,
    borderTopColor: colors.PALE_GREY,
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  itemName: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 18,
    width: 210,
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
    width: 120,
    height: 30,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 10,
  },
  btnText: {
    color: colors.WHITE,
    textAlign:'center',
    fontFamily:'roboto',
    fontSize:15,
  },
});