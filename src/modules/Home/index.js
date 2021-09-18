import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import NetInfo from '@react-native-community/netinfo';
import Loader from '../../components/Common/Loader';
import ApiProvider from '../../services/Api';
import {AppUrl} from '../../services/Api/model/ApiUrl';
import NewsItem from '../../components/NewsItem';
import styles from './style';
import {Colors} from '../../theme/Colors';
import AppBar from '../../components/AppBar';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modalbox';
import {getDate} from '../../handler/Date';
import ConfigSettings from '../../preference/ConfigSettings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [newsList, setNewsList] = useState([]);
  const [fetchedList, setFetchedList] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  const [loading, setLoading] = useState(false);
  const [fetchCount, setFetchCount] = useState(0);
  const [noMoreToLoad, setNoMoreToLoad] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [mode, setMode] = useState('date');
  const [showDate, setShowDate] = useState(false);
  const isFirstRun = useRef(true);

  const fetchNewsList = () => {
    try {
      const data = {};
      setLoading(true);

      ApiProvider.getAppInstance(AppUrl.listNews, {
        params: {
          q: 'tesla',
          from: getDate(fromDate),
          sortBy: 'publishedAt',
          apiKey: ConfigSettings.apiKey,
        },
      }).then(response => {
        setLoading(false);
        if (response === false) {
          setNewsList([]);
          setNoResults(true);

          Snackbar.show({
            text: 'Something went wrong',
            duration: Snackbar.Snackbar.LENGTH_SHORT,
            action: {
              text: 'Dismiss',
              textColor: Colors.name.red,
              onPress: () => {
                Snackbar.dismiss();
              },
            },
          });
        } else {
          if (response.status === 'ok') {
            if (response?.articles !== undefined) {
              if (response?.articles?.length > 0) {
                console.log('newslist', response?.articles);
                setNewsList(response?.articles);
                saveCacheData(response?.articles);
                setNoResults(false);
              } else {
                setNewsList([]);
                setNoResults(true);
              }
            }
          } else {
            setNewsList([]);
            setNoResults(true);
          }
        }
      });
    } catch (error) {
      setLoading(false);
      setNoResults(true);

      setNewsList([]);

      Snackbar.show({
        text: 'Something went wrong',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          text: 'Dismiss',
          textColor: Colors.name.red,
          onPress: () => {
            Snackbar.dismiss();
          },
        },
      });
    }
  };

  const fetchData = () => {
    const data = newsList;
    if (fetchCount < data?.length) {
      const nextList = data?.slice(fetchCount, fetchCount + 5);

      const updatedNewsList = [...fetchedList, ...nextList];
      const updatedFetchCount = fetchCount + 5;
      if (updatedFetchCount >= data?.length) {
        setNoMoreToLoad(true);
      } else {
        setNoMoreToLoad(false);
      }

      setFetchedList(updatedNewsList);
      setFetchCount(updatedFetchCount);
    } else {
      setNoMoreToLoad(true);
    }
  };

  const saveCacheData = async data => {
    let result = false;
    try {
      await AsyncStorage.setItem('CachedNews', JSON.stringify(data));
    } catch (error) {
      console.error(error);
      console.log('Async Storage Error', 'Couldnt Cache news');
    }
  };
  const fetchCachedData = async () => {
    let news = null;
    try {
      news = await AsyncStorage.getItem('CachedNews');
      if (news !== null && news.length > 0) {
        setNewsList(JSON.parse(news));
      } else {
        Snackbar.show({
          text: 'No Cached news found at the moment',
          duration: Snackbar.LENGTH_SHORT,
          action: {
            text: 'Ok',
            textColor: Colors.name.yellow,
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    Platform.OS == 'android' && setShowDate(false);
    setFromDate(currentDate);
    setFetchCount(0);
    setFetchedList([]);
    fetchNewsList();
  };

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Is connected?', state.isConnected);
      if (state.isConnected) {
        setIsOnline(true);
        fetchNewsList();
      } else {
        setIsOnline(false);

        fetchCachedData();

        Snackbar.show({
          text: 'Device Offline.Showing saved news from cache',
          duration: Snackbar.LENGTH_INDEFINITE,
          action: {
            text: 'OK',
            textColor: Colors.name.yellow,
            onPress: () => {
              Snackbar.dismiss();
            },
          },
        });
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [newsList]);

  const renderFooter = () => {
    return (
      !loading &&
      fetchedList?.length > 0 &&
      (!noMoreToLoad ? (
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.name.lightNavyBlue,
          }}
          activeOpacity={0.5}
          onPress={fetchData}>
          <Text
            style={{
              color: Colors.name.white,
              fontSize: 14,
            }}>
            View More
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            height: 50,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
          }}>
          <Text
            style={{
              color: Colors.name.silver,
              fontSize: 12,
            }}>
            That's all folks
          </Text>
        </View>
      ))
    );
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <AppBar menuButtonPress={() => {}} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setShowDate(true)}
        style={styles.dateSelection}>
        <View>
          <Text style={styles.dateChangeTxt}>Change</Text>
        </View>
        <TextInput
          value={getDate(fromDate)}
          style={styles.dateInput}
          editable={false}
          keyboardType={'number-pad'}
          pointerEvents={'none'}
        />
      </TouchableOpacity>
      <Loader loading={loading} />
      {noResults ? (
        <View style={styles.noResultsFoundView}>
          <Image
            source={require('../../assets/images/no-results.png')}
            style={styles.noResulstFoundIcon}
          />
          <Text style={styles.noResultsFoundTxt}>
            No results found for the specified date
          </Text>
        </View>
      ) : (
        <FlatList
          data={fetchedList}
          extraData={fetchedList}
          initialNumToRender={10}
          style={[styles.newsList]}
          onEndReachedThreshold={0.5}
          // onEndReached={fetchData}
          scrollEventThrottle={1}
          ListFooterComponent={renderFooter}
          renderItem={({item, index}) => <NewsItem data={item} />}
        />
      )}
      {Platform.OS === 'ios' ? (
        <Modal
          isOpen={showDate}
          backdropPressToClose={false}
          swipeToClose={false}
          position={'bottom'}
          backdropOpacity={0}
          style={styles.dateModal}>
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedDate}
            mode={'date'}
            maximumDate={new Date()}
            style={styles.datePickerIos}
            display={'spinner'}
            onChange={(event, selectDate) => {
              setSelectedDate(selectDate);
            }}
          />

          <View style={styles.dateButtonContainer}>
            <TouchableOpacity
              style={styles.dateBackButton}
              activeOpacity={0.5}
              onPress={() => setShowDate(false)}>
              <Text style={styles.backButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dateSaveButton}
              activeOpacity={0.5}
              onPress={() => {
                setShowDate(false), onDateChange(selectedDate);
              }}>
              <Text style={styles.saveButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            value={fromDate}
            mode={'date'}
            maximumDate={new Date()}
            display={'default'}
            onChange={onDateChange}
          />
        )
      )}
    </SafeAreaView>
  );
};
export default Home;
