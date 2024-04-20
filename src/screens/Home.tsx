import {View, Text, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useHomeHandler from '../controllers/screens/Home.controller';
import {SliderBox} from 'react-native-image-slider-box';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from '../style/style';
import FastImage from 'react-native-fast-image';
import FS from '../constants/FontSize';
import {keyExtractor} from '../utils/utils';

interface renderType {
  item: {
    id: number;
    name: string;
    img: {
      uri: string;
    };
  };
  index: number;
}

const Home = () => {
  const {sliderImages, cities} = useHomeHandler();

  const renderItem = ({item, index}: renderType) => {
    return (
      <View className={`mx-2 ${index == 0 && 'ml-4'} shadow-2xl`}>
        <FastImage
          source={item.img}
          className="w-16 h-16 rounded-full shadow-2xl"
        />
        <Text className="text-center text-lg" style={styles.text}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView className="w-full">
        <View className="mx-4">
          <SliderBox
            images={sliderImages}
            sliderBoxHeight={heightPercentageToDP(20)}
            autoplay
            ImageComponentStyle={{
              borderRadius: 15,
              marginTop: 10,
            }}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            circleLoop
            imageLoadingColor="#2196F3"
            activeOpacity={1}
            parentWidth={widthPercentageToDP(90)}
            // onCurrentImagePressed={index => {}}
            // currentImageEmitter={index => {}}
          />
        </View>

        <View>
          <Text
            className="mt-5 mx-4"
            style={[styles.heading, {fontSize: FS.FONT_MEDIUM}]}>
            Explore By Location
          </Text>
          <FlatList
            data={cities}
            keyExtractor={keyExtractor}
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-2"
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
