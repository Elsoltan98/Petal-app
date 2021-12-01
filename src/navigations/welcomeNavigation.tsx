import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckLanguage from '../screens/CheckLanguage';
import {CHECK_LANGUAGE, INTRO_SLIDER, LOG_IN} from '../global/types';
import IntroSlider from '../screens/IntroSlider';
import LogIn from '../screens/LogIn';

const Stack = createNativeStackNavigator();

const WelcomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CHECK_LANGUAGE} component={CheckLanguage} />
      <Stack.Screen name={INTRO_SLIDER} component={IntroSlider} />
      <Stack.Screen name={LOG_IN} component={LogIn} />
    </Stack.Navigator>
  );
};

export default WelcomeNavigation;
