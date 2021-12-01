import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../global';

const data = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./../../assets/sliderImages/slider1.png'),
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./../../assets/sliderImages/slider2.png'),
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('./../../assets/sliderImages/slider3.png'),
    height: 200,
  },
];

type Item = typeof data[0];

const IntroSlider = () => {
  const renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: '#fff',
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image
          source={item.image}
          style={[styles.image, {height: item.height ? item.height : 320}]}
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const keyExtractor = (item: Item) => item.title;

  const renderNextButton = () => {
    return (
      <View>
        <LinearGradient style={styles.nextBtn} colors={colors.gradient}>
          <Text style={styles.nextText}>Next</Text>
        </LinearGradient>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View>
        <LinearGradient style={styles.prevBtn} colors={colors.gradient}>
          <Text style={styles.prevText}>Back</Text>
        </LinearGradient>
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View>
        <LinearGradient style={styles.nextBtn} colors={colors.gradient}>
          <Text style={styles.nextText}>Done</Text>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        renderDoneButton={renderDoneButton}
        showPrevButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: Dimensions.get('screen').width / 1.5,
    height: 320, // 200
    marginVertical: 32,
  },
  text: {
    color: '#000',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  nextBtn: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -15,
    marginTop: -10,
    borderTopLeftRadius: 75,
  },
  prevBtn: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15,
    marginTop: -10,
    borderTopRightRadius: 75,
  },
  nextText: {
    paddingLeft: 15,
    paddingTop: 10,
    color: '#fff',
    fontSize: sizes.h3,
  },
  prevText: {
    paddingRight: 15,
    paddingTop: 10,
    color: '#fff',
    fontSize: sizes.h3,
  },
});

export default IntroSlider;
