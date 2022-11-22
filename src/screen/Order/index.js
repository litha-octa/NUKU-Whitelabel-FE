import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../../assets/colors";
import{DeleteIcon,FilterOrder,} from '../../assets'
import {OrderInfo} from "../../component";

const Order = ({navigation}) => {
  const example = {
    image:
    "https://tse1.mm.bing.net/th?id=OIP.Qr0x6FG4ReiTNwNg2WcBNgHaFt&pid=Api&P=0",
    name : 'Cereal',
    total :  2,
    status : 'Selesai',
    date : '10 - 11 - 2022',
    };
    return (
      <View style={s.body}>
        <ScrollView>
          <View style={s.header}>
            <Text style={s.headerText}>PesananKu</Text>
          </View>
          <View style={s.title}>
            <Image source={FilterOrder} style={s.iconHeader} />
            <TouchableOpacity style={s.btnHeader}>
              <Text style={s.btnHeaderText}>Sudah Selesai</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.btnHeader}>
              <Text style={s.btnHeaderText}>Dibatalkan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.btnHeader}>
              <Text style={s.btnHeaderText}>Belum Bayar</Text>
            </TouchableOpacity>
            <Image source={DeleteIcon} style={s.iconHeader} />
          </View>
          <View style={s.container}>
            <OrderInfo
              img={example.image}
              itemName={example.name}
              count={example.total}
              status={example.status}
              date={example.date}
              price={"5.000"}
            />
            <OrderInfo
              img={example.image}
              itemName={example.name}
              count={example.total}
              status={example.status}
              date={example.date}
              price={"5.000"}
            />
            <OrderInfo
              img={example.image}
              itemName={example.name}
              count={example.total}
              status={example.status}
              date={example.date}
              price={"5.000"}
            />
            <OrderInfo
              img={example.image}
              itemName={example.name}
              count={example.total}
              status={example.status}
              date={example.date}
              price={"5.000"}
            />
          </View>
        </ScrollView>
      </View>
    );
};
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
  title: {
    display: "flex",
    flexDirection: "row",
    height: 50,
    justifyContent: "space-around",
  },
  iconHeader: {
    width: 30,
    height: 30,
  },
  btnHeader: {
    borderWidth: 1,
    borderColor: colors.PALE_GREY,
    borderRadius: 10,
    height: 30,
    padding: 5,
  },
  btnHeaderText: {
    fontFamily: "roboto",
    color: colors.PALE_GREY,
  },
  container:{
    padding : '4%',
  }
 
});
export default Order