import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme/Colors';

const styles = StyleSheet.create({
  modalBackground: {

    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.name.blackopacity,
    zIndex: 999999,
  },
});

export default styles;
