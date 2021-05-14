import React from 'react';
import { View, Text } from 'react-native';
import styles from './MoodPost.style';

export interface MoodLog {
  item: {
    id: number;
    datetime: string;
    mood_text: string;
    rating: number;
    personal_note: string;
  };
}

const MoodPost: React.FC<MoodLog> = ({ item }) => {
  return (
    <View style={styles.moodPost}>
      <View>
        <Text>05-14-2021</Text>
      </View>
      <View>
        <Text>{item.mood_text}</Text>
      </View>
      <View>
        <Text>Intensity: {item.rating}</Text>
      </View>
      <View>
        <Text>Note: {item.personal_note}</Text>
      </View>
    </View>
  );
};

export default MoodPost;
