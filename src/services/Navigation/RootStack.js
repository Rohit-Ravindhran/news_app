import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StaticVariables from '../../preference/StaticVariables';

import Home from '../../modules/Home';

const RootStack = createStackNavigator();
const RootStackScreen = ({stack}) => (
  <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name={StaticVariables.HOME}
        component={Home}
        options={{
          animationEnabled: false,
        }}
      />

  </RootStack.Navigator>
);

export default RootStackScreen;
