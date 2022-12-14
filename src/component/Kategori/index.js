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
  ArrowRedIcon,
} from '../../assets'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from '../../assets/colors';


const Kategori = (props) => {
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
     <ScrollView horizontal>
       {list.map((item, index) => {
         return (
           <TouchableOpacity style={s.card} key={index} onPress={index === 0 ? props.toKategoriCenter : null}>
             <Image source={item.img} style={s.img} />
             <Text style={s.name}>{item.name}</Text>
           </TouchableOpacity>
         );
       })}
     </ScrollView>

     <View style={{ display: "flex", flexDirection: "row-reverse" }}>
       <Image source={ArrowRedIcon} style={{width:30, height:30}}/>
       <Text style={{marginTop:5,color:colors.RED_MAIN,fontWeight:'bold'}}>Geser</Text>
     </View>
   </View>
 );
}
export default Kategori;
const s = StyleSheet.create({
  container: {
    backgroundColor: colors.PINK,
    width: "100%",
    height: 170,
    padding:10,
  },
  card: {
    width:100,
    height:120,
    backgroundColor: colors.WHITE,
    marginHorizontal:5,
    borderRadius:15
  },
  img:{
    width : 70,
    height:70,
    marginTop:10,
    alignSelf:'center'
  },
  name:{
    textAlign:'center',
    color:colors.GREY,
  }
});
