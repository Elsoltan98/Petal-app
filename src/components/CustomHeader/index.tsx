import React from 'react';
import {Platform} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../global';

const CustomHeader = ({title}: any) => {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={[colors.yellow, colors.orange]}>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
