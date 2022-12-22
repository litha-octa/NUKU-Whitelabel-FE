import React from "react";
import {View, Text} from 'react-native'
import { SimpleHeader } from "../../../component";

const HomeBelanja = ({navigation})=>{
    return(
        <View>
            <SimpleHeader title='Ayo Pilih Produk yang Mau Dibeli' onBack={()=>navigation.goBack()}/>
            <Text>HOME MERCHANT</Text>
        </View>
    )
}
export default HomeBelanja