import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './DashBoard.style';

import { addRecord, getUserRecords } from '../../services/ApiService';

import {
  MoodEntryButton,
  MoodType,
  Date,
  MoodPost,
} from '../../Components/index';

import { loginConnector } from '../../Utilities/Login.utlilities';
import { DashboardProps } from '../../Interfaces/';

const Dashboard: React.FC<DashboardProps> = ({ navigation, userName }) => {
  const [moodyPosts, setMoodyPosts] = useState([]);
  const [gotRecords, setGotRecords] = useState(false);

  useEffect(() => {
    if (!gotRecords) {
      getUserRecords(15).then((records) => {
        setMoodyPosts(records);
        setGotRecords(true);
      });
    }
  });

  const navigationAddMood = () => {
    navigation.navigate('Add Mood');
  };
  return (
    <View style={styles.container}>
      <Date />
      <Text>Good Morning {userName}!</Text>
      <View style={styles.entriesContainer}>
        <FlatList
          data={moodyPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MoodPost item={item} />}
        ></FlatList>
      </View>
      <MoodEntryButton onPress={navigationAddMood}></MoodEntryButton>
    </View>
  );
};

export default loginConnector(Dashboard);
