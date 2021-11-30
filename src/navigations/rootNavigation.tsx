import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigation from './welcomeNavigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <WelcomeNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
