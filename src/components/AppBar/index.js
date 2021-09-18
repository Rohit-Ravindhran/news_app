/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../theme/Colors';
import {Dimensions} from '../../theme/Dimensions';
import styles from './style';

// App Bar
const AppBar = React.memo(props => {
  const {menuButtonPress} = props;
  const height = Dimensions.DeviceHeight;

  return (
    <React.Fragment>
      <View style={styles.outerContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={menuButtonPress}>
          <MaterialCommunityIcons
            name="menu"
            color={Colors.name.black}
            size={height * 0.05}
          />
        </TouchableOpacity>
        <Text style={styles.titleText}>News App</Text>
      </View>
    </React.Fragment>
  );
});

export default AppBar;
