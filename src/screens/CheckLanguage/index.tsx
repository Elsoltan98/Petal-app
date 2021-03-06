import React from 'react';
import {useState} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';
import CustomHeader from '../../components/CustomHeader';
import CustomSubmitBtn from '../../components/CustomSubmitBtn';
import {colors, sizes} from '../../global';
import {INTRO_SLIDER} from '../../global/types';

const CheckLanguage = ({navigation}: any) => {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.container}>
      <CustomHeader title="Check language" />
      <View style={styles.checkContainer}>
        <Text style={styles.lang}>English</Text>
        <View
          style={
            Platform.OS === 'ios'
              ? [
                  styles.radioBorder,
                  {
                    backgroundColor: checked === 'first' ? colors.orange : null,
                    borderColor: checked === 'first' ? 'transparent' : 'grey',
                  },
                ]
              : null
          }>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={Platform.OS === 'ios' ? '#fff' : colors.orange}
          />
        </View>
      </View>
      <View style={styles.checkContainer}>
        <Text style={styles.lang}>العربية</Text>
        <View
          style={
            Platform.OS === 'ios'
              ? [
                  styles.radioBorder,
                  {
                    backgroundColor:
                      checked === 'second' ? colors.orange : null,
                    borderColor: checked === 'second' ? 'transparent' : 'grey',
                  },
                ]
              : null
          }>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={Platform.OS === 'ios' ? '#fff' : colors.orange}
          />
        </View>
      </View>
      <View style={styles.customBtn}>
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
  customBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
});

export default CheckLanguage;
