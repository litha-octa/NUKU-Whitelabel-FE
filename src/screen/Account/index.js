import React, {useState,useEffect} from "react";
import { View, Text, ScrollView, Image ,StyleSheet , TouchableOpacity} from "react-native";
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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { url, BASE_URL } from "../../service";
import axios from "axios";

const Account = ({navigation}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState("");
const data={
  username : 'User2132',
  phone: '08333333333',
  email:'user323@email.com'
}

const [token, setToken] = useState();
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      setToken(value);
    }
  } catch (e) {
    console.log(e);
  }
};
useEffect(() => {
  getData();
  if(!token){
    return
  }else{
  getUserData();
  }
}, []);

const getUserData = () => {
  axios
    .get(`${BASE_URL}${url.auth.getProfile}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) =>{
      console.log("get user data : ", res.data.data)
      setEmail(res.data.data.email);
      setPhone(res.data.data.phone);
      setUsername(res.data.data.name);
  })
    .catch((err) => console.log(err));
};

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
              <Text style={s.username}>{username? username : data.username}</Text>
              <Text style={s.phone}>{phone? phone : data.phone}</Text>
              <Text style={s.email}>{email? email : data.email}</Text>
            </View>
            <TouchableOpacity
              style={s.btnEdit}
              onPress={() => navigation.navigate("EditProfile")}
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
            <SaldoInfo saldo=" 2.000" onTopUp={()=>navigation.navigate('TopUpRoute')} />
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
            <TouchableOpacity
              style={s.list}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Image source={ProfilSaya} style={s.listImg} />
              <Text style={s.listText}>Profil Anda</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </TouchableOpacity>
            <View style={s.list}>
              <Image source={DompetIcon} style={s.listImg} />
              <Text style={s.listText}>Dompet</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <View style={s.list}>
              <Image source={AlamatIcon} style={s.listImg} />
              <Text style={s.listText}>Alamat</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <View style={s.list}>
              <Image source={FavoritIcon} style={s.listImg} />
              <Text style={s.listText}>Favorit</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <View style={s.list}>
              <Image source={VoucherIcon} style={s.listImg} />
              <Text style={s.listText}>Voucher</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <View style={s.list}>
              <Image source={RiwayatTransaksi} style={s.listImg} />
              <Text style={s.listText}>Riwayat Transaksi</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <View style={s.list}>
              <Image source={ModalKerjaIcon} style={s.listImg} />
              <Text style={s.listText}>Modal Kerja</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
            <TouchableOpacity
              style={s.list}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image source={PengaturanIcon} style={s.listImg} />
              <Text style={s.listText}>Pengaturan</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </TouchableOpacity>
            <View style={s.list}>
              <Image source={FAQ} style={s.listImg} />
              <Text style={s.listText}>Ada Yang Mau Ditanyakan ?</Text>
              <Image source={ArrowGreyIcon} style={s.listRightImg} />
            </View>
          </View>
          <TouchableOpacity style={s.logoutBtn}>
            <Text style={s.logoutBtnText}>Keluar Akun</Text>
          </TouchableOpacity>
          <Image source={WatermarkBottom} style={s.watermark} />
        </ScrollView>
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
    textTransform:'capitalize',
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
    width: '100%',
    height: 80,
    resizeMode:'contain',
    alignSelf: "center",
  },

  list: {
    display: "flex",
    flexDirection: "row",
    borderBottomColor: colors.GREY,
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 15,
  },
  listImg: {
    width: 30,
    height: 30,
    marginHorizontal: "2%",
    marginBottom: 5,
  },
  listRightImg: {
    width: 20,
    height: 20,
    marginHorizontal: "2%",
  },
  listText: {
    fontFamily: "roboto",
    fontSize: 15,
    color: colors.GREY,
    fontWeight: "bold",
    width: "80%",
  },
  logoutBtn: {
    backgroundColor: "#FC2C2C",
    width :'90%',
    marginHorizontal:'5%',
    marginVertical:20,
    borderRadius:10,
    padding:10,
    height:60,
  },
  logoutBtnText:{
    color:colors.WHITE,
    textAlign:'center',
    marginTop:10,
    fontSize:18,
    fontWeight:'bold',
  },
  watermark:{
    marginHorizontal:'35%',
    marginBottom:'15%',
    width:'30%',
    height:50,
    resizeMode:'contain',
  }
});