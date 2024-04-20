import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screens from '../constants/Screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../style/style';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import {useSelector} from 'react-redux';
import {storeType} from '../redux/store';
import OTP from '../screens/auth/OTP';
import colors from '../constants/Color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Main = () => {
  const {UserDetails} = useSelector((s: storeType) => s.UserSlice);

  return (
    <Stack.Navigator
      initialRouteName={UserDetails !== null ? Screens.TAB : Screens.Login}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.TAB} component={TabNavigation} />
      <Stack.Screen name={Screens.Login} component={Login} />
      <Stack.Screen name={Screens.SignUp} component={SignUp} />
      <Tab.Screen name={Screens.OTP} component={OTP} />
    </Stack.Navigator>
  );
};

const TabActiveIcons = ['home', 'server', 'ticket', 'person'];
const TabInActiveIcons = [
  'home-outline',
  'server-outline',
  'ticket-outline',
  'person-outline',
];
const TabName = [
  Screens.HOME,
  Screens.HISTORY,
  Screens.LIBRARY,
  Screens.PROFILE,
];
const checkRouteScreen = (route: string, focused: Boolean) => {
  const icons = focused ? TabActiveIcons : TabInActiveIcons;
  return icons[TabName.indexOf(route)];
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: styles.tabBarLableStyle,
        tabBarActiveTintColor: colors.theme,
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({focused, color}) => {
          return (
            <Ionicons
              name={checkRouteScreen(route.name, focused)}
              size={hp(2.5)}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name={Screens.HISTORY} component={Home} />
      <Tab.Screen name={Screens.LIBRARY} component={Home} />
      <Tab.Screen name={Screens.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default Main;
