import React, {useState, useEffect, useRef} from "react";
import {View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import { Tab, TabView } from "@rneui/themed";
import colors from "../../assets/colors";
import axios from "axios";
import { CardMerchant, CardProduct, HeaderWithSearchbar } from "../../component";

import { BASE_URL,url, UUID } from "../../service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RBSheet from "react-native-raw-bottom-sheet";


const Product =({navigation})=>{
    const refRBSheet = useRef();
 const [index, setIndex] = useState(0);
  const [token, setToken] = useState();
  const [merchant, setMerchant] = useState()
  const [bestProduct, setBestProduct] = useState();


  // FILTER VALIABLE 
  const [sortDir, setSortDir]= useState('asc')
  const [condition, setCondition] = useState('New')
  const [lowerPrice, setLowerPrice] = useState(null)
  const [highestPrice, setHighestPrice] = useState(null)

  const [range, setRange] = useState()

  // if(lowerPrice !== null && highestPrice !==null){
  //   setRange(`${lowerPrice}-${highestPrice}`)
  // }else{
  //   setRange('')
  // }

  // 




  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        console.log('get Token',value);
        ProductUnggulan(value);
        listMerchant(value)
      }
    } catch (e) {
      console.log("get Token error : ", e);
    }
  };
   const ProductUnggulan = (x) => {
     if(lowerPrice !== null && highestPrice !==null){
    setRange(`${lowerPrice}-${highestPrice}`)
    console.log(range)
  }else{
    setRange('')
  }

     axios
       .get(
         `${BASE_URL}${url.product}?page=1&size=20&sortDir=${sortDir}&condition=${condition}&price_range=${range}`,
         {
           headers: {
             Authorization: `Bearer ${x}`,
           },
         }
       )
       .then((res) => {
         console.log("product data : ", res.data.data);
         setBestProduct(res.data.data);
       })

       .catch((err) => console.log("get product error : ", err));
   };
const listMerchant = (x) => {
  axios
    .get(`${BASE_URL}${url.merchant}?page=1&size=20&local_uuid=${UUID}`, {
      headers: {
        Authorization: `Bearer ${x}`,
      },
    })
    .then((res) => {
      console.log('merchant list : ' , res.data.data);
      setMerchant(res.data.data)
    })
    .catch((err) => {
      console.log(err);
    });
};



   useEffect(() => {
     getToken();
     if(token){
     ProductUnggulan(token);
     listMerchant(token)

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
      <View style={{ backgroundColor: colors.WHITE }}>
        <HeaderWithSearchbar
          goBack={() => navigation.goBack()}
          toMyCart={() => navigation.navigate("MyCart")}
          onFilter={() => refRBSheet.current.open()}
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
            height: "83%",
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
                        key={item.uuid}
                      />
                    );
                  })}
                </View>
              </TabView.Item>
            </ScrollView>
            <ScrollView>
              <TabView.Item style={{ width: "100%" }}>
                <View
                  style={{
                    alignItems: "center",
                    marginTop: 30,
                    marginBottom: "35%",
                  }}
                >
                  {merchant?.map((item, index) => {
                    return (
                      <View>
                        <CardMerchant
                          //  img
                          // rate={item.rate}
                          onPress={() => {
                            navigation.navigate("Merchant", {
                              uuidStore: item.uuid,
                            });
                          }}
                          merchantName={item.name}
                          kategori={item.slogan}
                          key={item.uuid}
                          // location={item.location}
                          // jarak={item.km}
                        />
                      </View>
                    );
                  })}
                </View>
              </TabView.Item>
            </ScrollView>
          </TabView>
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={500}
          duration={250}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(52, 52, 52, 0.8)",
            },
            draggableIcon: {
              backgroundColor: "#000",
            },
          }}
        >
          <View style={s.BSBody}>
            <Text style={[s.BSTitle, { marginBottom: 30 }]}>Filter</Text>
            <Text style={s.BSTitle}>Urutkan Berdasarkan</Text>
            <View style={s.row}>
              <TouchableOpacity
                style={sortDir === "asc" ? s.BSBtnActive : s.BSBtnInactive}
                onPress={() => setSortDir("asc")}
              >
                <Text
                  style={
                    sortDir === "asc" ? s.BSBtnActiveText : s.BSBtnInactiveText
                  }
                >
                  A -> Z
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={sortDir === "desc" ? s.BSBtnActive : s.BSBtnInactive}
                onPress={() => setSortDir("desc")}
              >
                <Text
                  style={
                    sortDir === "desc" ? s.BSBtnActiveText : s.BSBtnInactiveText
                  }
                >
                  Z -> A
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={s.BSTitle}>Kondisi</Text>
            <View style={s.row}>
              <TouchableOpacity
                style={condition === "Second" ? s.BSBtnActive : s.BSBtnInactive}
                onPress={() => {
                  setCondition("Second");
                }}
              >
                <Text
                  style={
                    condition === "Second"
                      ? s.BSBtnActiveText
                      : s.BSBtnInactiveText
                  }
                >
                  Bekas
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={condition === "New" ? s.BSBtnActive : s.BSBtnInactive}
                onPress={() => {
                  setCondition("New");
                }}
              >
                <Text
                  style={
                    condition === "New"
                      ? s.BSBtnActiveText
                      : s.BSBtnInactiveText
                  }
                >
                  Baru
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={s.BSTitle}>Harga</Text>
            <View style={s.row}>
              <TextInput
                placeholder="Harga Terendah"
                onChangeText={(text) => {
                  setLowerPrice(text);
                }}
                value={lowerPrice}
                style={s.BSTextInput}
                keyboardType="numeric"
              />

              <TextInput
                placeholder="Harga Tertinggi"
                onChangeText={(text) => {
                  setHighestPrice(text);
                }}
                value={highestPrice}
                style={s.BSTextInput}
                keyboardType="numeric"
              />
            </View>
            <TouchableOpacity
              style={s.btnFilter}
              onPress={() => {
                ProductUnggulan();
                refRBSheet.current.close();
                setLowerPrice();
                setHighestPrice();
              }}
            >
              <Text style={[s.BSBtnActiveText, { fontSize: 20 }]}>
                Cari Produk
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>
      </View>
    );
}
export default Product

const s = StyleSheet.create({
  BSBody: {
    paddingHorizontal: 10,
    height:'90%',
  },
  BSTitle: {
    width: "100%",
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 17,
    color: colors.BLACK,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
  },
  BSBtnActive: {
    width: "30%",
    backgroundColor: colors.RED_MAIN,
    padding: 5,
    justifyContent: "center",
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  BSBtnInactive: {
    width: "30%",
    backgroundColor: colors.PALE_GREY,
    padding: 5,
    justifyContent: "center",
    height: 40,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  BSBtnActiveText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.WHITE,
  },
  BSBtnInactiveText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.GREY,
  },
  BSTextInput:{
    width :'40%',
    backgroundColor:colors.PALE_GREY,
    borderRadius:10,
    height:50,
    paddingHorizontal:10,
    marginHorizontal:10,
  },
  btnFilter:{
    width:'100%',
    backgroundColor:colors.RED_MAIN,
    padding:10,
    borderRadius:10,
    position:'absolute',
    bottom:0,
    alignSelf:'center',
  }
});