import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import { Tab, TabView } from "@rneui/themed";
import colors from "../../assets/colors";
import axios from "axios";
import { CardMerchant, CardProduct, HeaderWithSearchbar } from "../../component";

import { BASE_URL,url } from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Product =({navigation})=>{
 const [index, setIndex] = useState(0);
  const [token, setToken] = useState();
  const [bestProduct, setBestProduct] = useState();

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        console.log('get Token',value);
        ProductUnggulan(value);
      }
    } catch (e) {
      console.log("get Token error : ", e);
    }
  };
   const ProductUnggulan = (x) => {
     axios
       .get(`${BASE_URL}${url.product}?page=1&size=20`, {
         headers: {
           Authorization: `Bearer ${x}`,
         },
       })
       .then((res) => {
         console.log('product data : ',res.data.data);
         setBestProduct(res.data.data);
       })

       .catch((err) => console.log("get product error : ", err));
   };
   useEffect(() => {
     getToken();
     if(token){
     ProductUnggulan(token);

     }
   }, []);

   const tokoList = [
     {
       nama: "Toko Makmur Fashion",
       kategori: "Fashion",
       location: "Jepara Medium",
       km: "1.5km",
       rate: "4.5",
     },
     {
       nama: "Toko Sembako Litha",
       kategori: "Makanan dan Minuman",
       location: " Jakarta Barat",
       km: "3 km",
       rate: "5",
     },
     {
       nama: "Butik Retno",
       kategori: "Fashion",
       location: "Lampung Utara",
       km: "2.4 km",
       rate: "4.8",
     },
     {
       nama: "Vapor Wieby Uzi",
       kategori: "Rokok Elektronik",
       location: "Lamongan Timur",
       km: "3.3 km",
       rate: "4.6",
     },
     {
       nama: "Sabrina Skincare",
       kategori: "Kecantikan",
       location: "Kalibata Indah",
       km: "1 km",
       rate: "4.9",
     },
   ];

  
    return (
      <View>
        <HeaderWithSearchbar
          goBack={() => navigation.goBack()}
          toMyCart={() => navigation.navigate("MyCart")}
        />
        <Tab
          value={index}
          containerStyle={{ backgroundColor: colors.WHITE }}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: colors.RED_MAIN,
            height: 3,
          }}
        >
          <Tab.Item
            title="Product"
            titleStyle={
              index == 0
                ? {
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.RED_MAIN,
                  }
                : {
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.PALE_GREY,
                  }
            }
          />
          <Tab.Item
            title="Toko"
            titleStyle={
              index == 1
                ? {
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.RED_MAIN,
                  }
                : {
                    fontSize: 15,
                    fontWeight: "bold",
                    color: colors.PALE_GREY,
                  }
            }
          />
        </Tab>
        <View
          style={{
            backgroundColor: colors.WHITE,
            width: "100%",
            height: "95%",
            marginBottom: 20,
          }}
        >
          <TabView value={index} onChange={setIndex} animationType="spring">
            <ScrollView>
              <TabView.Item>
                <View
                  style={{
                    marginHorizontal: "5%",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {bestProduct?.map((item, index) => {
                    return (
                      <CardProduct
                        onPress={() =>
                          navigation.navigate("ProductDetail", {
                            uuid: item.uuid,
                          })
                        }
                        nameProduct={item.name}
                        price={item.price}
                      />
                    );
                  })}
                </View>
              </TabView.Item>
            </ScrollView>
            <ScrollView>
              <TabView.Item style={{ width: "100%"}}>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom:'35%',
                  }}
                >
                  {tokoList.map((item, index) => {
                    return (
                      <View >
                        <CardMerchant
                          //  img
                          rate={item.rate}
                          merchantName={item.nama}
                          kategori={item.kategori}
                          location={item.location}
                          jarak={item.km}
                        />
                        <CardMerchant
                          //  img
                          rate={item.rate}
                          merchantName={item.nama}
                          kategori={item.kategori}
                          location={item.location}
                          jarak={item.km}
                        />
                      </View>
                    );
                  })}
                </View>
              </TabView.Item>
            </ScrollView>
          </TabView>
        </View>
      </View>
    );
}
export default Product;