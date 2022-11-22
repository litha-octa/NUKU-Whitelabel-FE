import React, {useState} from "react";
import { View, Text, Image, TextInput,StyleSheet, ScrollView} from "react-native";
import colors from "../../assets/colors";
import { FilterOrderRed, IconHot, SearchIcon, CommentIcon, ThreeDot } from "../../assets/img";

const News = () => {
    const dummyNews = [
      {
        img: "https://cdn0-production-images-kly.akamaized.net/15n-BiCIOkh8c5nvM4OHClmZClc=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3162119/original/067616700_1593065878-nasim-keshmiri-cdXwe6nROs8-unsplash.jpg",
        title: "Mengenal Berbagai Jenis Benang yang Jarang Orang Ketahui",
        desc: "Berbagai jenis benang dibutuhkan untuk menghasilkan kain yang tadinya tidak bisa digunakan menjadi pakaian yang bermanfaat untuk banyak",
        source: "Liputan 6",
        comment: 10,
      },
      {
        img: "https://cdn0-production-images-kly.akamaized.net/tQrf1-k7fVyGgxQjJiT0al6bWsg=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4204036/original/095464000_1666764766-20221026-Sidang-Putusan-Sela-Putri-Candrawathi-Faizal-6.jpg",
        title:
          "Kasih Jawaban Tak Konsisten, ART Ferdy Sambo Diminta Hakim Dihadirkan Tiap Sidang",
        desc: "Bukan tanpa alasan, Susi bersama Brigadir J dan Putri Candrawathi yang mengetahui secara mendetail. Namun, para hakim malah dibuat bingung",
        source: "Liputan 6",
        comment: 6,
      },
      {
        img: "https://cdn0-production-images-kly.akamaized.net/zgIu_fM-FtY1nnhtQMMab-ohTwc=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/679846/original/ilustrasi-penganiayaan-140520-andri.jpg",
        title:
          "Viral Pasutri Siksa dan Sekap ART di Cilame Bandung Barat, Pelaku Sudah Ditangkap",
        desc: "ART berinisial R disekap dan dianiaya majikannya yang merupakan sepasang suami istri berinisial YK dan LF",
        source: "Liputan 6",
        comment: 9,
      },
      {
        img: "https://cdn0-production-images-kly.akamaized.net/zgIu_fM-FtY1nnhtQMMab-ohTwc=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/679846/original/ilustrasi-penganiayaan-140520-andri.jpg",
        title:
          "Viral Pasutri Siksa dan Sekap ART di Cilame Bandung Barat, Pelaku Sudah Ditangkap",
        desc: "ART berinisial R disekap dan dianiaya majikannya yang merupakan sepasang suami istri berinisial YK dan LF",
        source: "Liputan 6",
        comment: 9,
      },
      {
        img: "https://cdn0-production-images-kly.akamaized.net/zgIu_fM-FtY1nnhtQMMab-ohTwc=/200x112/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/679846/original/ilustrasi-penganiayaan-140520-andri.jpg",
        title:
          "Viral Pasutri Siksa dan Sekap ART di Cilame Bandung Barat, Pelaku Sudah Ditangkap",
        desc: "ART berinisial R disekap dan dianiaya majikannya yang merupakan sepasang suami istri berinisial YK dan LF",
        source: "Liputan 6",
        comment: 9,
      },
    ];
    

    return (
      <View style={s.body}>
        <View style={s.headers}>
          <View style={s.inputHeader}>
            <Image source={SearchIcon} style={s.searchIcon} />
            <TextInput placeholder="Cari Berita Viral Hari Ini" />
          </View>
        </View>

        <View style={s.filterContainer}>
          <View style={s.filterItem}>
            <Image source={IconHot} style={{ marginHorizontal: 5 }} />
            <Text style={s.itemText}>Hot</Text>
          </View>
          <View style={s.filterItem}>
            <Text>Terkini</Text>
          </View>
          <View style={s.filterItem}>
            <Text>Kemarin</Text>
          </View>
          <View style={s.filterItem}>
            <Text>Hiburan</Text>
          </View>
          <View style={s.filterItem}>
            <Image source={FilterOrderRed} />
          </View>
        </View>
        <ScrollView>
          <View style={s.container}>
            {dummyNews.map((item, index) => {
              return (
                <View style={s.card}>
                  <Image source={{ uri: item.img }} style={s.img} />
                  <View>
                    <Text style={s.title}>{item.title}</Text>
                    <Text style={s.desc}>{item.desc}</Text>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginVertical: 18,
                      }}
                    >
                      <Text style={s.source}>{item.source}</Text>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: 50,
                        }}
                      >
                        <Image source={CommentIcon} />
                        <Text style={s.comment}>{item.comment}</Text>
                      </View>

                      <Image source={ThreeDot} style={s.treeDot} />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
}
export default News;
const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "100%",
  },
  headers: {
    height: 60,
    padding: 10,
  },
  inputHeader: {
    backgroundColor: colors.PALE_GREY,
    width: "90%",
    height: 35,
    marginHorizontal: "5%",
    borderRadius: 5,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    padding: 3,
  },
  searchIcon: {
    width: 23,
    height: 20,
    resizeMode: "contain",
    marginTop: 5,
    marginHorizontal: 10,
  },
  filterContainer: {
    marginTop: 20,
    width: "96%",
    marginHorizontal: "2%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterItem: {
    display: "flex",
    flexDirection: "row",
  },
  itemText: {
    color: colors.RED_MAIN,
    borderBottomColor: colors.RED_MAIN,
    borderBottomWidth: 2,
    fontWeight: "bold",
  },
  container: {
    marginVertical: 20,
    paddingHorizontal: "2%",
  },
  card: {
    width: "100%",
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    marginBottom: 20,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  title: {
    fontFamily: "roboto",
    fontSize: 12,
    fontWeight: "bold",
    color: colors.BLACK,
    width: 280,
    marginLeft: 10,
  },
  desc: {
    fontFamily: "roboto",
    fontSize: 10,
    fontWeight: "normal",
    color: colors.RED_MAIN,
    width: 280,
    marginLeft: 10,
  },
  source: {
    fontFamily: "roboto",
    fontSize: 10,
    fontWeight: "normal",
    color: colors.GREY,
    width: 70,
    marginLeft: 10,
  },
  comment: {
    fontFamily: "roboto",
    fontSize: 13,
    fontWeight: "normal",
    color: colors.GREY,
    width: 70,
  },
  treeDot: {
    marginLeft: 95,
    width : 30,
    height:10,
    resizeMode:'contain',
  },
});