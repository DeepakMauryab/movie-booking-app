import {View, Text, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import styles from '../../style/style';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../constants/Images';
import colors from '../../constants/Color';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Profile = () => {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View>
          <FastImage
            className="w-screen relative"
            style={{height: hp(30), top: hp(-5)}}
            resizeMode="stretch"
            source={Images.profileBg}
          />
          <View
            style={{top: hp(-13), borderColor: '#FF0000'}}
            className="self-center relative border rounded-full justify-center items-center w-32 h-32">
            <FastImage
              className="rounded-full"
              style={{width: '95%', height: '95%'}}
              resizeMode="contain"
              source={Images.logo}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
