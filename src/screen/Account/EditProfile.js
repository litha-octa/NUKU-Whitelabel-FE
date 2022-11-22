import React from "react"
import {View,Text,Image,StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import colors from '../../assets/colors'
import {  DefaultProfileIcon} from '../../assets'
import { SimpleHeader } from "../../component"

const EditProfile = ({navigation}) => {
    const data = {
        nama : 'syahrul ramdan',
        tanggalLahir: '25 November 2022',
        jenisKelamin : 'pria',
        email : 'syarulramdan123@gmail.com',
        phone : '08382267384038',
    }
    return (
      <View style={{ backgroundColor: colors.WHITE }}>
        <SimpleHeader
        title='profil saya'
        onBack={()=>navigation.navigate('Account')}
        />
        <ScrollView style={{ height:'100%'}}>
          <View style={s.profilePicContainer}>
            <Image source={DefaultProfileIcon} style={s.profilePic} />
            <Text style={s.profilePicText}>
              Klik untuk mengubah Foto Profil
            </Text>
          </View>
          <View style={s.body}>
            <View style={s.card}>
              <Text style={s.titleData}>Nama</Text>
              <View style={s.row}>
                <Text style={s.valueData}>{data.nama}</Text>
                <TouchableOpacity>
                  <Text style={s.btnEdit}>ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.card}>
              <Text style={s.titleData}>Tanggal Lahir</Text>
              <View style={s.row}>
                <Text style={s.valueData}>{data.tanggalLahir}</Text>
                <TouchableOpacity>
                  <Text style={s.btnEdit}>ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.card}>
              <Text style={s.titleData}>Jenis Kelamin</Text>
              <View style={s.row}>
                <Text style={s.valueData}>{data.jenisKelamin}</Text>
                <TouchableOpacity>
                  <Text style={s.btnEdit}>ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.card}>
              <Text style={s.titleData}>Email</Text>
              <View style={s.row}>
                <Text style={s.valueData}>{data.email}</Text>
                <TouchableOpacity>
                  <Text style={s.btnEdit}>ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={s.card}>
              <Text style={s.titleData}>No. Handphone</Text>
              <View style={s.row}>
                <Text style={s.valueData}>{data.phone}</Text>
                <TouchableOpacity>
                  <Text style={s.btnEdit}>ubah</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}
export default EditProfile;
const s = StyleSheet.create({
  body: {
    width: "100%",
    paddingHorizontal: "5%",
    height:'100%',
  },
  profilePicContainer: {
    borderStyle: "dashed",
    borderColor: colors.GREY,
    borderWidth: 1,
    padding: 20,
    width: "100%",
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 60,
    alignSelf: "center",
  },
  profilePicText: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    marginVertical: 15,
  },
  card: {
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: "100%",
  },
  titleData: {
    color: colors.GREY,
    fontSize: 13,
    fontFamily: "roboto",
    width: "100%",
  },
  valueData: {
    color: colors.BLACK,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
    width: "90%",
  },
  btnEdit: {
    color: colors.RED_MAIN,
    fontSize: 17,
    fontFamily: "roboto",
    fontWeight: "bold",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
});