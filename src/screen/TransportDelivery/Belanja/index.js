import React, {useState, useEffect,useRef} from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import colors from "../../../assets/colors";
import { SimpleHeader, CardMerchant } from "../../../component";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterProduct, ArrowGreyIcon } from "../../../assets";
import { ScrollView } from "react-native";
import { BASE_URL, url, UUID } from "../../../service";

const FiturBelanja = ({navigation}) =>{
    
  const [token, setToken] = useState();
  const [merchant, setMerchant] = useState();
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem("token");
        if (value !== null) {
          setToken(value);
          console.log("get Token", value);
          listMerchant(value);
        }
      } catch (e) {
        console.log("get Token error : ", e);
      }
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

useEffect(()=>{
getToken()
if(merchant === undefined){
    listMerchant(token)
}
},[])
    return (
      <View style={s.body}>
        <SimpleHeader
          title="Mau Belanja Apa Hari Ini ?"
          onBack={() => navigation.navigate('MainApp')}
        />
        <View style={s.row}>
          <TouchableOpacity style={[s.TopBtn, { width: "25%" }]}>
            <Image source={FilterProduct} style={s.iconTopBtn} />
            <Text style={s.textTopBtn}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[s.TopBtn, { width: "50%" }]}>
            <Text style={s.textTopBtn}>Pilih Kategori</Text>
            <Image source={ArrowGreyIcon} style={s.iconTopBtn} />
          </TouchableOpacity>
        </View>
        
          <ScrollView>
            <View style={s.merchantContainer}>
            {merchant?.map((item, index) => {
              return (
                  <CardMerchant
                    key={index}
                    //  img
                    // rate={item.rate}
                    onPress={() => {
                      navigation.navigate("HomeBelanja");
                    }}
                    merchantName={item.name}
                    kategori={item.slogan}
                    // location={item.location}
                    // jarak={item.km}
                  />
              );
            })}
            </View>
          </ScrollView>
      </View>
    );
}

export default FiturBelanja
const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  TopBtn: {
    backgroundColor: colors.PALE_GREY,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  textTopBtn: {
    color: colors.GREY,
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 16,
  },
  iconTopBtn: {
    width: 25,
    height: 25,
  },
  merchantContainer:{
    alignItems:'center'
  }
});