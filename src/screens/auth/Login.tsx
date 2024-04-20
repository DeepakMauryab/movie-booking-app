import {View, Text, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Images from '../../constants/Images';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../../style/style';
import colors from '../../constants/Color';
import strings from '../../constants/Strings';
import FF from '../../constants/FontFamily';
import useLoginHanlder from '../../controllers/Auth/login';
import PhoneInput from 'react-native-phone-number-input';
import ButtonComponent from '../../components/ButtonComponent';
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeInRight,
  FadeInLeft,
} from 'react-native-reanimated';
const FastImageAnimated = Animated.createAnimatedComponent(FastImage);

const Login = () => {
  const {loginHandler, mobileNumber, setMobileNumber, error} =
    useLoginHanlder();

  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View>
          <FastImage
            className="w-screen"
            style={{height: hp(50)}}
            source={Images.loginImg}
          />
          <LinearGradient
            colors={['transparent', 'transparent', colors.bgWhite]}
            style={{position: 'absolute', width: '100%', height: '100%'}}
          />
        </View>
        <View className="px-10 relative bottom-11">
          <FastImageAnimated
            entering={FadeInDown.delay(100).duration(1500)}
            className="w-1/5 h-32 self-center"
            source={Images.logo}
            resizeMode={FastImage.resizeMode.contain}
          />
          {/* onpress={loginHandler} */}
          {/* onpress={logOutHandler} */}

          <Animated.Text
            entering={FadeInLeft.delay(100).duration(1000)}
            style={{fontFamily: FF.SemiBold}}
            className="text-black text-center text-2xl">
            {strings.IndiasFastestApp}
          </Animated.Text>
          <Animated.Text
            entering={FadeInRight.delay(200).duration(1000)}
            style={{fontFamily: FF.Medium, marginBottom: hp(3)}}
            className="text-black text-center text-lg ">
            {strings.logInOrSignUp}
          </Animated.Text>
          {error !== '' && (
            <Animated.Text
              entering={FadeInUp.delay(300).duration(1000).springify()}
              style={{...styles.errorText, position: 'relative', top: 0}}>
              {error}
            </Animated.Text>
          )}
          <Animated.View entering={FadeInDown.duration(1000)}>
            <PhoneInput
              defaultValue={'91XXXXXXXX'}
              value={mobileNumber}
              defaultCode="IN"
              layout="first"
              onChangeText={text => setMobileNumber(text)}
              containerStyle={styles.mobileInputContainer}
              textContainerStyle={{backgroundColor: colors.bgWhite}}
              textInputStyle={styles.mobileInput}
              codeTextStyle={{color: colors.lightText, fontFamily: FF.Medium}}
              withDarkTheme
              withShadow
              autoFocus
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.duration(1000)}>
            <ButtonComponent onSubmit={loginHandler} title={'Log In'} />
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
