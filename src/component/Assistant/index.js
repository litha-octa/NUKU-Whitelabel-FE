import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native'
import { AssistantModalImg,InfoIcon } from "../../assets";
import colors from "../../assets/colors";


const Assistant = (props) =>{
    return (
      <View style={styles.assistantCon}>
        <Image source={props.info? InfoIcon : AssistantModalImg} style={styles.assistIcon} />
        <Text style={styles.assistText}>
            {props.msg}
        </Text>
      </View>
    );
};
const styles = StyleSheet.create({
  assistantCon: {
    backgroundColor: colors.RED_MAIN,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    padding: 10,
  },
  assistIcon: {
    width: 45,
    height: 45,
    marginRight: 15,
  },
  assistText: {
    color: colors.WHITE,
    width: "72%",
    fontFamily: "roboto",
    fontSize: 12,
    textAlignVertical:'center',
  },
});
export default Assistant