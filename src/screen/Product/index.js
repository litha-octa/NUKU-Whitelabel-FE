import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, SafeAreaView} from 'react-native'
import { Tab, TabView } from "@rneui/themed";
import colors from "../../assets/colors";
import axios from "axios";
import { CardProduct } from "../../component";

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
    return (
      <View>
        <Text>product page here</Text>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: colors.RED_MAIN,
            height: 3,
          }}
        >
          <Tab.Item
            title="Product"
            titleStyle={{
              fontSize: 15,
              fontWeight: "bold",
              color: colors.RED_MAIN,
            }}
          />
          <Tab.Item
            title="Toko"
            titleStyle={{
              fontSize: 15,
              fontWeight: "bold",
              color: colors.RED_MAIN,
            }}
          />
        </Tab>
        <View
          style={{ backgroundColor: "pink", width: "100%", height: "95%", marginBottom:20,}}
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
                          navigation.navigate("ProductDetail", { uuid : item.uuid})
                        }
                        nameProduct={item.name}
                        price={item.price}
                      />
                    );
                  })}
                </View>
              </TabView.Item>
            </ScrollView>
            <TabView.Item style={{ width: "100%" }}>
              <Text>toko</Text>
            </TabView.Item>
          </TabView>
        </View>
      </View>
    );
}
export default Product;