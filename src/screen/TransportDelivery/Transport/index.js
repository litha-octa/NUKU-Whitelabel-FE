import React, {useState, useEffect, Fragment, useRef} from "react"; 
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, TextInput} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  LeftArrowTail,
  SearchIcon,
  CloseIcon,
  RibonSaveIcon,
  MapPinIcon,
} from "../../../assets";
import { Assistant} from "../../../component";
import colors from "../../../assets/colors";
import RBSheet from "react-native-raw-bottom-sheet";


const FiturTransport =({navigation})=>{
  const [myLocation, setMyLocation] = useState()
    const refRBSheet = useRef();

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  const windowHeight = Dimensions.get("window").height;

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

const HeaderBS =(props)=>{
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: 20,
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={CloseIcon}
          style={{ width: 20, height: 20,  }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "roboto",
          fontWeight: "bold",
          fontSize: 18,
          marginLeft: 20,
          textTransform: "capitalize",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
}

const BtnSavedLocation =()=>{
  return (
    <TouchableOpacity
      style={{ 
        width: "25%",
         display: "flex", 
         flexDirection: "row",
         backgroundColor:colors.WHITE,
         borderColor:colors.PALE_GREY,
         borderWidth:1,
         borderRadius:10,
         padding:5,
         marginHorizontal:'5%',

        }}
    >
      <Image source={RibonSaveIcon} style={{ width: 25, height: 25, marginRight:10 }} />
      <Text style={{
        fontFamily:'roboto', 
        fontSize:15,
        color:colors.GREY, 
        textAlignVertical:'center'
        }}>Kantor</Text>
    </TouchableOpacity>
  );
}

const PinLocation = () => {
  return (
    <TouchableOpacity
      style={{
        width: "40%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: colors.WHITE,
        borderColor: colors.PALE_GREY,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginHorizontal: "5%",
      }}
    >
      <Image
        source={MapPinIcon}
        style={{ width: 25, height: 25, marginRight: 10 }}
      />
      <Text
        style={{
          fontFamily: "roboto",
          fontSize: 15,
          color: colors.GREY,
          textAlignVertical: "center",
        }}
      >Pilih lewat peta
      </Text>
    </TouchableOpacity>
  );
};



    return (
      <View style={s.body}>
        <MapView
          style={s.map}
          // mapPadding={{ top:250, bottom :300 }}
          // provider={PROVIDER_GOOGLE}
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
          <TouchableOpacity style={s.btn} onPress={() => navigation.goBack()}>
            <Image source={LeftArrowTail} style={s.btnIcon} />
          </TouchableOpacity>
          <View style={s.serviceName}>
            <Text style={s.serviceNameText}>Nuku Anterin</Text>
          </View>
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
              <TextInput
                placeholder="Cari Lokasi Tujuan"
                value={myLocation}
                onPressIn={() => refRBSheet.current.open()}
              />
            </View>
            <BtnSavedLocation />
          </View>
        </Fragment>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={windowHeight}
          duration={400}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(52, 52, 52, 0.8)",
            },
            draggableIcon: {
              display: "none",
            },
          }}
        >
          <View>
            <HeaderBS
              title="mau kemana hari ini ?"
              onPress={() => refRBSheet.current.close()}
            />
            <View style={s.searchBar}>
              <Image source={SearchIcon} style={s.searchbarIcon} />
              <GooglePlacesAutocomplete
                placeholder="Cari Lokasi Tujuan"
                // value={myLocation}
                // onChangeText={(text) => setMyLocation(text)}
                // currentLocation={true}
                onPress={(data, details = null)=>{
                  console.log(data, details)
                }}
                query={{
                  key:'AIzaSyABte7pW2AHEeASH9Wk5WP5VBoz1rD7WQc',
                  language:'en',
                }}
              />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <BtnSavedLocation />
              <PinLocation />
            </View>
          </View>
        </RBSheet>
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
    // width: "100%",
    // height: "100%",
    // flex:1,
    // paddingTop:40,
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
  serviceName:{
    backgroundColor:colors.WHITE,
    borderRadius:10,
    elevation:8,
    top:15,
    left:'70%',
    width :'25%',
    padding :5,
  },
  serviceNameText:{
    color:colors.RED_MAIN,
    fontFamily:'roboto',
    fontSize:15,
    fontWeight:'bold',
  }

});