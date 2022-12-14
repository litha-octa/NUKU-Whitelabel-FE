import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import {SimpleHeader} from '../../component'
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
  DaerahLain,
  ArrowGreyIcon,
} from "../../assets";
import colors from "../../assets/colors";

const KategoriCenter=({navigation})=>{

const Card = (props) =>{
    return (
      <TouchableOpacity style={s.card} onPress={props.onPress}>
        <Image source={props.img} style={s.cardImg} />
        <Text style={s.cardText}>{props.title}</Text>
        <Image source={ArrowGreyIcon} style={s.cardArrow}/>
      </TouchableOpacity>
    );
}


    return (
      <View style={s.body}>
        <SimpleHeader title="Kategori Center" onBack={()=>navigation.goBack()} />
        <ScrollView>
          <Card
            img={DaerahLain}
            title="Lihat Daerah Lain"
            // onPress={}
          />
          <Card
            img={Pertanian}
            title="Hasil Tani"
            // onPress={}
          />
          <Card
            img={Perternakan}
            title="Peternakan"
            // onPress={}
          />
          <Card
            img={BuahSayur}
            title="Perkebunan"
            // onPress={}
          />
          <Card
            img={Seafood}
            title="Seafood"
            // onPress={}
          />
          <Card
            img={MakananMinuman}
            title="Makanan & Minuman"
            // onPress={}
          />
          <Card
            img={OlehOleh}
            title="Oleh-Oleh"
            // onPress={}
          />
          <Card
            img={Fashion}
            title="Aksesoris & Pakaian"
            // onPress={}
          />
          <Card
            img={Elektronik}
            title="Elektronik"
            // onPress={}
          />
          <Card
            img={UMKM}
            title="Produk UMKM"
            // onPress={}
          />
          <Card
            img={Kesehatan}
            title="Kesehatan"
            // onPress={}
          />
        </ScrollView>
      </View>
    );
}
export default KategoriCenter

const s = StyleSheet.create({
    body:{
        backgroundColor:colors.WHITE,
        width:'100%',
        height:'100%',
    },
    card:{
        width : '100%',
        display:'flex',
        flexDirection:'row',
        borderBottomColor:colors.PALE_GREY,
        borderBottomWidth:1,
        paddingHorizontal:'5%',
        paddingBottom:10,
        marginVertical:15,
    },
    cardImg:{
        width : 60,
        height: 60,
    },
    cardText:{
        textAlignVertical:'center',
        fontFamily:'roboto',
        fontWeight:'bold',
        fontSize:16,
        color:colors.BLACK,
        width:'70%',
        marginLeft:'5%',
    },
    cardArrow:{
        width:   40,
        height:  40,
        marginTop:10,
    }
})