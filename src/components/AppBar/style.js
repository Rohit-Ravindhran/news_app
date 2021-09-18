import {StyleSheet, PixelRatio} from 'react-native';
import {Colors} from '../../theme/Colors';

const scale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    backgroundColor: Colors.name.white,
  },
  menuButton: {
    padding: 10,
  },
  titleText: {
    color: Colors.name.lightNavyBlue,
    alignSelf: 'center',
    position: 'absolute',
    fontSize: 20 / scale,
  },
});

export default styles;
