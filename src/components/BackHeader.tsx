import {View, Text, StyleProp, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/Color';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FF from '../constants/FontFamily';
import {useNavigation} from '@react-navigation/native';

interface arg {
  title: string;
  tailwindClass?: string;
}

const BackHeader = ({title, tailwindClass}: arg) => {
  const navigation = useNavigation();
  return (
    <View className="py-4 px-7 gap-5 bg-white flex-row items-center justify-between">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        className={`w-10 h-10 justify-center items-center rounded-full text-lg border border-gray-400 shadow-sm bg-white`}>
        <Entypo
          name="chevron-left"
          color={colors.dark}
          size={heightPercentageToDP(2)}
        />
      </TouchableOpacity>
      <Text
        className={`${tailwindClass} w-11/12 text-xl`}
        style={{color: colors.lightText, fontFamily: FF.Medium}}>
        {title}
      </Text>
    </View>
  );
};

export default BackHeader;
