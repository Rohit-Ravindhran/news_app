import {StyleSheet, PixelRatio} from 'react-native';
import {Colors} from '../../theme/Colors';
import {Dimensions} from '../../theme/Dimensions';
import StaticVariables from '../../preference/StaticVariables';

const width = Dimensions.DeviceWidth;
const height = Dimensions.DeviceHeight;
const scale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    alignItems: 'center',
  },

  outerContainer: {
    backgroundColor: Colors.name.white,
    flex: 1,
  },
  newsList: {
    width: '100%',
    height: '100%',
  },
  dateModal: {
    height: height / 3,
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  datePicker: {
    width: width,
    height: height / 4.5,
    backgroundColor: 'white',
    alignSelf: 'center',
  },

  dateButtonContainer: {
    marginTop: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Colors.name.white,
  },
  dateBackButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.name.grey,
  },
  dateSaveButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    marginHorizontal: 10,
  },
  saveButtonText: {
    color: Colors.name.white,
    fontFamily:
      Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
  },
  dateSelection: {
    flexDirection: 'row',

    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:5,
  },
  dateInput: {
    borderWidth: 1,
    borderRadius:5,
    borderColor: Colors.name.silver,
    backgroundColor: Colors.name.white,
    height: height * 0.05,
    fontSize:12/scale,
    padding: 8,
    marginTop: 5,
    color: Colors.name.black,
    fontFamily:
      Platform.OS === StaticVariables.PLATFORM_ANDROID ? 'Roboto' : null,
      marginHorizontal:10,
      paddingHorizontal:10
  },
  noResultsFoundView: {
    marginTop: height / 6.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResulstFoundIcon: {
    resizeMode: 'contain',
    width: width * 0.2,
    height: height * 0.2,
  },
  noResultsFoundTxt: {
    color: Colors.name.silver,
    fontSize: 15 / scale,
  },
  dateChangeTxt:{
    color:Colors.name.blue
  }
});

export default styles;
