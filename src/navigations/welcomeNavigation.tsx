import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckLanguage from '../screens/CheckLanguage';
import {CHECK_LANGUAGE, INTRO_SLIDER} from '../global/types';
import IntroSlider from '../screens/IntroSlider';

const Stack = createNativeStackNavigator();

const WelcomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={CHECK_LANGUAGE} component={CheckLanguage} />
      <Stack.Screen name={INTRO_SLIDER} component={IntroSlider} />
    </Stack.Navigator>
  );
};

export default WelcomeNavigation;
