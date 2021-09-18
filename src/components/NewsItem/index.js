import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SectionList,
  ActivityIndicator,
  Alert,
  StatusBar,
} from 'react-native';
import {Colors} from '../../../theme/Colors';
import styles from './style';

const NewsItem = React.memo(props => {
  const {data} = props;

  return (
    <>
      {data != undefined && (
        <View style={styles.requestContainer}>
          <View style={styles.header}></View>
          <View style={styles.userDetailsContainer}>
            <View style={styles.userContainer}>
              <View>
                <Image style={styles.photo} source={{uri: data?.urlToImage}} />
              </View>
            </View>
            {data?.description != undefined && (
              <View style={styles.dealsContainer}>
                <Text
                  style={styles.titleTxt}
                  numberOfLines={2}
                  ellipsizeMode={'tail'}>
                  {data?.title}
                </Text>
                <View style={styles.timingsContainer}>
                  <View style={styles.timings}>
                    <Image
                      source={require('../../assets/timeIcon.png')}
                      style={styles.smallIcon}
                    />

                    <View style={styles.dateItem}>
                      <Text style={styles.timeTxt}>{data?.publishedAt}</Text>
                    </View>
                    <View>
                      <Text style={styles.requestTxt}>
                        {data?.source?.name}
                      </Text>
                      <Text style={styles.authorTxt}>{data?.author}</Text>
                    </View>
                  </View>
                  <View style={styles.placeContainer}></View>
                </View>
              </View>
            )}
          </View>

          <View style={styles.timeDetails}>
            {/* <Text style={styles.customerLblTxt}>{data?.content}</Text> */}
          </View>
        </View>
      )}
    </>
  );
});

export default NewsItem;
