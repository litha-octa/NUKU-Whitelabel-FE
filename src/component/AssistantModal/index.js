import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Image,Pressable, View, TouchableOpacity } from "react-native";
import { AssistantModalImg, AssistantSad, QuestIcon } from "../../assets";
import colors from "../../assets/colors";

const AssistantModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="spring"
        transparent={true}
        visible={props.visible ? props.visible : modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={styles.titleModal}>
                {props.confirm
                  ? props.confirm
                  : "Info Untuk Kamu"}
              </Text>
              <Pressable
                onPress={
                  props.close
                    ? props.close
                    : () => setModalVisible(!modalVisible)
                }
              >
                <Text
                  style={props.confirm ? { display: "none" } : styles.textClose}
                >
                  X
                </Text>
              </Pressable>
            </View>
            <Image
              source={props.sadFace ? AssistantSad : AssistantModalImg}
              style={styles.modalImg}
            />
            <Text style={styles.modalText}>{props.msg}</Text>
            <View style={props.confirm ? styles.btnGrup : { display: "none" }}>
              <TouchableOpacity style={styles.btnOk} onPress={props.onOk}>
                <Text style={styles.textBtnOk}>{props.okText? props.okText:'Keluar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnNo} onPress={props.onCancel}>
                <Text style={styles.textBtnNo}>Batal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={props.title ? styles.container : { display: "none" }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Image source={QuestIcon} style={styles.questIcon} />
        </TouchableOpacity>
        <Text style={styles.TitleText}>{props.title}</Text>
        <TouchableOpacity
          onPress={props.pressBtn}
          style={
            props.textButton ? styles.serviceTitleBtn : { display: "none" }
          }
        >
          <Text style={styles.textBtn}>{props.textButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(32, 32, 32, 0.6)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 8,
    width: "80%",
    height: "auto",
    padding: 10,
  },
  textClose: {
    color: colors.BLACK,
    fontWeight: "bold",
    fontSize: 20,
  },
  titleModal: {
    color: colors.RED_MAIN,
    fontSize: 20,
    fontWeight: "bold",
    width: "93%",
  },
  modalText: {
    marginBottom: 10,
    marginHorizontal: 10,
    fontSize: 13,
    color: colors.GREY,
  },
  modalImg: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginVertical: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  questIcon: {
    width: 25,
    height: 25,
  },
  TitleText: {
    fontSize: 14,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    marginTop: 2,
    width: "55%",
    marginLeft: "3%",
  },
  serviceTitleBtn: {
    backgroundColor: colors.PINK,
    padding: 5,
    borderRadius: 10,
    borderColor: colors.RED_MAIN,
    borderWidth: 1,
    width: "35%",
    marginLeft: "3%",
  },
  textBtn: {
    fontSize: 10,
    fontFamily: "roboto",
    fontWeight: "bold",
    color: colors.RED_MAIN,
    textAlign: "center",
  },
  btnGrup: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnOk: {
    backgroundColor: colors.FAILED,
    width: "40%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  textBtnOk: {
    color: colors.WHITE,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnNo: {
    backgroundColor: colors.SUCCESS,
    width: "40%",
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
  },
  textBtnNo: {
    color: colors.WHITE,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AssistantModal;
