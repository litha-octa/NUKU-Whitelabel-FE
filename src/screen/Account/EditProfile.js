import React, {useState, useEffect} from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native'
import colors from '../../assets/colors'
import {  DefaultProfileIcon} from '../../assets'
import { SimpleHeader } from "../../component"
import AsyncStorage    from "@react-native-async-storage/async-storage"
import axios from "axios"
import { BASE_URL, url } from "../../service"


const EditProfile = ({navigation, route}) => {
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentEmail, setCurrentEmail] = useState();
  const [currentPhone, setCurrentPhone] = useState();
  const [currentDob, setCurrentDob] = useState();
  const [currentJk, seCurrentJk] = useState();
  const [token, setToken] = useState(null)


  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(key==='token'){
      setToken(value)
      }else if (key === 'username'){
        setCurrentUsername(value)
      }else{
        console.log(value)
      }
    } catch (e) {
      console.log("get Token error : ", e);
    }
  };

const getCurrentData = () =>{
  let formData = new FormData()
  formData.append('_method', 'PUT')
  formData.append("name", currentUsername);

  axios({
    method: "POST",
    url: `${BASE_URL}${url.auth.update}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    data: formData,
    redirect: "follow",
  })
    .then((res) => console.log("edited data : ", res.data))
    .catch((err) => console.log(err));
}

    const data = {
        nama : 'syahrul ramdan',
        tanggalLahir: '25 November 2022',
        jenisKelamin : 'pria',
        email : 'syarulramdan123@gmail.com',
        phone : '08382267384038',
    }

    useEffect(()=>{
       getData("token")
       getData('username')

       if(token !== null && currentUsername !== null){
        console.log(token, currentUsername)
 getCurrentData()
       }
       

    },[])

    const Card = (props)=>{
      return (
        <View style={s.card}>
          <Text style={s.titleData}>{props.title}</Text>
          <View style={s.row}>
            <TextInput style={s.valueData} value={props.value} onChangeText={props.onChangeText} defaultValue={props.defaultValue} keyboardType={props.keyboard? props.keyboard : 'default'}/>
            <TouchableOpacity onPress={props.onPress}>
              <Text style={s.btnEdit}>Ubah</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: colors.WHITE, height: "100%" }}>
        <SimpleHeader
          title="profil saya"
          onBack={() => navigation.navigate("Account")}
        />
        <ScrollView>
          <View style={s.profilePicContainer}>
            <Image source={DefaultProfileIcon} style={s.profilePic} />
            <Text style={s.profilePicText}>
              Klik untuk mengubah Foto Profil
            </Text>
          </View>
          <View style={s.body}>
            <KeyboardAvoidingView>
              <Card
                title="Nama"
                defaultValue={currentUsername}
                // onPress = {()=>{}}
              />
              <Card
                title="Tanggal Lahir"
                defaultValue={currentDob ? currentDob : data.tanggalLahir}
                keyboard="date"
                // onPress = {()=>{}}
              />
              <Card
                title="Jenis Kelamin"
                data={currentJk ? currentJk : data.jenisKelamin}
                // onPress = {()=>{}}
              />
              <Card
                title="Email"
                defaultValue={currentEmail ? currentEmail : data.email}
                keyboard="email"
                // onPress = {()=>{}}
              />
              <Card
                title="No. Handphone"
                defaultValue={currentPhone ? currentPhone : data.phone}
                keyboard="numeric"
                // onPress = {()=>{}}
              />
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
}
export default EditProfile;
const s = StyleSheet.create({
  body: {
    width: "100%",
    paddingHorizontal: "5%",
    height:'100%',
  },
  profilePicContainer: {
    borderStyle: "dashed",
    borderColor: colors.GREY,
    borderWidth: 1,
    padding: 20,
    width: "100%",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 60,
    alignSelf: "center",
  },
  profilePicText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    marginVertical: 15,
  },
  card: {
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: "100%",
  },
  titleData: {
    color: colors.GREY,
    fontSize: 13,
    fontFamily: "roboto",
    width: "100%",
  },
  valueData: {
    color: colors.BLACK,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
    width: "90%",
  },
  btnEdit: {
    color: colors.RED_MAIN,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});