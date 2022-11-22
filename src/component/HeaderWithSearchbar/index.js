import React from "react";
import {View, Text, TextInput, Image,StyleSheet} from 'react-native'
import {
  SearchIcon,
  IconKeranjang,
  IconShare,
  LeftArrowTail,
} from "../../assets";
import colors from "../../assets/colors";

const HeaderWithSearchbar = () =>{
    return( <View style={s.headers}>
          <Image source={LeftArrowTail} style={s.iconHeader} />
          <Image source={SearchIcon} style={s.iconHeader} />
          <TextInput placeholder="Cari Produk" style={s.searchbar} />
          <Image source={IconKeranjang} style={s.iconHeader} />
          <Image source={IconShare} style={s.iconHeader} />
        </View>
    )
}
export default HeaderWithSearchbar;
const s = StyleSheet.create({
  headers: {
    width: "100%",
    height: 45,
    backgroundColor: colors.WHITE,
    padding: 5,
    display: "flex",
    flexDirection: "row",
  },
  searchbar: {
    backgroundColor: colors.PALE_GREY,
    width: "60%",
    borderRadius: 10,
  },
  iconHeader: {
    width: 20,
    height: 20,
    marginRight: 20,
    marginTop: 5,
  },
})