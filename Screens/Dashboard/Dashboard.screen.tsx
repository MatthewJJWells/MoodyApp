import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './DashBoard.style';

import {
  MoodEntryButton,
  MoodType,
  Date,
  MoodPost,
} from '../../Components/index';

import { loginConnector } from '../../Utilities/Login.utlilities';
import { DashboardProps } from '../../Interfaces/';

const moodyPosts = [
  { id: 1, date: '21/03/21', mood_text: 'happy', rating: 8, personal_note: '' },
  { id: 2, date: '22/04/21', mood_text: 'sad', rating: 2, personal_note: '' },
  { id: 3, date: '30/004/21', mood_text: 'meh', rating: 5, personal_note: '' },
];

const Dashboard: React.FC<DashboardProps> = ({ navigation, userName }) => {
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
