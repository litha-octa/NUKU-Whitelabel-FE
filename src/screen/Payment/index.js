import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  IconSaldo,
  BtnScanQRIS,
  LeftArrow,
  Rp,
  BtnKirim,
  BtnMinta,
  BtnTopUp,
  PulsaIcon,
  KuotaIcon,
  ListrikIcon,
  StatusMin,
  StatusPlus,
  Notif,
  ArrowWhiteIcon,
} from "../../assets";

const Payment = () => {
    const infosaldo = '150.000'
    const nominal = '20.000'
    const date = '16-02-22'
    return (
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerLine1}>
              <Image
                source={ArrowWhiteIcon}
                style={{
                  width: 20,
                  height: 40,
                  marginHorizontal: 10,
                  transform: [{ rotate: "180deg" }],
                }}
              />
              <Image
                source={IconSaldo}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 5,
                  marginHorizontal: 10,
                }}
              />
              <Image
                source={Rp}
                style={{
                  width: 30,
                  height: 25,
                  marginTop: 15,
                  marginHorizontal: 5,
                }}
              />
              <Text style={styles.infosaldo}>{infosaldo}</Text>
              <Image
                source={Notif}
                style={{
                  width: 50,
                  height: 50,
                  marginLeft: 10,
                }}
              />
            </View>
            <View style={styles.headerLine2}>
              <TouchableOpacity>
                <Image source={BtnScanQRIS} style={styles.imgMenu} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={BtnTopUp} style={styles.imgMenu} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={BtnKirim} style={styles.imgMenu} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={BtnMinta} style={styles.imgMenu} />
              </TouchableOpacity>
            </View>
            <View style={styles.whiteHeaderSection}>
              <TouchableOpacity>
                <Image source={PulsaIcon} style={styles.menuInWhiteHeader} />
                <Text style={styles.textWhiteSection}> Pulsa</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={KuotaIcon} style={styles.menuInWhiteHeader} />
                <Text style={styles.textWhiteSection}> Paket Data</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={ListrikIcon} style={styles.menuInWhiteHeader} />
                <Text style={styles.textWhiteSection}> PLN</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.textInMainContainer}>Riwayat Kamu</Text>
            <View style={styles.card}>
              <Text style={styles.titleCard}>Top Up via Minimarket</Text>
              <View style={styles.cardSection}>
                <Image source={StatusPlus} style={styles.statusIcon} />
                <Text style={styles.nominalInCard}>Rp. {nominal}</Text>
                <Text style={styles.dateInCard}>{date}</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.titleCard}>Top Up via Minimarket</Text>
              <View style={styles.cardSection}>
                <Image source={StatusPlus} style={styles.statusIcon} />
                <Text style={styles.nominalInCard}>Rp. {nominal}</Text>
                <Text style={styles.dateInCard}>{date}</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Text style={styles.titleCard}>Top Up via Minimarket</Text>
              <View style={styles.cardSection}>
                <Image source={StatusPlus} style={styles.statusIcon} />
                <Text style={styles.nominalInCard}>Rp. {nominal}</Text>
                <Text style={styles.dateInCard}>{date}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
}
export default Payment;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  header: {
    backgroundColor: "#B70909",
    height: 300,
    width: "100%",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  headerLine1: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
  },
  infosaldo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    width: 190,
  },
  headerLine2: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
  },
  imgMenu: {
    width: 70,
    height: 70,
  },
  whiteHeaderSection: {
    backgroundColor: "white",
    width: "90%",
    height: 120,
    borderRadius: 20,
    marginTop: 40,
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    elevation: 8,
  },
  menuInWhiteHeader: {
    width: 50,
    height: 65,
    marginTop: 10,
  },
  textWhiteSection:{
    textAlign:'center',
    color : 'black',
  },
  mainContainer: {
    marginTop: 70,
    width: "100%",
    paddingHorizontal: "5%",
  },
  textInMainContainer: {
    color: "#B70909",
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    width: "100%",
    height: 100,
    backgroundColor: "#cccccc",
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "grey",
    borderWidth: 1,
  },
  titleCard: {
    fontSize: 15,
    color: "black",
    margin: 15,
  },
  cardSection: {
    backgroundColor: "white",
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  nominalInCard:{
    fontSize: 20,
    fontWeight:'bold',
    width: 245,
    marginRight: 15,
  },
  dateInCard:{
    width:60,
    fontSize: 12,
  },
  statusIcon:{
    marginHorizontal:10
  }
});