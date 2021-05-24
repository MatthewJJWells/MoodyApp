import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './DashBoard.style';
import { getUserRecords } from '../../services/ApiService';
import { Date, MoodPost } from '../../Components/index';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { DashboardProps } from '../../Interfaces/';
import { MoodRecord } from '../../Utilities/AddMood.utilities';

const Dashboard: React.FC<DashboardProps> = ({
  userName,
  moodPosts,
  setMoodPosts,
}) => {
  const [gotRecords, setGotRecords] = useState(false);

  useEffect(() => {
    if (!gotRecords) {
      getUserRecords(6754).then((records: MoodRecord[]) => {
        setMoodPosts(() => records);
        setGotRecords(true);
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dashboard_header}>
        <Date />
        <Text style={styles.title}>Good Afternoon {userName}</Text>
      </View>
      <View style={styles.entriesContainer}>
        <View>
          <Text style={styles.title}>Mood History</Text>
        </View>
        <FlatList
          contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
          showsVerticalScrollIndicator={false}
          data={moodPosts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <MoodPost item={item} />}
        ></FlatList>
      </View>
    </View>
  );
};

export default loginConnector(Dashboard);
