import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, StyleSheet, ScrollView, BackHandler, TouchableOpacity,SafeAreaView } from "react-native";
import {
  LocationIcon,
  DownArrow,
  IconChat,
  IconKeranjang,
  IconNotif,
  BannerAds,
  BelanjainIcon,
  AnterinIcon,
  CallCenterIcon,
  KiriminIcon,
  PulsaIcon,
  KuotaIcon,
  ListrikIcon,
  RightArrow,
  BannerMini,
  BannerVacation,
  RightArrowRed,
  StoreIcon,
  ArrowGreyIcon,
  ArrowRedIcon,
} from "../../assets";
import colors from "../../assets/colors";
import { 
      SaldoInfo,
      Kategori,
      CardProduct,
      Assistant,
      AssistantModal,
      TiketCenter,
      CardMerchant,
    } from "../../component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { url, BASE_URL, UUID } from "../../service";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";




const Home = ({navigation, route}) => {
   const isFocused = useIsFocused();
  const [bestProduct, setBestProduct] = useState();
  const [storeList , setStoreList] = useState()
  const [bestStore, setBestStore] = useState()
  const [saldo , setSaldo]= useState()


  const [token, setToken] = useState();
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        setToken(value);
        console.log(value)
        ProductUnggulan(value)
        getSaldo(value)
        getOfficialStore(value, 3)
        getOfficialStore(value, 20)

    }} catch (e) {
      console.log('get Token error : ', e);
    }
  };



  const ProductUnggulan =(x)=>{
    axios 
    .get(`${BASE_URL}${url.product}?page=1&size=5`,
    {
      headers: {
        'Authorization': `Bearer ${x}`,
      },
    })
    .then((res)=>{
    console.log(res.data.data)
    setBestProduct(res.data.data)
    })

    .catch((err)=>console.log('get product error : ',err))
  };

  const getOfficialStore = (x, y) => {
    axios
    .get(`${BASE_URL}${url.merchant}?page=1&size=${y}&local_uuid=${UUID}`, {
      headers: {
        Authorization: `Bearer ${x}`,
      },
    })
    .then((res) => {
      console.log('merchant list : ' , res.data.data);
      if(y === 3){
        setBestStore(res.data.data)
      }else{
        setStoreList(res.data.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const getSaldo = (x) => {
  axios
    .get(`${BASE_URL}${url.balance.total}`, {
      headers: {
        Authorization: `Bearer ${x}`,
      },
    })
    .then((res) => {
      console.log(res.data.data)
      storeItem("saldo", res.data.data.balance_total_label);
      setSaldo(res.data.data)

    })
    .catch((err) => {
      console.log(err);
    });
};

useEffect(() => {
  getToken();
}, []);
  const locationName = "Kantor Nifarro Park";

   useEffect(() => {
    if(isFocused){
     const backAction = () => {
       Alert.alert("Keluar", "Apa kamu yakin ingin ingin keluar ?", [
         { text: "Ya", onPress: () => BackHandler.exitApp() },
         {
           text: "Tidak",
           onPress: () => null,
           style: "cancel",
         },
       ]);
       return true;
     };

     const backHandler = BackHandler.addEventListener(
       "hardwareBackPress",
       backAction
     );

     return () => backHandler.remove();
   }}, [navigation, isFocused]);

   const DigitalProduct = (props) =>{
return (
  <TouchableOpacity style={styles.cardDigitalProduct} onPress={props.onPress}>
    <Image
      source={props.img}
      style={props.arrow ? { display: "none" } : styles.iconDigitalService}
    />
    <Text style={styles.textCardDigProd}>{props.title}</Text>
    <Image
      source={ArrowGreyIcon}
      style={props.arrow ? { width: 25, height: 25 } : { display: "none" }}
    />
  </TouchableOpacity>
);
   }

  return (
    <SafeAreaView style={{ marginBottom: 40 }}>
      <View style={styles.header}>
        <Image source={LocationIcon} style={styles.headerIcon} />
        <Text style={styles.headerText}>Dikirim ke {locationName}</Text>
        <Image
          source={DownArrow}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
        <View style={styles.headerRightIcon}>
          <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
            <Image source={IconKeranjang} style={styles.headerIcon2} />
          </TouchableOpacity>
          <Image source={IconNotif} style={styles.headerIcon2} />
          <Image source={IconChat} style={styles.headerIcon2} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <SaldoInfo
            saldo={saldo?.balance_total_label}
            onTopUp={() => navigation.navigate("TopUpRoute")}
            onLainnya={() => navigation.navigate("Payment")}
          />
          <Image source={BannerAds} style={styles.banner} />
          <Assistant
            msg='untuk mengetahui fitur apa aja yang ada di aplikasi, kamu bisa tekan
          icon " ? " agar tau lebih detail.'
          />
        </View>
        <View style={styles.body}>
          <AssistantModal
            title="Transportasi & Delivery"
            msg="di fitur Transportasi dan Delivery, kamu bisa mendapatkan pelayanan dianter oleh ojek online kami, lalu bisa minta belanjain makanan yang kamu inginkan, dan bisa kirim barang atau produk sesuai dengan tujuan yang kamu inginkan."
          />
        </View>

        <View style={styles.pinkContainer}>
          <TouchableOpacity
            style={styles.cardInPinkContainer}
            onPress={() => navigation.navigate("TransportRoute")}
          >
            <Image source={AnterinIcon} style={styles.iconTransport} />

            <Text style={styles.textCardTransport}>NuKu Anterin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardInPinkContainer}
            onPress={() => navigation.navigate("BelanjaRoute")}
          >
            <Image source={BelanjainIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Belanja</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardInPinkContainer}
            onPress={() => navigation.navigate("KirimRoute")}
          >
            <Image source={KiriminIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Kirimin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardInPinkContainer}>
            <Image source={CallCenterIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Center</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <AssistantModal
            title="Marketplace Lokal"
            textButton="Lihat Daerah Lainnya"
            msg="di fitur marketplace lokal ini kamu bisa membeli produk-produk sesuai dengan kategorinya, dan juga asli dari UMKM itu sendiri sesuai komoditasnya masing-masing."
          />
        </View>

        <Kategori
          toKategoriCenter={() => navigation.navigate("KategoriCenter")}
        />

        <View style={styles.body}>
          <AssistantModal
            title="Bayar Tagihan & Produk Digital"
            msg="di fitur marketplace lokal ini kamu bisa membeli produk-produk sesuai dengan kategorinya, dan juga asli dari UMKM itu sendiri sesuai komoditasnya masing-masing."
          />
        </View>
        <View style={styles.pinkContainer}>
          <DigitalProduct img={PulsaIcon} title="Pulsa" />
          <DigitalProduct img={KuotaIcon} title="Paket Data" />
          <DigitalProduct img={ListrikIcon} title="PLN" />
          <DigitalProduct
            arrow
            title="Lainnya"
            onPress={() => navigation.navigate("Payment")}
          />
        </View>
        <View style={styles.body}>
          <Image source={BannerMini} style={styles.bannerMini} />
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              pressBtn={() => navigation.navigate("Product")}
              title="Produk Unggulan"
              textButton="Lihat Semua"
              msg="memberikan produk-produk yang sedang laku dan menjadi unggulan di aplikasi ini, jadi kamu gak akan ketinggalan dengan produk yang lagi trending."
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {bestProduct?.map((item, index) => {
                return (
                  <CardProduct
                    key={item.uuid}
                    onPress={() =>
                      navigation.navigate("ProductDetail", {
                        uuid: item.uuid,
                      })
                    }
                    // img,
                    // idCard={item.uuid}
                    nameProduct={item.name}
                    price={item.price}
                    // location,    ->> Lokasi Toko yang Menjual produk
                    // rate,        ->> Rate barang dari ulasan user
                    // sold,        ->> Sold Count, Bayak barang yang terjual per transaksi
                  />
                );
              })}
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Official Store"
              textButton="Lihat Semua"
              msg="di bagian ini adalah toko-toko resmi yang sudah ada di pasaran dan bekerja sama dengan pihak aplikasi."
            />
            {bestStore?.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.storeCard}
                  onPress={() =>
                    navigation.navigate("Merchant", { uuidStore: item.uuid })
                  }
                  key={item.uuid}
                >
                  <View style={{ width: "15%" }}>
                    <Image source={StoreIcon} style={styles.storeIcon} />
                  </View>
                  <Text style={styles.textStoreCard}>
                    {item.name ? item.name : "Store Name"}
                  </Text>
                  <View style={{ width: "15%" }}>
                    <Image
                      source={ArrowRedIcon}
                      style={styles.redArrowStoreCard}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Tiket Center"
              msg="pusat dari semua tiket yang bisa di pesan melalui aplikasi ini, dari mulai booking hotel, tiket wisata, dll."
            />
          </View>
        </View>
        <TiketCenter />
        <View style={styles.body}>
          <Image source={BannerVacation} style={styles.bannerMini2} />
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Rekomendasi Toko"
              textButton="Lihat Semua"
              msg="kami akan merekomendasi kan produk-produk yang sesuai dengan minat dan selera kamu."
            />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            backgroundColor: colors.WHITE,
          }}
        >
          {storeList?.map((item, index) => {
            return (
              <CardMerchant
                onPress={() => {
                  navigation.navigate("Merchant", { uuidStore: item.uuid });
                }}
                merchantName={item.name}
                kategori={item.slogan}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    paddingHorizontal: "5%",
    paddingVertical: 10,
  },
  //   HEADER STYLE
  header: {
    backgroundColor: colors.WHITE,
    height: "auto",
    padding: 5,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  headerIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  headerIcon2: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  headerText: {
    color: colors.GREY,
    width: "50%",
    fontSize: 12,
    fontFamily: "roboto",
  },
  headerRightIcon: {
    display: "flex",
    flexDirection: "row",
    width: "35%",
    marginLeft: "4%",
    justifyContent: "space-around",
  },
  banner: {
    height: 200,
    resizeMode: "contain",
    width: "100%",
  },
  pinkContainer: {
    backgroundColor: colors.PINK,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: "2%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 15,
  },
  cardInPinkContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    padding: 10,
    width: "22%",
  },
  bgIconTransport: {
    padding: 5,
    backgroundColor: colors.PINK,
    borderRadius: 15,
  },
  iconTransport: {
    width: 55,
    height: 55,
    alignSelf: "center",
  },
  textCardTransport: {
    color: colors.BLACK,
    fontSize: 10,
    fontWeight: "bold",
    marginVertical: 5,
  },
  cardDigitalProduct: {
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    paddingVertical: 5,
    borderRadius: 10,
    width: "22%",
  },
  iconDigitalService: {
    width: 20,
    height: 25,
  },
  textCardDigProd: {
    fontSize: 11,
    fontFamily: "roboto",
    marginTop: 3,
    paddingLeft: 4,
    width: "70%",
  },
  bannerMini: {
    marginVertical: 15,
    width: "100%",
    height: 88,
    resizeMode: "contain",
    borderRadius: 10,
  },
  bannerMini2: {
    marginVertical: 15,
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  storeCard: {
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    elevation: 6,
    marginVertical: 10,
    borderRadius: 10,
  },
  textStoreCard: {
    width: "70%",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: "5%",
  },
  storeIcon: {
    width: 35,
    height: 35,
  },
  redArrowStoreCard: {
    width: 35,
    height: 35,
  },
});
export default Home;
