import React, {useState, useEffect} from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native'
import colors from '../../assets/colors'
import {  DefaultProfileIcon} from '../../assets'
import { SimpleHeader } from "../../component"
import AsyncStorage    from "@react-native-async-storage/async-storage"
import axios from "axios"
import { BASE_URL, url } from "../../service"
import { useIsFocused } from "@react-navigation/native"


const EditProfile = ({navigation, route}) => {
  const [currentUsername, setCurrentUsername] = useState(null);
  const [currentEmail, setCurrentEmail] = useState();
  const [currentPhone, setCurrentPhone] = useState();
  const [currentDob, setCurrentDob] = useState();
  const [currentJk, setCurrentJk] = useState();
  const [token, setToken] = useState()
  const isFocused = useIsFocused();

  const [edit, setEdit] = useState(false);


  const [newUsername, setNewUsername] = useState(null)
  const [newEmail, setNewEmail] = useState(null)
  const [newPhone, setNewPhone] = useState(null)
  const [newDob, setNewDob] = useState(null)
  const [newJk, setNewJk] = useState(null)


  const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(key==='token'){
      setToken(value)
      }else if (key === "username") {
        setCurrentUsername(value);
      } else if (key === "email") {
        setCurrentEmail(value);
      } else if (key === "phone") {
        setCurrentPhone(value);
      } else if (key === "jk") {
         setCurrentJk(value);
      } else if (key === "dob") {
        setCurrentDob(value);
      } else {
        console.log(value);
      }
    } catch (e) {
      console.log("get Token error : ", e);
    }
  };

  const cekGender = (x) =>{
    if(x === '1'){
      return ('Pria')
    }else if (x === '2'){
      return ('Wanita')
    }else{
      return (null)
    }
  }
const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e)
  }
}; 
const updateHndler = ()=>{
  let formData = new FormData()
   formData.append("_method", "PUT")
   formData.append('name', newUsername? newUsername : currentUsername)
  newEmail !== currentEmail && newEmail !== null ? formData.append('email', newEmail): null
  newPhone !== currentPhone && newPhone !== null ? formData.append('phone', newPhone):null
  newJk !== currentJk && newJk !==null ? formData.append('gender', newJk):null
  newDob !== currentDob && newDob !== null? formData.append('dob', newDob):null


axios({
  method: "POST",
  url: `${BASE_URL}${url.auth.update}`,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
  data: formData,
})
  .then((res) => {
    const removeFew = async () => {
      const keys = ["email", 'phone', 'dob','jk'];
      try {
        await AsyncStorage.multiRemove(keys);
      } catch (e) {
        // remove error
      }

      console.log("Done");
    };
    removeFew()
    console.log("edited data : ", res.data);
    if(res.data.status === 200){
      storeItem('username', res.data.data.name);
      navigation.goBack()
    }
  })
  .catch((err) => console.log(err));
}

    const data = {
        nama : 'syahrul ramdan',
        tanggalLahir: '25 November 2022',
        jenisKelamin : 'pria',
        email : 'syarulramdan123@gmail.com',
        phone : '08382267384038',
    }

    useEffect(() => {
      if(isFocused){ 
      getData("token")
      getData("username")
      getData("email")
      getData("phone")
      getData("jk")
      getData("dob");
      
    }
    }, [navigation, isFocused]);

    
    return (
      <View style={{ backgroundColor: colors.WHITE, height: "100%" }}>
        <SimpleHeader title="profil saya" onBack={() => navigation.goBack()} />
        <ScrollView>
          <View style={s.profilePicContainer}>
            <Image source={DefaultProfileIcon} style={s.profilePic} />
            <Text style={s.profilePicText}>
              Klik untuk mengubah Foto Profil
            </Text>
          </View>
          <View style={s.body}>
            <KeyboardAvoidingView>
              <View style={s.card}>
                <Text style={s.titleData}>Nama</Text>
                <View style={s.row}>
                  <TextInput
                    style={edit === false ? s.valueDataDisable : s.valueData}
                    value={newUsername}
                    editable={edit}
                    selectTextOnFocus={edit}
                    onChangeText={(text) => {
                      setNewUsername(text);
                    }}
                    defaultValue={currentUsername}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setEdit(!edit);
                    }}
                    style={{
                      width: "20%",
                      backgroundColor: colors.BG_FAILED,
                      alignItems: "center",
                      marginTop: 5,
                    }}
                  >
                    <Text style={s.btnEdit}>
                      {edit === false ? "Ubah" : "Batal"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={s.card}>
                <Text style={s.titleData}>Tanggal Lahir</Text>
                <View style={s.row}>
                  <TextInput
                    style={edit === false ? s.valueDataDisable : s.valueData}
                    value={newDob}
                    editable={edit}
                    selectTextOnFocus={edit}
                    onChangeText={(text) => {
                      setNewDob(text);
                    }}
                    defaultValue={currentDob}
                  />
                </View>
              </View>
              <View style={s.card}>
                <Text style={s.titleData}>Jenis Kelamin</Text>
                <View style={s.row}>
                  <TextInput
                    style={edit === false ? s.valueDataDisable : s.valueData}
                    value={newJk}
                    editable={edit}
                    selectTextOnFocus={edit}
                    onChangeText={(text) => {
                      setNewJk(text);
                    }}
                    defaultValue={cekGender(currentJk)}
                  />
                </View>
              </View>
              <View style={s.card}>
                <Text style={s.titleData}>Email</Text>
                <View style={s.row}>
                  <TextInput
                    style={s.valueDataDisable}
                    value={newEmail}
                    editable={false}
                    selectTextOnFocus={false}
                    onChangeText={(text) => {
                      setNewEmail(text);
                    }}
                    defaultValue={currentEmail}
                  />
                </View>
              </View>

              <View style={s.card}>
                <Text style={s.titleData}>No. Handphone</Text>
                <View style={s.row}>
                  <TextInput
                    style={edit === false ? s.valueDataDisable : s.valueData}
                    value={newPhone}
                    editable={edit}
                    selectTextOnFocus={edit}
                    onChangeText={(text) => {
                      setNewPhone(text);
                    }}
                    defaultValue={currentPhone}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={
                  newUsername !== null ||
                  newEmail !== null ||
                  newPhone !== null ||
                  newDob !== null ||
                  newJk !== null
                    ? s.btnUpdate
                    : { display: "none" }
                }
                onPress={() => updateHndler()}
              >
                <Text style={s.textBtnUpdate}>Simpan perubahan</Text>
              </TouchableOpacity>
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
    height: "100%",
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
    paddingVertical: 7,
    width: "100%",
  },
  titleData: {
    color: colors.GREY,
    fontSize: 13,
    fontFamily: "roboto",
    width: "100%",
    textTransform: "capitalize",
  },
  valueData: {
    color: colors.BLACK,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
    width: "80%",
    textTransform: "capitalize",
  },
  valueDataDisable: {
    color: colors.GREY,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
    width: "80%",
    textTransform: "capitalize",
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
  btnUpdate:{
    width :'100%',
    height:40,
    backgroundColor:colors.RED_MAIN,
    marginVertical:10,
    justifyContent:'center',
    borderRadius:15,
  },
  textBtnUpdate:{
    fontSize:18,
    textAlign:'center',
    color:colors.WHITE,
    fontWeight:'bold',
    fontFamily:'roboto',
  }
});