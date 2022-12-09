import React, {useEffect, useState } from "react";
import {View,Text, Image,StyleSheet, TouchableOpacity,SafeAreaView, ScrollView} from 'react-native'
import colors from "../../assets/colors";
import { HeaderWithSearchbar , StoreInfo} from "../../component";
import { FavoritIcon, FavoritIconFill, StarIcon } from "../../assets";
import axios from "axios";
import { BASE_URL, url } from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";


const ProductDetail =({navigation, route})=>{
const [product, setProduct]= useState()
const [token, setToken] = useState();
const [fav, setFav] = useState(false);

const [name, setName] = useState()
const [price, setPrice] = useState()
const [rate, setRate] = useState();
const [sold,setSold] = useState()
const [merchant,setMerchant] = useState()
const [location,setLocation] = useState()
const [condition,setCondition] = useState()
// const [rate, setRate] = useState();




const {uuid} = route.params;
console.log(uuid);

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      setToken(value);
      ProductDetail(value, uuid);
    }
  } catch (e) {
    console.log("get Token error : ", e);
  }
};
const ProductDetail = (x,y) => {
  axios
    .get(`${BASE_URL}${url.product}/${y}`, {
      headers: {
        Authorization: `Bearer ${x}`,
      },
    })
    .then((res) => {
      console.log("product data : ", res.data.data);
      setProduct(res.data.data)
      setName(res.data.data.name);
      setPrice(res.data.data.price);
      setMerchant(res.data.data.merchant_name);
      setCondition(res.data.data.condition);
      setLocation(res.data.data.merchant_address.regency_name);
    })

    .catch((err) => console.log("get product error : ", err));
};
 useEffect(() => {
   getToken();
 }, []);



    return (
      <SafeAreaView>
        <HeaderWithSearchbar />
        <ScrollView>
          <View style={s.body}>
            <Image source={{ uri: "null" }} style={s.image} />
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ width: "85%" }}>
                <Text style={s.price}>Rp.{price}</Text>
                <Text style={s.name}>{name}</Text>
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
              <Text style={s.rate}>4.5</Text>
              <Text style={s.rate}>|</Text>
              <Text style={s.sold}>Terjual 200++</Text>
            </View>
          </View>
          <StoreInfo
          namaToko={merchant}
          status="Online"
          location={location}
          onPress={()=>navigation.navigate('Merchant',{uuidStore : product?.merchant_uuid})}
          />
          <View style={s.deliveryDetail}>
            <Text style={s.ongkir}>Ongkir 20.000</Text>
            <Text style={s.deliveryText}>Dikirim Ke PT Emas</Text>
            <Text style={s.deliveryText}>Estimasi tiba Hari ini</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={s.deliveryText}>Pengiriman</Text>
              <TouchableOpacity style={s.btnPengiriman}>
                <Text style={s.textBtnPengiriman}>Reguler</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={s.valueDetail}>Detail produk</Text>
              <View style={s.detailItem}>
                <Text style={s.keyDetail}>Kondisi</Text>
                <Text style={s.valueDetail}>
                  {condition === "New" ? "Baru" : condition}
                </Text>
              </View>
              <View style={s.detailItem}>
                <Text style={s.keyDetail}>Min. Pesanan</Text>
                <Text style={s.valueDetail}>{product?.minimum_buy} Pcs</Text>
              </View>
              <View style={s.detailItem}>
                <Text style={s.keyDetail}>Stock</Text>
                <Text style={s.valueDetail}>{product?.stock}</Text>
              </View>
              <Text>{product?.description}</Text>
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
   deliveryDetail: {
     backgroundColor: colors.WHITE,
     width: "100%",
     paddingHorizontal: "5%",
     paddingVertical: 10,
     marginBottom: "20%",
   },
   ongkir: {
     fontSize: 20,
     fontFamily: "roboto",
     fontWeight: "bold",
     width: "100%",
     paddingBottom: 5,
     borderBottomColor: colors.PALE_GREY,
     borderBottomWidth: 1,
   },
   deliveryText: {
     color: colors.BLACK,
     fontFamily: "roboto",
     fontSize: 12,
     marginVertical: 5,
   },
   btnPengiriman: {
     backgroundColor: colors.PINK,
     borderRadius: 10,
     width: 90,
     paddingHorizontal: 10,
     marginHorizontal: 20,
     paddingVertical: 5,
   },
   textBtnPengiriman: {
     color: colors.RED_MAIN,
     fontSize: 10,
     fontFamily: "roboto",
     fontWeight: "bold",
     textAlign: "center",
   },
   detailItem: {
     borderBottomColor: colors.PALE_GREY,
     borderBottomWidth: 2,
     display: "flex",
     flexDirection: "row",
   },
   keyDetail: {
     fontFamily: "roboto",
     fontSize: 11,
     width: "50%",
     marginVertical: 10,
   },
   valueDetail: {
     fontFamily: "roboto",
     fontSize: 11,
     fontWeight: "bold",
     width: "50%",
     marginVertical: 10,
   },
 });