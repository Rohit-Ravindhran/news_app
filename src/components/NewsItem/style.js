import {StyleSheet, PixelRatio} from 'react-native';
import {Colors} from '../../theme/Colors';
import {Dimensions} from '../../theme/Dimensions';

const width = Dimensions.DeviceWidth;
const height = Dimensions.DeviceHeight;
const scale = PixelRatio.getFontScale();

const styles = StyleSheet.create({
  requestContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    borderWidth: 0.5,
    borderColor: Colors.name.silver,

   
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical:12
  },
  header: {
    flexDirection: 'row',
  },
  requestTxt: {
    fontWeight: 'bold',
    color: Colors.blue,
    fontSize: 10,
  },
  timeTxt: {
    color: 'grey',
    fontSize: 8,
  },
  timeLine: {},
  userDetailsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userDetails: {
    marginStart: 10,
    justifyContent: 'center',
  },
  photo: {
    width: width * 0.2,
    height: width * 0.25,
    borderRadius: 20,
  },

  titleTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
    marginHorizontal: 10,
    marginTop:5
  },
  userPlace: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  dealsContainer: {
    flex: 1,
    alignSelf: 'center',

  },
  dealsIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  dealsTxt: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
    marginHorizontal: 10,
    marginStart: 10,
  },
  customerLblTxt: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
  smallIcon: {
    width: width * 0.04,
    height: width * 0.04,
    resizeMode: 'contain',
    flex: 0.1,
  },
  placeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  placeTxt: {
    color: Colors.blue,
    fontWeight: 'bold',
    marginStart: 10,
    fontSize: 12,
    flex: 1,
  },

  dateList: {
    width: 100,
    height: 200,
  },
  timingsContainer: {
    marginTop: 20,
  },
  timings: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  timesList: {
    marginStart: 10,
    flex: 1,
  },
  dateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  dateTxt: {
    color: 'black',

    fontSize: scale / 10,
  },
  timeTxt: {
    color: 'black',
    fontWeight: 'bold',
    color:Colors.name.silver,
    fontSize: 9,
    marginStart: 5,
    marginTop: 2,
  },
  authorTxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 8,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  acceptRequestBtn: {
    borderRadius: 5,
    backgroundColor: Colors.blue,
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  resheduleBtn: {
    borderRadius: 5,
    backgroundColor: 'white',
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  acceptRequestBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  resheduleBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    color: Colors.blue,
  },
  moreBtn: {alignItems: 'center', flex: 0.2},
  moreIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  moreTxt: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 12,
    marginHorizontal: 5,
  },
});

export default styles;
