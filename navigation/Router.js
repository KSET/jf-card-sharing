import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen'

const Router = StackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    // BarCode: {
    //   screen: BarCodeScreen,
    // },
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
