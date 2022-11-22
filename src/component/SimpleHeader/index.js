import React from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import colors from "../../assets/colors";
import { LeftArrowTail } from "../../assets";
const SimpleHeader = (props) => {
    return (
      <View style={s.header}>
        <TouchableOpacity onPress={props.onBack}>
          <Image source={LeftArrowTail} style={s.IconHeader} />
        </TouchableOpacity>
        <Text style={s.textHeader}>{props.title}</Text>
      </View>
    );
}
const s = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 45,
    elevation: 8,
    padding: 5,
    backgroundColor: colors.WHITE,
  },
  IconHeader: {
    width: 20,
    height: 20,
    marginTop: 5,
    marginHorizontal: 10,
  },
  textHeader: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    marginTop:5,
    textTransform:'capitalize',
  },
});
export default SimpleHeader