import {useNavigation} from '@react-navigation/native';
import {useMemo, useState} from 'react';
import Screens from '../../constants/Screens';
import {loginUser} from '../../services/Api';

const useLoginHanlder = () => {
  // utilities
  const navigation = useNavigation();

  // components

  // states
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const checkMobileNumber = () => {
    if (!mobileNumber) {
      setError('Enter Mobile Number*');
      return false;
    }
    if (mobileNumber.length !== 10) {
      setError('Enter Correct Mobile Number*');
      return false;
    }
    setError('');
    return true;
  };

  useMemo(() => {
    if (mobileNumber && error) {
      checkMobileNumber();
    }
  }, [mobileNumber]);

  const loginHandler = async () => {
    if (!checkMobileNumber()) {
      return;
    }
    const res: any = await loginUser({mobileNumber});

    if (res) {
      navigation.navigate(Screens.OTP, {
        mobileNumber,
        otp: res.data?.customer?.otp,
      });
    }
  };

  return {
    loginHandler,
    mobileNumber,
    setMobileNumber,
    error,
  } as const;
};

export default useLoginHanlder;
