import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {colors, sizes} from '../../global';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/sliderImages/Logo.png')}
        style={styles.image}
      />
      <Text style={styles.logText}>Log in</Text>
      <Text style={styles.log2Text}>
        Log in with the data you entered while registering your account
      </Text>
      <View>
        <CustomInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  logText: {
    fontSize: sizes.h2,
    marginTop: 30,
    fontWeight: 'bold',
  },
  log2Text: {
    fontSize: sizes.h3,
    color: colors.grey1,
    marginVertical: 15,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});

export default LogIn;
