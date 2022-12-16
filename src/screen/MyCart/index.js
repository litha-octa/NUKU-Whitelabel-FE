import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  MinBtnGrey,
  MinBtnRed,
  PlusBtnGrey,
  PlusBtnRed,
  DeleteBtnRed,
  LeftArrowTail,
  LocationRedIcon,
  RightArrowRed,
} from "../../assets";
import colors from "../../assets/colors";
import CheckBox from "@react-native-community/checkbox";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, url } from "../../service";
import { SimpleHeader } from "../../component";

const MyCart = ({ navigation }) => {
  const harga = "200.000";
  const [selectAll, setSelectAll] = useState(false);
  const [myCart, setMyCart] = useState();
  const [token, setToken] = useState();

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        console.log(value);
        getCartData(value);
      }
    } catch (e) {
      console.log("get Token error : ", e);
    }
  };

  const getCartData = (x) => {
    axios
      .get(`${BASE_URL}${url.cart}?page=1&size=5`, {
        headers: {
          Authorization: `Bearer ${x}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data.products);
        setMyCart(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateQuantity = (x, y, z) => {
    // let i = x;
    // let s = x;

    if (y === "up") {
      axios({
        method: "PUT",
        url: `${BASE_URL}${url.cart}-product/${z}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
        data: {
          quantity: x+1,
          notes: "HUHU",
        },
      })
        .then((res) => {
          console.log(res);
          getCartData(token)
        })
        .catch((err) => {
          console.log(err);
        });
    } else{
      
      
        axios({
          method: "PUT",
          url: `${BASE_URL}${url.cart}-product/${z}`,
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${token}`,
          },
          data: {
            quantity: x-1,
            notes: "HUHU",
          },
        })
          .then((res) => {
            console.log(res);
          getCartData(token);

          })
          .catch((err) => {
            console.log(err);
          });
      }
  };

  const deleteCartItem=(x)=>{
    axios
    // ({
    //   method: "DELETE",
    //   url: `${BASE_URL}${url.cart}-product/${x}`,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
      .delete(`${BASE_URL}${url.cart}-product/${x}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        getCartData(token);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getToken();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <SimpleHeader title='KeranjangKu'
      onBack={()=>navigation.goBack()}
      />
      <View style={s.header}>
        <CheckBox
          disabled={false}
          value={selectAll}
          onValueChange={(newValue) => setSelectAll(newValue)}
          tintColors={colors.GREY}
        />
        <Text style={s.selectAll}>Pilih Semua</Text>
        <Image source={LocationRedIcon} style={s.locationIcon} />
        <Text style={s.addreessName}>Dikirim ke Kantor Syahrul Ramdan</Text>
        <Image source={RightArrowRed} style={s.downArrow} />
      </View>
      <ScrollView>
        <View style={s.body}>
          {myCart?.map((item, index) => {
            return (
              <View style={s.card}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <CheckBox
                    value={selectAll}
                    onValueChange={(newValue) => setSelectAll(newValue)}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Merchant", {
                        uuidStore: item.merchant_uuid,
                      })
                    }
                  >
                    <Text style={s.namaToko}>{item.merchant_name}</Text>
                    <Text style={s.location}>{item.merchant_location}</Text>
                  </TouchableOpacity>
                </View>
                {item?.products.map((item, index) => {
                  return (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginVertical: 10,
                        width: "100%",
                      }}
                    >
                      <CheckBox
                        value={selectAll}
                        onValueChange={(newValue) => setSelectAll(newValue)}
                      />
                      <Image source={{ uri: item.img }} style={s.productImg} />
                      <View style={{ width: "70%" }}>
                        <Text style={s.location}>{item.product_name}</Text>
                        <Text style={s.namaToko}>
                          Rp.{item.cart_product_price}
                        </Text>
                        <View style={s.quantityCon}>
                          <TouchableOpacity
                            onPress={() =>
                              updateQuantity(
                                item.cart_product_quantity,
                                "up",
                                item.cart_product_uuid
                              )
                            }
                          >
                            <Image
                              style={s.quantityBtn}
                              source={
                                item.cart_product_quantity > 100
                                  ? PlusBtnGrey
                                  : PlusBtnRed
                              }
                            />
                          </TouchableOpacity>
                          <Text style={s.quantityText}>
                            {item.cart_product_quantity}
                          </Text>
                          <TouchableOpacity
                            disabled={
                              item.cart_product_quantity === 1 ? true : false
                            }
                            onPress={() =>
                              updateQuantity(
                                item.cart_product_quantity,
                                "down",
                                item.cart_product_uuid
                              )
                            }
                          >
                            <Image
                              style={s.quantityBtn}
                              source={
                                item.cart_product_quantity === 1
                                  ? MinBtnGrey
                                  : MinBtnRed
                              }
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => {deleteCartItem(item.cart_product_uuid)}}
                          >
                            <Image source={DeleteBtnRed} style={s.btnDelete} />
                          </TouchableOpacity>
                        </View>
                      </View>
                      
                    </View>
                  );
                })}
                
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={s.fixedFooter}>
        <View style={{ width: "60%" }}>
          <Text style={s.totalHarga}>Total Harga</Text>
          <Text style={s.totalHarga2}>Rp. {harga}</Text>
        </View>
        <TouchableOpacity style={s.btnBeli}>
          <Text style={s.btnBeliText}> Beli ({myCart?.length})</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default MyCart;

const s = StyleSheet.create({
  header: {
    width: "100%",
    paddingHorizontal: "5%",
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10,
  },
  iconHeader: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  textHeader: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 20,
    color: colors.BLACK,
  },
  selectAll: {
    color: colors.GREY,
    fontFamily: "roboto",
    fontSize: 12,
    textAlignVertical: "center",
    width: "17%",
  },
  locationIcon: {
    marginLeft: "25%",
    marginRight: 10,
    width: 20,
    height: 25,
  },
  addreessName: {
    fontFamily: "roboto",
    fontSize: 12,
    color: colors.RED_MAIN,
    width: "35%",
  },
  downArrow: {
    transform: [{ rotate: "90deg" }],
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  body: {
    width: "100%",
    paddingHorizontal: "5%",
    backgroundColor: colors.WHITE,
    borderTopColor: colors.PALE_GREY,
    borderTopWidth: 2,
    marginBottom: 70,
    paddingBottom: 5,
  },
  card: {
    marginVertical: 10,
    width: "100%",
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
  },
  namaToko: {
    fontSize: 15,
    fontFamily: "roboto",
    fontWeight: "bold",
    width:'100%'
  },
  location: {
    fontFamily: "roboto",
    fontSize: 12,
    color: colors.GREY,
  },
  productImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  fixedFooter: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: colors.RED_MAIN,
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  btnBeli: {
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    width: "30%",
    height: 30,
    paddingVertical: 5,
  },
  btnBeliText: {
    color: colors.RED_MAIN,
    fontFamily: "roboto",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  totalHarga: {
    color: colors.WHITE,
    fontFamily: "roboto",
    fontSize: 12,
  },
  totalHarga2: {
    color: colors.WHITE,
    fontFamily: "roboto",
    fontSize: 19,
    fontWeight: "bold",
  },
  quantityCon: {
    display: "flex",
    flexDirection: "row",
    width:'100%',
    display:'flex',
    flexDirection:'row-reverse'
  },
  quantityBtn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    padding: 3,
    marginHorizontal: 5,
  },
  quantityText:{
    fontFamily:'roboto',
    fontSize:17,
    fontWeight:'bold',
    paddingBottom:2,
    borderBottomColor:colors.PALE_GREY,
    borderBottomWidth:2,
  },
  btnDelete:{
    width:30,
    height:30,
    marginHorizontal:10,
  }
});
