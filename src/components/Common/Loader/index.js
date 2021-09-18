import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {Colors} from '../../../theme/Colors';
import styles from './style';

// Loader component
const Loader = React.memo(props => {
  const {loading} = props;

  return (
    <>
      {loading && (
        <View style={styles.modalBackground}>
          <ActivityIndicator
            animating={loading}
            size="large"
            color={Colors.theme.backgroundSecondary}
          />
        </View>
      )}
    </>
  );
});

export default Loader;
