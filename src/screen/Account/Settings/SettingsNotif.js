import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet , Switch} from "react-native";
import { SimpleHeader } from "../../../component";
import colors from '../../../assets/colors'
import { ArrowGreyIcon } from "../../../assets";

const SettingsNotif=({navigation})=>{
  const [notifEnabled, setNotifEnabled] = useState(false);
  const toggleNotif = () => setNotifEnabled((previousState) => !previousState);

    const [soundNotifEnabled, setSoundNotifEnabled] = useState(false);
  const toggleSoundNotif = () =>
    setSoundNotifEnabled((previousState) => !previousState);
    return (
      <View style={s.body}>
        <SimpleHeader
          title="Notifikasi"
          onBack={() => navigation.navigate("Settings")}
        />
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}> Notifikasi di aplikasi</Text>
          <Switch
            trackColor={{ false: "#767577", true: colors.PINK }}
            thumbColor={colors.RED_MAIN}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotif}
            value={notifEnabled}
          />
        </TouchableOpacity>
        <TouchableOpacity style={s.card}>
          <Text style={s.textCard}>bunyi notifikasi</Text>
          <Switch
            trackColor={{ false: "#767577", true: colors.PINK }}
            thumbColor={colors.RED_MAIN}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSoundNotif}
            value={soundNotifEnabled}
          />
        </TouchableOpacity>
      </View>
    );
}
export default SettingsNotif
const s = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.WHITE,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    paddingVertical: 20,
    borderBottomColor: colors.PALE_GREY,
    borderBottomWidth: 2,
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  textCard: {
    fontFamily: "roboto",
    fontSize: 17,
    color: colors.GREY,
    width: "90%",
    textTransform:'capitalize',
  },
  iconCard: {
    width: 30,
    height: 30,
  },
});