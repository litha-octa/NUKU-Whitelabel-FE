import React, { useState } from "react";
import {View,Text, Image,StyleSheet, TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import colors from "../../assets/colors";
import { HeaderWithSearchbar , StoreInfo} from "../../component";
import { FavoritIcon, FavoritIconFill, StarIcon } from "../../assets";



 const ProductDetail =({navigation, route})=>{

const {detailData} = route.params;
const [fav, setFav] = useState(false)



    return (
      <SafeAreaView>
        <HeaderWithSearchbar />
        <ScrollView>
          <View style={s.body}>
            <Image source={{ uri: detailData.img }} style={s.image} />
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ width: "85%" }}>
                <Text style={s.price}>Rp.{detailData.price}</Text>
                <Text style={s.name}>{detailData.name}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setFav(!fav)}
                style={{ width: "15%", justifyContent: "center" }}
              >
                <Image
                  source={fav === false ? FavoritIcon : FavoritIconFill}
                  style={s.iconLove}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: 15,
              }}
            >
              <Image
                source={StarIcon}
                style={{ width: 15, height: 15, marginHorizontal: 5 }}
              />
              <Text style={s.rate}>{detailData.rate}</Text>
              <Text style={s.rate}>|</Text>
              <Text style={s.sold}>Terjual ({detailData.sold})</Text>
            </View>
          </View>
          <StoreInfo
            namaToko="butik gaul store"
            status="Online"
            location={detailData.location}
          />
          <View style={s.deliveryDetail}>
            <Text style={s.ongkir}>Ongkir 20.000</Text>
            <Text style={s.deliveryText}>Dikirim Ke PT Emas</Text>
            <Text style={s.deliveryText}>Estimasi tiba Hari ini</Text>
            <View style={{display:'flex', flexDirection:'row'}}>
              <Text style={s.deliveryText}>Pengiriman</Text>
              <TouchableOpacity style={s.btnPengiriman}>
                <Text style={s.textBtnPengiriman}>Reguler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
 }
 export default ProductDetail
 const s = StyleSheet.create({
   body: {
     width: "100%",
     height: "100%",
     backgroundColor: colors.WHITE,
     paddingHorizontal: "5%",
     //  borderBottomColor: colors.PALE_GREY,
     //  borderBottomWidth: 2,
     flex: 1,
   },
   image: {
     width: "100%",
     height: 300,
     // resizeMode:'contain',
     backgroundColor: "pink",
     borderRadius: 20,
     marginTop: 10,
   },
   price: {
     fontSize: 30,
     fontFamily: "roboto",
     fontWeight: "bold",
     color: colors.BLACK,
     marginTop: 10,
   },
   name: {
     fontSize: 15,
     fontFamily: "roboto",
     color: colors.BLACK,
     marginBottom: 10,
   },
   rate: {
     width: "10%",
     fontSize: 13,
     fontFamily: "roboto",
     color: colors.BLACK,
     textAlign: "center",
     fontWeight: "bold",
   },
   sold: {
     width: "30%",
     fontSize: 13,
     fontFamily: "roboto",
     color: colors.GREY,
   },
   iconLove: {
     width: 40,
     height: 40,
     alignSelf: "center",
   },
   deliveryDetail:{
    backgroundColor:colors.WHITE,
    width :'100%',
    paddingHorizontal:'5%',
    paddingVertical:10,
    marginBottom:'20%',
   },
   ongkir:{
    fontSize:20,
    fontFamily:'roboto',
    fontWeight:'bold',
    width:'100%',
    paddingBottom:5,
    borderBottomColor:colors.PALE_GREY,
    borderBottomWidth:1,
   },
   deliveryText:{
    color:colors.BLACK,
    fontFamily:'roboto',
    fontSize:12,
    marginVertical:5,
   },
   btnPengiriman:{
    backgroundColor:colors.PINK,
    borderRadius:10,
    width: 90,
    paddingHorizontal:10,
    marginHorizontal:20,
    paddingVertical:5,
  },
  textBtnPengiriman:{
    color:colors.RED_MAIN,
    fontSize:10,
    fontFamily:'roboto',
    fontWeight:'bold',
    textAlign:'center',
  }

 });