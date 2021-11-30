import React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import CustomSubmitBtn from '../../components/CustomSubmitBtn';
import {colors, sizes} from '../../global';
import {INTRO_SLIDER} from '../../global/types';

const CheckLanguage = ({navigation}: any) => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        <Text style={styles.lang}>English</Text>
        <View
          style={[
            styles.radioBorder,
            {
              backgroundColor: checked === 'first' ? colors.orange : null,
              borderColor: checked === 'first' ? 'transparent' : 'grey',
            },
          ]}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={'#fff'}
          />
        </View>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.lang}>العربية</Text>
        <View
          style={[
            styles.radioBorder,
            {
              backgroundColor: checked === 'second' ? colors.orange : null,
              borderColor: checked === 'second' ? 'transparent' : 'grey',
            },
          ]}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={'#fff'}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <CustomSubmitBtn
          onPress={() => navigation.navigate(INTRO_SLIDER)}
          title="Submit"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 10,
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
  },
  lang: {
    fontSize: sizes.h2,
    fontWeight: '600',
  },
  radioBorder: {
    borderWidth: 1,
    borderRadius: 50,
  },
});

export default CheckLanguage;
