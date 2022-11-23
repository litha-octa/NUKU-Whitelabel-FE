import Splash from './Splash'
import Payment from './Payment'
import Merchant from './Merchant'
import ProductDetail from './ProductDetail'
import MyCart from './MyCart'

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
    // import OTP from './Auth/OTP';


export {
  Payment,
  Splash,
  Merchant,
  ProductDetail,
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
};