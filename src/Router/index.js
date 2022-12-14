import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Payment,
  Splash,
  Home,
  Account,
  News,
  Order,
  Qris,
  Merchant,
  ProductDetail,
  MyCart,
  EditProfile,
  Settings,
  SettingsPrivasi,
  SettingsDebit,
  SettingsNotif,
  SettingsBantuan,
  TopUp,
  PaymentMethod,
  MobileBanking,
  StepMobileBanking,
  TopUpStatus,
  Login,
  Register,
  Auth,
  OTP,
  Product,
  KategoriCenter,
} from "../screen";

import {
  AccOn,
  AccOff,
  HomeOn,
  HomeOff,
  NewsOn,
  NewsOff,
  PesananOn,
  PesananOff,
  MainLogo,
}from '../assets'

import {View, Image, Text,TouchableOpacity} from 'react-native'
import colors from "../assets/colors";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); 

const MainApp = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName={MainApp}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 70,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          let topBorder;
          let labelName;
          let labelStyle;
          if (route.name === "Home") {
            iconName = focused ? HomeOn : HomeOff;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
              labelName = 'Beranda'
              labelStyle = focused
                ? { color: colors.RED_MAIN, alignText: "center" }
                : { color: colors.GREY, alignText: "center" };
          } else if (route.name === "News") {
            iconName = focused ? NewsOn : NewsOff;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
              labelName = "Berita";
              labelStyle = focused
                ? { color: colors.RED_MAIN, alignText: "center" }
                : { color: colors.GREY, alignText: "center" };
          } else if (route.name === "Order") {
            iconName = focused ? PesananOn : PesananOff;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
              labelName = "Pesanan";
              labelStyle = focused
                ? { color: colors.RED_MAIN, alignText: "center" }
                : { color: colors.GREY, alignText: "center" };
          } else if (route.name === "Account") {
            iconName = focused ? AccOn : AccOff;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
              labelName = "Akun";
              labelStyle = focused
                ? { color: colors.RED_MAIN, alignText: "center" }
                : { color: colors.GREY, alignText: "center" };
          } else if (route.name === "Qris") {
            iconName = MainLogo;
            topBorder = focused
              ? { borderTopColor: colors.RED_MAIN, borderTopWidth: 3 }
              : null;
          }
          return (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate(route.name)}
              >
                <Image
                  source={iconName}
                  style={iconName === MainLogo?{ width: 70, height: 70, marginBottom: 55 } :{ width: 30, height: 30, marginVertical: 5, alignSelf:'center' }}
                />
                <Text style={labelStyle}>{labelName}</Text>
              </TouchableOpacity>
            </>
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Qris"
        component={Qris}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const TopUpRoute = ({navigation})=>{
  return (
    <Stack.Navigator initialRouteName="TopUpRoute">
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MobileBanking"
        component={MobileBanking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StepMobileBanking"
        component={StepMobileBanking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopUpStatus"
        component={TopUpStatus}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const LoginRoute =({navigation})=>{
  return (
    <Stack.Navigator initialRouteName="LoginRoute">
      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


const Router = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginRoute"
        component={LoginRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Merchant"
        component={Merchant}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsPrivasi"
        component={SettingsPrivasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsDebit"
        component={SettingsDebit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsNotif"
        component={SettingsNotif}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SettingsBantuan"
        component={SettingsBantuan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TopUpRoute"
        component={TopUpRoute}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="KategoriCenter"
        component={KategoriCenter}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default Router