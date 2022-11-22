import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native'
import { SimpleHeader } from "../../../component";
import colors from "../../../assets/colors";
import {TopUpInvalidIcon,
TopUpPendingIcon,
TopUpValidIcon,} from '../../../assets'

const Pending = ({navigation})=>{
    return (
        <View style={s.body}>
          <Text style={s.title}>menunggu pembayaran
          </Text>
          <Text style={s.desc}>kami sedang mengonfirmasi pembayaran
          </Text>
          <Image
            source={TopUpPendingIcon}
            style={s.mainIcon}
          />
        </View>
    );
}
const Status = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(true);
    }, 3000);
  }, [navigation]);

  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <View>
      <View style={s.body}>
        <Text style={s.title}>
          {isSuccess == true
            ? "pembayaran top up kamu berhasil"
            : "pembayaran top up kamu gagal"}
        </Text>
        <Text style={s.desc}>
          {isSuccess == true
            ? "silahkan cek saldo anda"
            : "silahkan coba lagi atau hubungi CS"}
        </Text>
        <Image
          source={isSuccess == true ? TopUpValidIcon : TopUpInvalidIcon}
          style={s.mainIcon}
        />
      </View>
      <TouchableOpacity
        style={s.bottomBtn}
        onPress={()=>{navigation.replace("MainApp")}}
      >
        <Text style={s.bottomBtnText}>
          {isSuccess == true ? "Mulai Belanja" : "Hubungi CS"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const TopUpStatus = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsPending(false);
    }, 3000);
    if (isPending == false) {
      setTimeout(() => {
        setIsSuccess(true);
      }, 3000);
    }

  }, [navigation]);

  const [isSuccess, setIsSuccess] = useState(true);

  const [isPending , setIsPending] = useState(true)
  return (
    <View>
      <SimpleHeader title="Top Up Saldo" onBack={() => navigation.goBack()} />
      {isPending == true ? (
        <Pending />
      ) : (
        <View>
          <View style={s.body}>
            <Text style={s.title}>
              {isSuccess == true
                ? "pembayaran top up kamu berhasil"
                : "pembayaran top up kamu gagal"}
            </Text>
            <Text style={s.desc}>
              {isSuccess == true
                ? "silahkan cek saldo anda"
                : "silahkan coba lagi atau hubungi CS"}
            </Text>
            <Image
              source={isSuccess == true ? TopUpValidIcon : TopUpInvalidIcon}
              style={s.mainIcon}
            />
          </View>
          <TouchableOpacity
            style={s.bottomBtn}
            onPress={() => {
              navigation.replace("MainApp");
            }}
          >
            <Text style={s.bottomBtnText}>
              {isSuccess == true ? "Mulai Belanja" : "Hubungi CS"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default TopUpStatus

const s = StyleSheet.create({
  body: {
    backgroundColor: colors.WHITE,
    width: "100%",
    height: "95%",
    elevation: 5,
    paddingTop: "20%",
    paddingBottom: 90,
    marginBottom: 0,
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
    marginHorizontal: 10,
    borderRadius: 20,
  },
  bottomBtnText: {
    textAlign: "center",
    fontSize: 15,
    width: "100%",
    fontWeight: "bold",
    fontFamily: "roboto",
    color: colors.WHITE,
  },
  title: {
    fontFamily: "roboto",
    fontWeight: "bold",
    fontSize: 23,
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  desc: {
    fontFamily: "roboto",
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
    textTransform: "capitalize",
  },
  mainIcon:{
    width :150,
    height:150,
    marginTop:'20%',
    alignSelf:'center',
  }
});