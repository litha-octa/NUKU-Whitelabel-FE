import React, {useState,useEffect} from "react";
import { View, Text, ScrollView, Image ,StyleSheet,Alert ,TouchableOpacity} from "react-native";
import colors from "../../assets/colors";
import {
  DefaultProfileIcon,
  IconEdit,
  QuestIcon,
  BelumBayarIcon,
  DikemasIcon,
  DikirimIcon,
  RatingIcon,
  ProfilSaya,
  DompetIcon,
  AlamatIcon,
  FavoritIcon,
  VoucherIcon,
  RiwayatTransaksi,
  ModalKerjaIcon,
  PengaturanIcon,
  FAQ,
  WatermarkBottom,
  ArrowGreyIcon,
} from "../../assets";
import {Assistant, SaldoInfo, AssistantModal,} from '../../component'
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url, BASE_URL } from "../../service";
import axios from "axios";

const Account = ({navigation, route}) => {
   const isFocused = useIsFocused();

   const [modalVisible, setModalVisible] = useState(false)
  const [userData, setUserData] = useState('')
const data={
  username : 'User2132',
  phone: '08333333333',
  email:'user323@email.com'
}

const [token, setToken] = useState(null);
const [saldo, setSaldo] = useState();
const [phone,setPhone] = useState()

 
const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null && key === 'token') {
       setToken(value)
       getUserData(value)
    }else if(value !== null && key === 'saldo') {
      setSaldo(value)
    }else{
      console.log(value)
    }
  } catch (e) {
    console.log(e);
  }
};

const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getUserData = (token) => {
axios.get(`${BASE_URL}${url.auth.getProfile}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then((res)=>{
  console.log(res.data.data)
  getCurrentData(token, res.data.data.name)

 
})
.catch((err)=>{console.log(err)})
};

const getCurrentData = (token, x) => {
  let formData = new FormData();
  formData.append("_method", "PUT");
  formData.append("name", x);

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
      console.log(res.data.data)
      setUserData(res.data.data)
        setPhone(res.data.data.phone)
        storeItem("email", res.data.data.email)
        storeItem("phone", res.data.data.phone)
      storeItem("username", res.data.data.name)
      storeItem("dob", res.data.data.dob)
      storeItem("jk", res.data.data.gender.toString())
    })
    .catch((err) => console.log(err));
};

const rmToken = async () => {
  try {
   await AsyncStorage.clear();
  } catch (e) {  
    console.log(e)
  }

  console.log("Done.");
};

const logoutHandler = () => {
 axios({
           method: "POST",
           url: `${BASE_URL}${url.auth.logout}`,
           headers: {
            Authorization: `Bearer ${token}`,
             "Access-Control-Allow-Origin": "*",
           },
        })
    .then((res) => {
      console.log("respon log out handler : ", res.data);
      if(res.data.status === 200 && res.data.message === 'success'){
        rmToken()
        Alert.alert('Anda telah keluar')
        setModalVisible(!modalVisible);
        navigation.navigate('LoginRoute')
      }
    })
    .catch((err) => console.log("error log out handler : ", err));
};

useEffect(() => {
  if (isFocused) {
     getItem('token')
     getItem('saldo')
  }
}, [navigation, isFocused]);

const MyActivity =(props)=>{
  return (
    <TouchableOpacity
      style={s.list}
      onPress={props.onPress}
    >
      <Image source={props.img} style={s.listImg} />
      <Text style={s.listText}>{props.title}</Text>
      <Image source={ArrowGreyIcon} style={s.listRightImg} />
    </TouchableOpacity>
  );
}

    return (
      <View style={s.body}>
        <ScrollView>
          <View style={s.header}>
            <Text style={s.headerText}>AkunKu</Text>
          </View>
          <View style={s.dataUser}>
            <Image source={DefaultProfileIcon} style={s.profileImg} />
            <View
              style={{
                width: "75%",
              }}
            >
              <Text style={s.username}>
                {userData?.name ? userData?.name : data.name}
              </Text>
              <Text style={s.phone}>{phone ? phone : data.phone}</Text>
              <Text style={s.email}>
                {userData?.email ? userData?.email : data.email}
              </Text>
            </View>
            <TouchableOpacity
              style={s.btnEdit}
              onPress={() =>
                navigation.navigate("EditProfile")
              }
            >
              <Image source={IconEdit} style={s.btnEditIcon} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: "3%",
              width: "90%",
              marginHorizontal: "5%",
            }}
          >
            <Assistant msg="Hay, apakah kamu mau ikutan buka toko juga di aplikasi ini, yuk ikutan gabung dengan klik tombol di bawah ini." />
            <TouchableOpacity style={s.openStore}>
              <Text style={s.openStoreText}>Gabung Buka Toko</Text>
            </TouchableOpacity>
            <SaldoInfo
              saldo={saldo}
              onTopUp={() => navigation.navigate("TopUpRoute")}
              onLainnya={() => navigation.navigate("Payment")}
            />
            <View style={{ marginVertical: 10 }}>
              <AssistantModal
                title="Pesanan Kamu"
                textButton="Lihat Semua"
                msg="Proses pesanan kamu dari mulai di kirim sampai selesai ada di sini."
              />
            </View>
          </View>
          <View style={s.orderlistContainer}>
            <TouchableOpacity style={s.card}>
              <Image source={BelumBayarIcon} style={s.cardImg} />
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Image source={DikemasIcon} style={s.cardImg} />
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Image source={DikirimIcon} style={s.cardImg} />
            </TouchableOpacity>
            <TouchableOpacity style={s.card}>
              <Image source={RatingIcon} style={s.cardImg} />
            </TouchableOpacity>
          </View>
          <View style={s.body}>
            <View
              style={{
                width: "90%",
                marginHorizontal: "5%",
                marginVertical: 10,
              }}
            >
              <AssistantModal title="Aktivitas Saya" />
            </View>
          </View>
          <View>
            <MyActivity
              onPress={() => navigation.navigate("EditProfile", {token: token})}
              img={ProfilSaya}
              title="Profil Anda"
            />
            <MyActivity
              // onPress={() => ()}
              img={DompetIcon}
              title="Dompet"
            />
            <MyActivity
              // onPress={() => ()}
              img={AlamatIcon}
              title="Alamat"
            />
            <MyActivity
              // onPress={() => ()}
              img={FavoritIcon}
              title="Favorit"
            />
            <MyActivity
              // onPress={() => ()}
              img={VoucherIcon}
              title="Voucher"
            />
            <MyActivity
              onPress={() => navigation.navigate("Favorit")}
              img={FavoritIcon}
              title="Favorit"
            />
            <MyActivity
              // onPress={() => ()}
              img={RiwayatTransaksi}
              title="Riwayat Transaksi"
            />
            <MyActivity
              // onPress={() => ()}
              img={ModalKerjaIcon}
              title="Modal Kerja"
            />
            <MyActivity
              onPress={() => navigation.navigate("Settings")}
              img={PengaturanIcon}
              title="Pengaturan"
            />
            <MyActivity
              // onPress={() => ()}
              img={FAQ}
              title="Ada Yang Mau Ditanyakan ?"
            />
          </View>
          <TouchableOpacity
            style={s.logoutBtn}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={s.logoutBtnText}>Keluar Akun</Text>
          </TouchableOpacity>
          <Image source={WatermarkBottom} style={s.watermark} />
        </ScrollView>
        <AssistantModal
          sadFace
          confirm="Apa Kamu Yakin Ingin Keluar ?"
          visible={modalVisible}
          onCancel={() => setModalVisible(!modalVisible)}
          onOk={logoutHandler}
        />
      </View>
    );
}
export default Account;
const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    width: "100%",
    height: 60,
    padding: 10,
  },
  headerText: {
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: colors.BLACK,
  },
  dataUser: {
    width: "96%",
    marginHorizontal: "2%",
    display: "flex",
    flexDirection: "row",
  },
  profileImg: {
    width: "10%",
    height: "auto",
    resizeMode: "contain",
    margin: "2%",
  },
  username: {
    marginTop: 5,
    fontFamily: "roboto",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.BLACK,
  },
  phone: {
    fontFamily: "roboto",
    fontSize: 12,
    color: colors.BLACK,
  },
  email: {
    fontFamily: "roboto",
    fontSize: 11,
    color: colors.BLACK,
  },
  btnEdit: {
    width: "10%",
    justifyContent: "center",
  },
  btnEditIcon: {
    width: 30,
    height: 30,
  },
  openStore: {
    backgroundColor: colors.RED_MAIN,
    borderRadius: 15,
    height: 40,
    marginVertical: "2%",
    justifyContent: "center",
  },
  openStoreText: {
    color: colors.WHITE,
    fontFamily: "roboto",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  quest: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 40,
    marginVertical: "5%",
    paddingVertical: 5,
  },
  questImg: {
    width: 30,
    height: 30,
  },
  questText: {
    fontSize: 15,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    marginTop: 2,
    width: "65%",
    marginLeft: "3%",
  },
  questBtn: {
    backgroundColor: colors.PINK,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.RED_MAIN,
    borderWidth: 1,
    textAlign: "center",
  },
  questTextBtn: {
    fontSize: 13,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
  },
  orderlistContainer: {
    backgroundColor: colors.PINK,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: "2%",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.WHITE,
    width: "23%",
    borderRadius: 15,
  },
  cardImg: {
    width: "100%",
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
  },

  list: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 15,
    paddingHorizontal: "4%",
  },
  listImg: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  listRightImg: {
    width: 25,
    height: 25,
  },
  listText: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.GREY,
    fontWeight: "bold",
    width: "80%",
    paddingLeft:'2%',
  },
  logoutBtn: {
    backgroundColor: "#FC2C2C",
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
    height: 60,
  },
  logoutBtnText: {
    color: colors.WHITE,
    textAlign: "center",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  watermark: {
    marginHorizontal: "35%",
    marginBottom: "15%",
    width: "30%",
    height: 50,
    resizeMode: "contain",
  },
});