import React, { useState } from "react";
import {View, Text, TextInput, Image, TouchableOpacity,StyleSheet, SafeAreaView,ScrollView} from 'react-native'
import {
  LeftArrowTail,
  SearchIcon,
  IconKeranjang,
  IconShare,
  LocationIcon,
  LEDIcon,
} from "../../assets";
import colors from "../../assets/colors";
import { CardProduct } from "../../component";
import { product } from "../../assets/states";

const Merchant =({navigation, route})=>{
 
  const [isFollow, setIsFollow] = useState(false)
  const productCount = 20
    const {storeName} = route.params
    console.log(storeName)
    const dummyimage =
      "https://yt3.ggpht.com/a-/AAuE7mAjCgbd8Wq35r6JNQr0xXzJZsZThycm7ayRFw=s900-mo-c-c0xffffffff-rj-k-no";
    return (
      <SafeAreaView>
        <View style={s.headers}>
          <Image source={LeftArrowTail} style={s.iconHeader} />
          <Image source={SearchIcon} style={s.iconHeader} />
          <TextInput placeholder="Cari Produk" style={s.searchbar} />
          <Image source={IconKeranjang} style={s.iconHeader} />
          <Image source={IconShare} style={s.iconHeader} />
        </View>
        <ScrollView>
          <View style={s.body}>
            <View style={s.storeInfoContainer}>
              <Image source={{ uri: dummyimage }} style={s.storePic} />
              <Image />
              <View style={{ width: "80%", marginLeft: "5%" }}>
                <Text style={s.storeName}>{storeName}</Text>
                <View style={s.section}>
                  <Image source={LEDIcon} style={s.iconSection} />
                  <Text style={s.storeStatus}>Online</Text>
                  <Image source={LocationIcon} style={s.iconSection} />
                  <Text style={s.storeLocation}>Jakarta Utara</Text>
                </View>
              </View>
            </View>
            <View style={s.storeInfoContainer}>
              <View style={s.sectionLeft}>
                <Text style={s.storeRate}>4.5</Text>
                <Text style={s.storeRateText}>Rating & Ulasan</Text>
                <TouchableOpacity style={s.btnChat}>
                  <Text style={s.btnChatText}>Chat</Text>
                </TouchableOpacity>
              </View>
              <View style={s.sectionLeft}>
                <Text style={s.storeRate}>09:30-18:00</Text>
                <Text style={s.storeRateText}>Jam Operasi Toko</Text>
                <TouchableOpacity
                  style={isFollow === false ? s.btnFollow : s.btnFollowOk}
                  onPress={() => setIsFollow(!isFollow)}
                >
                  <Text
                    style={
                      isFollow === false ? s.btnFollowText : s.btnFollowTextOk
                    }
                  >
                    {isFollow === false ? "Ikuti" : "Diikuti "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.productContainer}>
              <Text style={s.productContainerTextRed}>Semua Produk</Text>
              <Text style={s.productContainerText}>{productCount} Produk</Text>
              <View
                style={{
                  width: "100%",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  paddingBottom: 30,
                }}
              >
                {product?.map((item,index)=>{
                  return (
                    <CardProduct
                    onPress={()=>{navigation.navigate('ProductDetail', {detailData:product[index],})}}
                      img={{ uri: item.img }}
                      nameProduct={item.name}
                      price={item.price}
                      location={item.location}
                      rate={item.rate}
                      sold={item.sold}
                    />
                  );
                })}
                
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
}
export default Merchant
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
  body: {
    width: "100%",
    backgroundColor: colors.WHITE,
    paddingHorizontal: "5%",
    paddingTop: "5%",
  },
  storePic: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  storeInfoContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
  },
  storeName: {
    fontWeight: "bold",
    fontFamily: "roboto",
    color: colors.BLACK,
    fontSize: 15,
  },
  storeStatus: {
    color: colors.SUCCESS,
    fontFamily: "roboto",
    fontSize: 10,
    width: "20%",
  },
  storeLocation: {
    color: colors.GREY,
    fontFamily: "roboto",
    fontSize: 10,
    width: "30%",
  },
  iconSection: {
    width: 10,
    height: 10,
    resizeMode: "contain",
    marginRight: 10,
  },
  sectionLeft: {
    width: "50%",
    alignItems: "center",
  },
  storeRate: {
    fontFamily: "roboto",
    fontSize: 18,
    color: colors.BLACK,
  },
  storeRateText: {
    fontFamily: "roboto",
    fontSize: 10,
    color: colors.GREY,
  },
  btnChat: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.PALE_GREY,
    padding: 5,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  btnChatText: {
    color: colors.GREY,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnFollow: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.RED_MAIN,
    padding: 5,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  btnFollowOk: {
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: colors.RED_MAIN,
    borderColor: colors.RED_MAIN,

    padding: 5,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
  },
  btnFollowText: {
    color: colors.RED_MAIN,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  btnFollowTextOk: {
    color: colors.WHITE,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  productContainer: {
    width: "94%",
    // paddingHorizontal:'5%',
    marginHorizontal: "3%",
    borderTopColor: colors.PALE_GREY,
    borderTopWidth: 2,
    paddingVertical: 20,
  },
  productContainerTextRed: {
    color: colors.RED_MAIN,
    fontSize: 20,
    fontWeight: "bold",
  },
  productContainerText: {
    color: colors.GREY,
    fontSize: 15,
  },

  
});