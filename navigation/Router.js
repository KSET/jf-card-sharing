import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen'
import BarCodeScreen from '../screens/BarCodeScreen'

const Router = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    BarCode: {
      screen: BarCodeScreen,
    },
    // ChangePassword: {
    //   screen: ChangePasswordScreen,
    // },
    // Review: {
    //   screen: ReviewScreen,
    // },
    // Settngs: {
    //   screen: SettingsScreen,
    // },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default Router;
