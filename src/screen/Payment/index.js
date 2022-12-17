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
  BPJSIcon,
  IndihomeIcon,
  PDAMIcon,
  TelpIcon,
  TokenIcon,
  Notif,
  ArrowWhiteIcon,
} from "../../assets";
import colors from '../../assets/colors'

const Payment = ({navigation}) => {
    const infosaldo = '150.000'
    const nominal = '20.000'
    const date = '16-02-22'

    const ItemPPOB = (props) =>{
      return (
        <TouchableOpacity onPress={props.onPress} style={styles.cardInWhiteHeader}>
          <Image source={props.img} style={styles.menuInWhiteHeader} />
          <Text style={styles.textWhiteSection}>{props.itemName}</Text>
        </TouchableOpacity>
      );
    }

    const RiwayatCard = (props) =>{
      return (
        <View style={styles.card}>
          <Text style={styles.titleCard}>{props.title}</Text>
          <View style={styles.cardSection}>
            <Image source={props.status ===  'true' ? StatusPlus: StatusMin} style={styles.statusIcon} />
            <Text style={styles.nominalInCard}>Rp. {props.nominal}</Text>
            <Text style={styles.dateInCard}>{props.date}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.header}>
            <View style={styles.headerLine1}>
              <TouchableOpacity
              onPress={()=>{navigation.goBack()}}
              >
                <Image
                  source={ArrowWhiteIcon}
                  style={{
                    width: 20,
                    height: 40,
                    marginHorizontal: 10,
                    transform: [{ rotate: "180deg" }],
                  }}
                />
              </TouchableOpacity>
              <Image
                source={IconSaldo}
                style={{
                  width: 23,
                  height: 23,
                  marginTop: 10,
                  marginHorizontal: 10,
                }}
              />
              <Image
                source={Rp}
                style={{
                  width: 23,
                  height: 23,
                  resizeMode: "contain",
                  marginTop: 15,
                  marginHorizontal: 5,
                }}
              />
              <Text style={styles.infosaldo}>{infosaldo}</Text>
              <Image
                source={Notif}
                style={{
                  width: 40,
                  height: 40,
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
              <ItemPPOB img={PulsaIcon} itemName="Pulsa" />
              <ItemPPOB img={KuotaIcon} itemName="Paket Data" />
              <ItemPPOB img={ListrikIcon} itemName="PLN" />
              <ItemPPOB img={BPJSIcon} itemName="BPJS" />
              <ItemPPOB img={PDAMIcon} itemName="PDAM" />
              <ItemPPOB img={IndihomeIcon} itemName="Telkomsel" />
              <ItemPPOB img={TelpIcon} itemName="Telepon" />
              <ItemPPOB img={TokenIcon} itemName="Token Listrik" />
            </View>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.textInMainContainer}>Riwayat Kamu</Text>
            <RiwayatCard
              title="Top Up Via Indomaret"
              status="true"
              nominal="20000"
              date="16-12-22"
            />
            <RiwayatCard
              title="Top Up Via Indomaret"
              status="false"
              nominal="20000"
              date="16-12-22"
            />
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
    backgroundColor: colors.RED_MAIN,
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
    width: "55%",
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
    height: "auto",
    borderRadius: 20,
    marginVertical: 40,
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    elevation: 8,
    padding: 10,
  },
  cardInWhiteHeader: {
    width: "25%",
    alignItems: "center",
  },
  menuInWhiteHeader: {
    width: 40,
    height: 45,
    marginTop: 10,
  },
  textWhiteSection: {
    textAlign: "center",
    color: "black",
  },
  mainContainer: {
    marginTop: "30%",
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
  nominalInCard: {
    fontSize: 20,
    fontWeight: "bold",
    width: "65%",
  },
  dateInCard: {
    width: "15%",
    fontSize: 12,
  },
  statusIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});