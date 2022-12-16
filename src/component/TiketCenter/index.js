import React from 'react'
import {
  HotelTiketIcon,
  EventTiketIcon,
  WisataTiketIcon,
  ArrowRedIcon,
} from "../../assets";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import colors from '../../assets/colors';


const TiketCenter = (props) => {
const list = [
  {
    img: HotelTiketIcon,
    name: "Booking Hotel",
  },
  {
    img: WisataTiketIcon,
    name: "Tiket Wisata",
  },
  {
    img: EventTiketIcon,
    name: "Tiket Event",
  },
];


 return (
   <View style={s.container}>
     <ScrollView horizontal>
       {list.map((item,  index)=>{
        return (
          <TouchableOpacity
            style={s.card}
            key={props.key}
            onPress={props.onPress}
          >
            <Image source={item.img} style={s.img} />
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
export default TiketCenter;
const s = StyleSheet.create({
  container: {
    backgroundColor: colors.PINK,
    width: "100%",
    height: 250,
    padding:10,
  },
  card: {
    width:170,
    height:200,
    backgroundColor: colors.WHITE,
    marginHorizontal:5,
    borderRadius:15
  },
  img:{
    width : 150,
    height:180,
    marginTop:10,
    alignSelf:'center'
  },
  name:{
    textAlign:'center',
    color:colors.GREY,
  }
});
