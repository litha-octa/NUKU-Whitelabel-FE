import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,SafeAreaView } from "react-native";
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
} from "../../assets";
import colors from "../../assets/colors";
import {SaldoInfo, Kategori, Assistant, AssistantModal } from "../../component";

const Home = ({navigation}) => {
  const locationName = "Kantor Nifarro Park";
  const storeList = [
    { name: "Zarara Official" },
    { name: "Oleh-Oleh Indonesia" },
    { name: "Toko UMKM" },
  ];
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
          <TouchableOpacity onPress={()=>navigation.navigate('MyCart')}>
            <Image source={IconKeranjang} style={styles.headerIcon2} />
          </TouchableOpacity>
          <Image source={IconNotif} style={styles.headerIcon2} />
          <Image source={IconChat} style={styles.headerIcon2} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <SaldoInfo saldo="5.000" onTopUp={()=> navigation.navigate('TopUpRoute')}/>
          <Image source={BannerAds} style={styles.banner} />
          <Assistant
            msg='untuk mengetahui fitur apa aja yang ada di aplikasi, kamu bisa tekan
          icon " ? " agar tau lebih detail.'
          />
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Marketplace Lokal"
              textButton="Lihat Daerah Lainnya"
              msg="di fitur marketplace lokal ini kamu bisa membeli produk-produk sesuai dengan kategorinya, dan juga asli dari UMKM itu sendiri sesuai komoditasnya masing-masing."
            />
            <AssistantModal
              title="Transportasi & Delivery"
              msg="di fitur Transportasi dan Delivery, kamu bisa mendapatkan pelayanan dianter oleh ojek online kami, lalu bisa minta belanjain makanan yang kamu inginkan, dan bisa kirim barang atau produk sesuai dengan tujuan yang kamu inginkan."
            />
          </View>
          {/* <Kategori /> */}
          {/* NUKU SERVICE */}
        </View>
        <View style={styles.pinkContainer}>
          <TouchableOpacity style={styles.cardInPinkContainer}>
            
              <Image source={AnterinIcon} style={styles.iconTransport} />
            
            <Text style={styles.textCardTransport}>NuKu Anterin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardInPinkContainer}>
            
              <Image source={BelanjainIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Belanja</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardInPinkContainer}>
              <Image source={KiriminIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Kirimin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardInPinkContainer}>
              <Image source={CallCenterIcon} style={styles.iconTransport} />
            <Text style={styles.textCardTransport}>NuKu Center</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Bayar Tagihan & Produk Digital"
              msg="di fitur marketplace lokal ini kamu bisa membeli produk-produk sesuai dengan kategorinya, dan juga asli dari UMKM itu sendiri sesuai komoditasnya masing-masing."
            />
          </View>
        </View>
        <View style={styles.pinkContainer}>
          <TouchableOpacity style={styles.cardDigitalProduct}>
            <Image source={PulsaIcon} style={styles.iconDigitalService} />
            <Text style={styles.textCardDigProd}>Pulsa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardDigitalProduct}>
            <Image source={KuotaIcon} style={styles.iconDigitalService} />
            <Text style={styles.textCardDigProd}>Paket Data</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardDigitalProduct}>
            <Image source={ListrikIcon} style={styles.iconDigitalService} />
            <Text style={styles.textCardDigProd}>PLN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardDigitalProduct}>
            <Text style={styles.textCardDigProd}>Lainnya</Text>
            <Image source={RightArrow} style={styles.iconDigitalService} />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Image source={BannerMini} style={styles.bannerMini} />
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Produk Unggulan"
              textButton="Lihat Semua"
              msg="memberikan produk-produk yang sedang laku dan menjadi unggulan di aplikasi ini, jadi kamu gak akan ketinggalan dengan produk yang lagi trending."
            />
          </View>
        </View>
        <View style={styles.body}>
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Official Store"
              textButton="Lihat Semua"
              msg="di bagian ini adalah toko-toko resmi yang sudah ada di pasaran dan bekerja sama dengan pihak aplikasi."
            />
            {storeList.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.storeCard}
                  onPress={() =>
                    navigation.navigate("Merchant", { storeName: item.name })
                  }
                >
                  <Image source={StoreIcon} />
                  <Text style={styles.textStoreCard}>{item.name}</Text>
                  <Image source={RightArrowRed} />
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
        <View style={styles.body}>
          <Image source={BannerVacation} style={styles.bannerMini} />
          <View style={{ marginVertical: 10 }}>
            <AssistantModal
              title="Rekomendasi Produk"
              textButton="Lihat Semua"
              msg="kami akan merekomendasi kan produk-produk yang sesuai dengan minat dan selera kamu."
            />
          </View>
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
    marginHorizontal: 4,
  },
  bannerMini: {
    marginVertical: 20,
    width: "100%",
    borderRadius: 10,
  },
  storeCard: {
    backgroundColor: colors.WHITE,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 10,
    elevation: 6,
    marginVertical:10,
    borderRadius:10,
  },
  textStoreCard:{
    width:'80%',
    fontSize:15,
    fontWeight:'bold',
    marginLeft:'5%',
  }
});
export default Home;
