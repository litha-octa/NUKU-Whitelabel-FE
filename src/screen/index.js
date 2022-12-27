import Splash from './Splash'
import Payment from './Payment'
import Merchant from './Merchant'

import MyCart from './MyCart'

import Address from './Address'

//MAINApp
import Home from './Home'
import Account from './Account'

        //INSIDE ACCOUNT SCREEN
        import EditProfile from './Account/EditProfile'
        import Settings from './Account/Settings'
        //INSIDE SETTINGS
            import SettingsPrivasi from './Account/Settings/SettingsPrivasi'
            import SettingsDebit from './Account/Settings/SettingsDebit'
            import SettingsNotif from './Account/Settings/SettingsNotif'
            import SettingsBantuan from './Account/Settings/SettingsBantuan'

            import Favorit from './Account/Favorit'

import News from './News'
import Order from './Order'
import Qris from './Qris'

import TopUp from './TopUp'
import PaymentMethod from './TopUp/PaymentMethod'
  import MobileBanking from './TopUp/PaymentMethod/MobileBanking'
  import StepMobileBanking from "./TopUp/PaymentMethod/StepMobileBanking";
  import TopUpStatus from './TopUp/TopUpStatus'

  import Auth from './Auth';
    import Login  from './Auth/Login';
    import Register from './Auth/Register';
    import OTP from './Auth/OTP';

import Product from './Product';
import ProductDetail from "./Product/ProductDetail";

import KategoriCenter from './KategoriCenter'

// TRANSPORT DAN DELIVERY
import { FiturBelanja, HomeBelanja, FiturKirim, FiturTransport } from './TransportDelivery'



export {
  Payment,
  Splash,
  MyCart,
  // MAIN APP
  Home,
  Account,
  //INSIDE ACCOUNT SCREEN
  EditProfile,
  Settings,
  SettingsPrivasi,
  SettingsDebit,
  SettingsNotif,
  SettingsBantuan,

  Favorit,

  News,
  Order,
  Qris,
  TopUp,
  PaymentMethod,
  MobileBanking,
  StepMobileBanking,
  TopUpStatus,
  Login,
  Auth,
  Register,
  OTP,

  Product,
  Merchant,
  ProductDetail,
  KategoriCenter,

  FiturBelanja,
  FiturKirim,
  FiturTransport,
  HomeBelanja, 
  Address,
};