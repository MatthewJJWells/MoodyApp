import React from 'react';
import { View, Text } from 'react-native';
import styles from './MoodPost.style';

import MoodType from '../MoodType/MoodTypes.component';

export interface MoodLog {
  item: {
    id: number;
    date: string;
    mood_text: string;
    rating: number;
    personal_note: string;
  };
}

const MoodPost: React.FC<MoodLog> = ({ item }) => {
  return (
    <View style={styles.moodPost}>
      <View>
        <Text>{item.date}</Text>
      </View>
      <MoodType item={item.mood_text}></MoodType>
      <View>
        <Text>{item.rating}</Text>
      </View>
    </View>
  );
};

export default MoodPost;
