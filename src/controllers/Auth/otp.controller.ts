import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import Screens from '../../constants/Screens';
import {loginUser, verifyOtp} from '../../services/Api';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {addUser} from '../../redux/slices/User.slice';

const useOtpHandler = (mobileNumber: number, otpFromLogin: string) => {
  // utilities
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // states
  // for otp
  const [timer, setTimer] = useState<number>(10);
  const [otp, setOtp] = useState<string>('');

  const [paramOtp, setParamOtp] = useState<string>(otpFromLogin);

  useEffect(() => {
    const interVal = setTimeout(() => {
      let tempTime = timer - 1;
      setTimer(tempTime);
    }, 1000);
    if (timer == 0) {
      return clearTimeout(interVal);
    }
  }, [timer]);

  const resendOtp = async () => {
    const res: any = await loginUser({mobileNumber});
    if (res) {
      setParamOtp(res.data?.customer.otp);
      setTimer(10);
    }
  };
  const otpHandler = async (otp: string) => {
    const res: any = await verifyOtp({mobileNumber, otp});
    if (!res) {
      Alert.alert('Wrong OTP', 'enter correct otp to continue');
      return;
    }
    dispatch(addUser(res?.data.customer));

    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: Screens.TAB}],
      }),
    );
  };
  const editNumber = () => {
    navigation.navigate(Screens.Login);
  };

  return {
    resendOtp,
    otpHandler,
    timer,
    setTimer,
    otp,
    setOtp,
    editNumber,
    paramOtp,
  } as const;
};

export default useOtpHandler;
