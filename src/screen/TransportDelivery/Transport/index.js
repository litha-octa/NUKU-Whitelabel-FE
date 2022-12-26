import React, {useState, useEffect, Fragment} from "react"; 
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { LeftArrowTail, SearchIcon } from "../../../assets";
import { Assistant } from "../../../component";
import colors from "../../../assets/colors";

const FiturTransport =()=>{
  const [myLocation, setMyLocation] = useState()
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  // useEffect(() => {
  //   Geolocation.getCurrentPosition((pos) => {
  //     const crd = pos.coords
  //     setPosition({
  //       latitude: crd.latitude,
  //       longitude: crd.longitude,
  //       latitudeDelta: 0.0421,
  //       longitudeDelta: 0.0421,
  //     })
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

    return (
      <View style={s.body}>
        <MapView
          style={s.map}
          // mapPadding={{ top:250, bottom :300 }}
          provider={PROVIDER_GOOGLE}
          // initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={true}
          rotateEnabled={true}
        />
        <Fragment>
          <TouchableOpacity style={s.btn}>
            <Image source={LeftArrowTail} style={s.btnIcon} />
          </TouchableOpacity>
          <View style={[s.assistant, { position: "absolute" }]}>
            <Assistant msg="Silahkan cari lokasi yang mau dituju di bawah ya" />
          </View>
          <View style={[s.assistant2, { position: "absolute" }]}>
            <Assistant msg="Mau kemana aja ? pasti kami anterin kok" info />
          </View>
          <View style={s.bottomContainer}>
            <Text style={s.bottomContainerTitle}>Mau Kemana Hari ini ? </Text>
            <View style={s.searchBar}>
              <Image source={SearchIcon} style={s.searchbarIcon} />
              <TextInput placeholder="Cari Lokasi Tujuan" />
            </View>
          </View>
        </Fragment>
      </View>
    );
}
export default FiturTransport

const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
    flex:1,
    paddingTop:40,
  },
  btn: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  btnIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  assistant: {
    top: 65,
    left: 10,
    width: "95%",
    alignSelf: "center",
  },
  assistant2: {
    bottom: 155,
    left: 10,
    width: "95%",
    alignSelf: "center",
  },
  bottomContainer: {
    width: "100%",
    position: "absolute",
    backgroundColor: colors.WHITE,
    bottom: 0,
    height: 150,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    padding: 15,
  },
  bottomContainerTitle:{
    fontFamily:'roboto',
    fontSize:17,
    fontWeight:'bold',
    color:colors.BLACK,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor:colors.PALE_GREY,
    width :'96%',
    alignSelf:'center',
    borderRadius:20,
    marginVertical:'3%',
    height:50,
    paddingHorizontal:15,
  },
  searchbarIcon:{
    width:25,
    height:25,
    alignSelf:'center'
  },

});