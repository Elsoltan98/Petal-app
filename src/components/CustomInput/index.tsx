import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomIcon from '../CustomIcon';

const CustomInput = () => {
  return (
    <View style={styles.inputContainer}>
      <View>
        <CustomIcon type="FontAwesome" name="envelope-o" size={21} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {},
});

export default CustomInput;
