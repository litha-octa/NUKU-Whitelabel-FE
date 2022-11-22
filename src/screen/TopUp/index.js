 import React, { useState } from "react";
 import {View, Text, StyleSheet, TextInput,TouchableOpacity,Image} from 'react-native'
import colors from "../../assets/colors";
 import {SimpleHeader, AssistantModal} from '../../component'
 import {  Saldo19On,
  Saldo19Off,
  Saldo49On,
  Saldo49Off,
  Saldo99On,
  Saldo99Off,
  Saldo199On,
  Saldo199Off,
  Saldo299On,
  Saldo299Off,
  Saldo499On,
  Saldo499Off,} from '../../assets'

 const TopUp =({navigation})=>{
    const [selectSaldo, setSelectSaldo] = useState(0)
    const [value,setValue]= useState(null)
    const [modal, setModal] = useState(false)
    const nominal = [
      {
        key: 1,
        imgOn: Saldo19On,
        imgOff: Saldo19Off,
        value: 19000,
        label: "19.000",
      },
      {
        key: 2,
        imgOn: Saldo49On,
        imgOff: Saldo49Off,
        value: 49000,
        label: "49.000",
      },
      {
        key: 3,
        imgOn: Saldo99On,
        imgOff: Saldo99Off,
        value: 99000,
        label: "99.000",
      },
      {
        key: 4,
        imgOn: Saldo199On,
        imgOff: Saldo199Off,
        value: 199000,
        label: "199.000",
      },
      {
        key: 5,
        imgOn: Saldo299On,
        imgOff: Saldo299Off,
        value: 299000,
        label: "299.000",
      },
      {
        key: 6,
        imgOn: Saldo499On,
        imgOff: Saldo499Off,
        value: 499000,
        label: "499.000",
      },
    ];

    const saldoHandler =()=>{
      if(value==null){
        setModal(true)
      }
      else{
        navigation.navigate('PaymentMethod')
      }
    }
    return (
      <View>
        <AssistantModal
        visible= {modal}
        close={()=>setModal(!modal)}
        msg = 'kamu tidak bisa melanjutkan ke step berikutnya jika belum memasukan nominal saldo yang akan kamu Top up'
        />
        <SimpleHeader title="Top Up Saldo" onBack={() => navigation.goBack()} />
        <View style={s.body}>
          <Text style={s.title}>Pilih Nominal</Text>
          <View style={s.container}>
            {nominal.map((item, index) => {
              return (
                <TouchableOpacity
                  style={s.card}
                  onPress={() => {
                    setSelectSaldo(item.key);
                    setValue(item.value);
                  }}
                  key={item.key}
                >
                  <Image
                    source={selectSaldo === item.key ? item.imgOn : item.imgOff}
                    style={s.imgCard}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <TextInput
            placeholder="+ Ketik Sendiri Nominal"
            keyboardType="numeric"
            onChangeText={(e) => setValue(e.target.value)}
            value={value}
            style={s.inputText}
          />
          <TouchableOpacity
            style={s.bottomBtn}
            onPress={() => saldoHandler()
            }
          >
            <Text style={s.bottomBtnText}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
 }
 export default TopUp
 const s = StyleSheet.create({
   body: {
     backgroundColor: colors.WHITE,
     width: "100%",
     height:'95%',
     elevation: 5,
   },
   title: {
     color: colors.RED_MAIN,
     fontFamily: "roboto",
     fontWeight: "bold",
     fontSize: 15,
     paddingHorizontal: 20,
     marginTop: 20,
     paddingBottom: 4,
     width: "100%",
     borderBottomColor: colors.PALE_GREY,
     borderBottomWidth: 1,
   },
   inputText: {
     borderColor: colors.GREY,
     borderWidth: 2,
     height: 50,
     backgroundColor: colors.PALE_GREY,
     borderRadius: 15,
     width: "90%",
     marginHorizontal: "5%",
     textAlign: "center",
     marginTop: 15,
   },
   container: {
     width: "100%",
     paddingHorizontal: "5%",
     display: "flex",
     flexDirection: "row",
     flexWrap: "wrap",
     justifyContent: "space-between",
   },
   card: {
     width: "30%",
     backgroundColor: colors.WHITE,
     borderRadius: 15,
     elevation: 8,
     marginVertical: 10,
   },
   imgCard: {
     width: "100%",
     height: 100,
     resizeMode: "contain",
   },
   textCard: {
     fontFamily: "roboto",
     fontWeight: "bold",
     fontSize: 15,
     textAlign: "center",
   },
   bottomBtn: {
     position: "absolute",
     left: 0,
     right: 0,
     bottom: 30,
     height: 40,
     backgroundColor: colors.RED_MAIN,
     display: "flex",
     flexDirection: "row",
     padding: 10,
     marginHorizontal:10,
     borderRadius:20,
   },
   bottomBtnText:{
    textAlign:'center',
    fontSize:15,
    width:'100%',
    fontWeight:'bold',
    fontFamily:'roboto',
    color:colors.WHITE,
   }
 });