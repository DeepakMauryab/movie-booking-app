import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackHeader from '../../components/BackHeader';
import colors from '../../constants/Color';
import Feather from 'react-native-vector-icons/Feather';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import FF from '../../constants/FontFamily';
import styles from '../../style/style';
import {OtpInput} from 'react-native-otp-entry';
import FS from '../../constants/FontSize';
import Animated, {FadeInDown, ZoomIn} from 'react-native-reanimated';
import ButtonComponent from '../../components/ButtonComponent';
import useOtpHandler from '../../controllers/Auth/otp.controller';

const OTP = ({route}: any) => {
  const {timer, setOtp, otp, paramOtp, otpHandler, resendOtp, editNumber} =
    useOtpHandler(route.params.mobileNumber, route.params.otp);

  const timerShow = useMemo(() => {
    return (
      <View className="text-center flex-row self-center my-3 gap-2 items-center">
        {timer == 0 ? (
          <>
            <Text style={styles.dontHaveAccount}>Didn’t receive code? </Text>
            <Text
              onPress={resendOtp}
              style={{...styles.forgot, marginVertical: 0}}>
              Resend
            </Text>
          </>
        ) : (
          <>
            <Feather
              name="clock"
              color={colors.lightText}
              size={widthPercentageToDP(5)}
            />
            <Text
              style={{
                color: colors.lightText,
                fontFamily: FF.SemiBold,
              }}>{`00 : ${timer > 9 ? timer : `0${timer}`}`}</Text>
          </>
        )}
      </View>
    );
  }, [timer]);
  return (
    <>
      <StatusBar backgroundColor={colors.theme} />
      <SafeAreaView className="bg-white flex-1">
        <BackHeader title={'OTP'} />
        <ScrollView className="px-5" keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>Mobile verification</Text>
          <Text style={styles.paragraph}>
            Enter the verification code we send you on your Mobile Number:{' '}
            {route.params.mobileNumber}{' '}
            <TouchableOpacity
              onPress={editNumber}
              className="flex-row items-center">
              <Feather
                name="edit"
                color={colors.theme}
                size={heightPercentageToDP(2)}
              />
            </TouchableOpacity>
            | {paramOtp}
          </Text>
          <OtpInput
            numberOfDigits={4}
            focusColor={colors.theme}
            theme={{
              inputsContainerStyle: {padding: widthPercentageToDP(4)},
              pinCodeContainerStyle: {
                height: heightPercentageToDP(8),
                width: widthPercentageToDP(18),
              },
              pinCodeTextStyle: {
                color: colors.dark,
                fontSize: FS.FONT_LARGE,
                fontFamily: FF.Regular,
              },
            }}
            onFilled={text => otpHandler(text)}
            onTextChange={(text: string) => setOtp(text)}
          />
          {timerShow}
          <Animated.View entering={FadeInDown.duration(1000)} className="mt-9">
            <ButtonComponent
              disabled={otp.toString()?.length !== 4}
              onSubmit={() => otpHandler(otp)}
              title={'Verify'}
            />
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OTP;
