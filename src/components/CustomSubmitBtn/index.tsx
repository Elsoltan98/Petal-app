import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors, sizes} from '../../global';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomSubmitBtn: FC<Props> = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={styles.linear}
          colors={[colors.yellow, colors.orange]}>
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  linear: {paddingVertical: 20, paddingHorizontal: 60, borderRadius: 50},
  title: {
    color: '#fff',
    fontSize: sizes.h2,
    fontWeight: '600',
  },
});

export default CustomSubmitBtn;
