import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import colors from "../../assets/colors";
import { SimpleHeader } from "../../component";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {BASE_URL, url} from '../../service'
import CheckBox from "@react-native-community/checkbox";


const NewAddress =({navigation, route})=>{
const {uuidAddress} = route.params;

const [isMain, setIsMain] =useState(false)
const [label, setLabel] = useState()
const [penerima, setPenerima]= useState()
const [phone, setPhone] =useState()

const [provinsi, setProvinsi] = useState({name:'', uuid:''})
const [regency, setRegency] = useState({ name: "", uuid: "" });
const [district, setDistrict] = useState({ name: "", uuid: "" });

const [listProv, setListProv] = useState()
const [listReg, setListReg] = useState()
const [listDist, setListDist] = useState()

const [addDetail, setAddDetail]= useState()
const [postalCode, setPostalCode] = useState()
const [note,setNote] = useState()

 const [token, setToken] = useState();

 const getToken = async () => {
   try {
     const value = await AsyncStorage.getItem("token");
     if (value !== null) {
       setToken(value);
       console.log(value);
     }
   } catch (e) {
     console.log("get Token error : ", e);
   }
 };
const listProvince =(token,key)=>{
    axios
    .get(`${BASE_URL}${url.province}?search=${key}&size=10`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{
        console.log(res.data.data)
        if(res.data.data.length > 0){
        setListProv(res.data.data);
        }

    })
    .catch((err)=>console.log(err))
}
const listRegency = (token, key) => {
  axios
    .get(`${BASE_URL}${url.regency}?province_uuid=${provinsi.uuid}&search=${key}&size=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      if (res.data.data.length > 0) {
        setListReg(res.data.data);
      }
    })
    .catch((err) => console.log(err));
};
const listDistrict = (token, key) => {
  axios
    .get(
      `${BASE_URL}${url.district}?regency_uuid=${regency.uuid}&search=${key}&size=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data.data);
      if (res.data.data.length > 0) {
        setListDist(res.data.data);
      }
    })
    .catch((err) => console.log(err));
};


useEffect(()=>{
getToken()
},[])

const Card = (props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={s.cardItem}>
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}


    return (
      <View style={s.body}>
        <SimpleHeader
          title={uuidAddress ? "Edit Alamat" : "Tambah Alamat Baru"}
          onBack={() => navigation.goBack()}
        />
        <ScrollView>
          <View style={s.container}>
            <Text style={s.titleContainer}> Detail Alamat</Text>
            <Text style={s.titleInputContainer}>Nama Penerima</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => setPenerima(text)}
              value={penerima}
            />
            <Text style={s.titleInputContainer}>Nomor HP</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              keyboardType="numeric"
            />
            <Text style={s.titleInputContainer}>Label Alamat</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => setLabel(text)}
              value={label}
            />
            <Text style={s.titleInputContainer}>Provinsi</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => {
                listProvince(token, text);
              }}
              defaultValue={provinsi.name}
            />
            {listProv?.map((item) => {
              return (
                <Card
                  label={item.name}
                  onPress={() => {
                    setProvinsi({
                      ...provinsi,
                      name: item.name,
                      uuid: item.uuid,
                    });
                    setListProv(null);
                  }}
                />
              );
            })}
            <Text style={s.titleInputContainer}>Kota</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => {
                listRegency(token, text);
              }}
              defaultValue={regency.name}
              editable={provinsi.uuid ? true : false}
            />
            {listReg?.map((item) => {
              return (
                <Card
                  label={item.name}
                  onPress={() => {
                    setRegency({
                      ...regency,
                      name: item.name,
                      uuid: item.uuid,
                    });
                    setListReg(null);
                  }}
                />
              );
            })}
            <Text style={s.titleInputContainer}>Kecamatan</Text>
            <TextInput
              style={s.inputContainer}
              defaultValue={district.name}
              editable={regency.uuid ? true : false}
              onChangeText={(text) => {
                listDistrict(token, text);
              }}
            />
            {listDist?.map((item) => {
              return (
                <Card
                  label={item.name}
                  onPress={() => {
                    setDistrict({
                      ...district,
                      name: item.name,
                      uuid: item.uuid,
                    });
                    setListDist(null);
                  }}
                />
              );
            })}
            <Text style={s.titleInputContainer}>Alamat Lengkap</Text>
            <TextInput
              style={s.inputContainer}
              multiline
              onChangeText={(text) => {
                setAddDetail(text);
              }}
              value={addDetail}
            />
            <Text style={s.titleInputContainer}>Kode Pos</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => setPostalCode(text)}
              value={postalCode}
              keyboardType="numeric"
            />
            <Text style={s.titleInputContainer}>Catatan Kurir (opsional)</Text>
            <TextInput
              style={s.inputContainer}
              onChangeText={(text) => setNote(text)}
              value={note}
            />
          </View>
          <View style={s.container}>
            <Text style={s.titleContainer}>Pin Alamat</Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: "3%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CheckBox 
            onValueChange={()=>setIsMain(!isMain)}
            value={isMain}
            />
            <Text style={[s.titleContainer, { fontWeight: "normal" }]}>
              Jadikan Alamat Utama
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              paddingHorizontal: "3%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={[s.titleInputContainer, { width: "auto", marginRight: 5 }]}
            >
              Dengan klik "Simpan", kamu menyetujui
            </Text>
            <TouchableOpacity>
              <Text style={[s.titleInputContainer, { color: colors.RED_MAIN }]}>
                Syarat & Ketentuan
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={s.submitBtn}>
            <Text style={s.textSubmitBtn}>Simpan</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
}
export default NewAddress

const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    WIDTH: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: colors.PALE_GREY,
    width: "94%",
    marginHorizontal: "3%",
    marginVertical: 15,
    borderRadius: 10,
    padding: 15,
  },
  titleContainer: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 17,
  },
  titleInputContainer: {
    fontSize: 13,
    fontFamily: "roboto",
    color: colors.GREY,
    marginTop: 10,
    width: "100%",
  },
  inputContainer: {
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    height: 40,
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 17,
  },
cardItem:{
    backgroundColor:colors.WHITE,
    borderRadius:10,
    width :'100%',
    padding : 5,
    marginVertical:2,
},
submitBtn:{
width:'94%',
marginHorizontal:'3%',
backgroundColor:colors.RED_MAIN,
borderRadius:10,
height:50,
marginVertical:15,
justifyContent:'center',
},
textSubmitBtn:{
    color:colors.WHITE,
    fontFamily:'roboto',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
}

});