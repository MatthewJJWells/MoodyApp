import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './DashBoard.style';
import { getUserRecords } from '../../services/ApiService';
import { MoodEntryButton, Date, MoodPost } from '../../Components/index';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { DashboardProps } from '../../Interfaces/';

const Dashboard: React.FC<DashboardProps> = ({
  navigation,
  userName,
  moodPosts,
  setMoodPosts,
}) => {
  const [gotRecords, setGotRecords] = useState(false);

  useEffect(() => {
    if (!gotRecords) {
      getUserRecords(99).then((records) => {
        setMoodPosts(records);
        setGotRecords(true);
      });
    }
  }, []);

  const navigationAddMood = () => {
    navigation.navigate('Add Mood');
  };
  return (
    <View style={styles.container}>
      <Date />
      <Text style={styles.title}>Good Afternoon {userName}</Text>
      <View style={styles.entriesContainer}>
        <FlatList
          contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
          data={moodPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MoodPost item={item} />}
        ></FlatList>
      </View>
      <MoodEntryButton onPress={navigationAddMood}></MoodEntryButton>
    </View>
  );
};

export default loginConnector(Dashboard);
