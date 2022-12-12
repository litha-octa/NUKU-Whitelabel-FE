import React from "react";
import {View, Text, TextInput, Image,StyleSheet, TouchableOpacity} from 'react-native'
import {
  SearchIcon,
  IconKeranjang,
  IconShare,
  LeftArrowTail,
  FilterOrder,
} from "../../assets";
import colors from "../../assets/colors";

const HeaderWithSearchbar = (props) =>{
  // PROPS LIST :
  // toMyChart
    return (
      <View style={s.headers}>
        <TouchableOpacity onPress={props.goBack }>
          <Image source={LeftArrowTail} style={s.iconHeaderBack} />
        </TouchableOpacity>
        <View style={s.searchbar}>
          <Image source={SearchIcon} style={s.iconHeaderSearch} />
          <TextInput placeholder="Cari Produk" />
        </View>
        <TouchableOpacity onPress={props.toMyCart}>
          <Image source={IconKeranjang} style={s.iconHeader} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={FilterOrder} style={s.iconHeader} />
        </TouchableOpacity>
      </View>
    );
}
export default HeaderWithSearchbar;
const s = StyleSheet.create({
  headers: {
    width: "100%",
    height: 55,
    backgroundColor: colors.WHITE,
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  searchbar: {
    backgroundColor: colors.PALE_GREY,
    width: "55%",
    borderRadius: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
  },
  iconHeaderBack: {
    width: 45,
    height: 40,
    marginRight: 20,
    marginTop: 5,
  },
  iconHeaderSearch: {
    width: 25,
    height: 25,
    marginRight: 5,
    marginTop: 5,
  },
  iconHeader: {
    width: 40,
    height: 35,
    marginHorizontal: 10,
    marginTop: 5,
  },
});