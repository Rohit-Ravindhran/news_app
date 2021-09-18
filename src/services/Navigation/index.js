import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './RootStack';
import {SafeAreaView} from 'react-native';

const Navigation = props => {

return (

      <NavigationContainer>
        <SafeAreaView />

        <RootStackScreen stack={RootStackScreen} />
      </NavigationContainer>
  );
};

export default Navigation;
