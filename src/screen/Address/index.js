import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import colors from '../../assets/colors'
import {SimpleHeader, AssistantModal} from '../../component'
import { AddAddressIcon, DeleteIcon } from "../../assets";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL, url } from "../../service";
import { Alert } from "react-native";

const Address =({navigation})=>{
const [listAdd, setListAdd] = useState()
   const [modalVisible, setModalVisible] = useState(false);

 const [token, setToken] = useState();
 const getToken = async () => {
   try {
     const value = await AsyncStorage.getItem("token");
     if (value !== null) {
       setToken(value)
       console.log(value)
       getAdd(value)
     }
   } catch (e) {
     console.log("get Token error : ", e);
   }
 };

const getAdd = (x) =>{
  axios.get(`${BASE_URL}${url.address}`, {
    headers: {
      Authorization: `Bearer ${x}`,
    },
  })
  .then((res)=>{
    console.log(res.data.data)
    if(res.data.data < 1){
      setListAdd(null)
    }else{
    setListAdd(res.data.data)
    }
  })
  .catch((err)=>{console.log(err)})
}

const deletAdd =(uuid)=>{
  axios
    .delete(`${BASE_URL}${url.address}/${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data)
      Alert.alert(res.data.message)
      setModalVisible(!modalVisible)
      getAdd(token)
    })
    .catch((err) => {
      console.log(err);
    });
}

useEffect(()=>{
getToken()

if(token){
  getAdd(token)
}
},[])

const CardAddress = (props) =>{
  return (
    <View style={s.bodyCard}>
      <View style={[s.row, { justifyContent: "flex-start" }]}>
        <Text
          style={{
            fontFamily: "roboto",
            fontSize: 12,
            fontWeight: "bold",
            color: colors.BLACK,
            marginRight: 10,
          }}
        >
          {props.label}
        </Text>
        <View
          style={
            props.main === true
              ? {
                  width: "25%",
                  backgroundColor: colors.PALE_GREY,
                  paddingVertical: 5,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                }
              : { display: "none" }
          }
        >
          <Text
            style={{ fontSize: 12, color: colors.GREY, textAlign: "center" }}
          >
            Utama
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "roboto",
          fontSize: 17,
          fontWeight: "bold",
          color: colors.BLACK,
        }}
      >
        {props.name}
      </Text>
      <Text
        style={{
          fontFamily: "roboto",
          fontSize: 13,
          color: colors.BLACK,
          opacity: 0.6,
        }}
      >
        {props.phone}
      </Text>

      <Text>{props.address}</Text>
      <View style={s.row}>
        <TouchableOpacity
          style={[s.btnCard, { width: "80%" }]}
          onPress={props.btnEdit}
        >
          <Text style={s.textBtnCard}>Edit Alamat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[s.btnCard, { width: "12%" }]}
          onPress={props.btnDelete}
        >
          <Image
            source={DeleteIcon}
            style={{ width: 20, height: 20, resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


    return (
      <View style={s.body}>
        <ScrollView>
          <SimpleHeader
            title="Alamat Saya"
            onBack={() => navigation.goBack()}
          />
          {listAdd !== null ? (
            listAdd?.map((item, index) => {
              return (
                <View>
                  <CardAddress
                    btnEdit={() =>
                      navigation.navigate("NewAddress", {
                        uuidAddress: item.uuid,
                      })
                    }
                    btnDelete={() => setModalVisible(!modalVisible)}
                    key={index}
                    main={item.is_main_address === 1 ? true : false}
                    label={item.label}
                    name={item.recipient_name}
                    phone={item.recipient_phone}
                    address={`${item.address} ${item.district_name}, ${item.regency_name}, ${item.province_name} ${item.postal_code}`}
                  />
                  <AssistantModal
                    sadFace
                    okText="Hapus"
                    confirm="Apa Kamu Yakin Ingin Menghapus Alamat ini ?"
                    visible={modalVisible}
                    onCancel={() => setModalVisible(!modalVisible)}
                    onOk={() => {
                      deletAdd(item.uuid);
                    }}
                  />
                </View>
              );
            })
          ) : (
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: "roboto",
                fontWeight: "bold",
                fontSize: 20,
                marginVertical: 10,
                color: colors.RED_MAIN,
              }}
            >
              Belum Ada Alamat yang Ditambahkan
            </Text>
          )}
          <TouchableOpacity
            style={s.btnAddAddress}
            onPress={() => navigation.navigate("NewAddress", {uuidAddress:null})}
          >
            <Text style={s.btnAddAddressText}>Tambah Alamat Baru</Text>
            <Image source={AddAddressIcon} style={s.btnAddAddressIcon} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
}
export default Address
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
    paddingHorizontal: "3%",
    justifyContent: "space-around",
  },
  btnAddAddress: {
    backgroundColor: colors.PINK,
    borderRadius: 15,
    borderColor: colors.RED_MAIN,
    borderWidth: 2,
    padding: 15,
    width: "90%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  btnAddAddressText: {
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.RED_MAIN,
  },
  btnAddAddressIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
    resizeMode: "contain",
  },
  bodyCard: {
    backgroundColor: colors.PINK,
    borderRadius: 15,
    borderColor: colors.RED_MAIN,
    borderWidth: 2,
    width: "96%",
    marginHorizontal: "2%",
    padding:10,
    marginVertical:10,
  },
  btnCard: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    borderColor: colors.PALE_GREY,
    borderWidth: 2,
    padding: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  textBtnCard:{
    textAlign:'center',
    fontFamily:'roboto',
    fontWeight:'bold',
    fontSize:15,
    opacity:0.8,
    color:colors.GREY,
  }
});