import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckLanguage from '../screens/CheckLanguage';
import {CHECK_LANGUAGE} from '../global/types';

const Stack = createNativeStackNavigator();

const WelcomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={CHECK_LANGUAGE} component={CheckLanguage} />
    </Stack.Navigator>
  );
};

export default WelcomeNavigation;
