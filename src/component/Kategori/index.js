import React from 'react'
import {
  BuahSayur,
  Elektronik,
  Fashion,
  Kesehatan,
  LainnyaKategori,
  MakananMinuman,
  OlehOleh,
  Pertanian,
  Perternakan,
  Seafood,
  UMKM,
} from '../../assets'
import {View,Text, Image, StyleSheet,ScrollView} from 'react-native';
import colors from '../../assets/colors';


const Kategori = () => {
 const list = [
   {
     id: 0,
     name: "Kategori Lainnya",
     img: LainnyaKategori,
   },
   {
     id: 1,
     name: "Hasil Tani",
     img: Pertanian,
   },
   {
     id: 2,
     name: "Hasil Ternak",
     img: Perternakan,
   },
   {
     id: 3,
     name: "Buah & Sayur",
     img: BuahSayur,
   },
   {
     id: 4,
     name: "Perikanan",
     img: Seafood,
   },
   {
     id: 5,
     name: "Kuliner",
     img: MakananMinuman,
   },
   {
     id: 6,
     name: "Elektronik",
     img: Elektronik,
   },
   {
     id: 7,
     name: "Fashion",
     img: Fashion,
   },
   {
     id: 8,
     name: "Produk UMKM",
     img: UMKM,
   },
   {
     id: 9,
     name: "Kesehatan",
     img: Kesehatan,
   },
   {
     id: 10,
     name: "Kerajinan",
     img: OlehOleh,
   },
 ]
 return (
   <View style={s.container}>
     <ScrollView>
       <Image source={list[2].img} />
       {list.map((item, index) => {
         return (
           <View style={s.card} key={index}>
             <Image source={item.img} />
             <Text>{item.name}</Text>
           </View>
         );
       })}
     </ScrollView>
   </View>
 );
}
export default Kategori;
const s = StyleSheet.create({
  container: {
    backgroundColor: colors.PINK,
    width: "auto",
    height: 100,
  },
  card: {
    width:50,
    height:50,
    backgroundColor: colors.WHITE,
  },
});
