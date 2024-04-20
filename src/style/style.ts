import {StyleSheet} from 'react-native';
import FS from '../constants/FontSize';
import colors from '../constants/Color';
import FF from '../constants/FontFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  heading: {
    color: colors.dark,
    fontSize: FS.FONT_LARGE,
    fontFamily: FF.Medium,
  },
  paragraph: {
    color: colors.lightText,
    fontSize: FS.FONT_SMALL,
    fontFamily: FF.Regular,
    marginBottom: hp(5),
  },
  text: {
    color: colors.lightText,
    fontFamily: FF.Regular,
  },
  tabBarLableStyle: {
    fontSize: FS.tab,
  },
  scrollContainer: {
    backgroundColor: colors.bgWhite,
    width: '100%',
    minHeight: '100%',
  },
  inputBox: {
    backgroundColor: '#fff',
    fontFamily: FF.Regular,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 15,
    elevation: 10,
    margin: 5,
    shadowColor: '#ffffff1e',
    borderRadius: 4,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
    fontFamily: FF.Regular,
  },
  errorText: {
    position: 'absolute',
    left: 0,
    bottom: -4,
    marginLeft: 10,
    color: 'red',
    fontFamily: FF.Regular,
    // fontSize: FS.FONT_SMALL,
  },
  mobileInputContainer: {
    backgroundColor: colors.bgWhite,
    marginBottom: hp(4),
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#00000016',
    height: hp(7),
    overflow: 'hidden',
  },
  mobileInput: {
    backgroundColor: colors.bgWhite,
    fontFamily: FF.Regular,
    padding: 0,
    color: colors.lightText,
  },
  button: {
    backgroundColor: colors.theme,
    alignSelf: 'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(2.5),
    paddingHorizontal: hp(8),
  },
  btnText: {
    textAlign: 'center',
    fontSize: FS.button,
    fontFamily: FF.SemiBold,
    letterSpacing: 1,
    color: colors.textWhite,
    position: 'absolute',
  },
  loginLottie: {
    position: 'absolute',
  },
  forgot: {
    color: colors.theme,
    fontSize: FS.FONT_SMALL,
    fontFamily: FF.SemiBold,
    textAlign: 'right',
    marginVertical: wp(4),
  },
  dontHaveAccount: {
    color: '#101010',
    fontFamily: FF.Medium,
    fontSize: FS.FONT_SMALL,
  },
});

export default styles;
