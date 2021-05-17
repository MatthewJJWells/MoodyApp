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
      <View style={styles.groupContainer}>
        <View style={styles.group1}>
          <View>
            <Text style={styles.item}>05-14-2021</Text>
          </View>
          <View>
            <Text style={styles.item}>{item.mood_text}</Text>
          </View>
          <View>
            <Text style={styles.item}>Intensity: {item.rating}</Text>
          </View>
        </View>

        <View style={styles.group2}>
          <Text style={styles.item}>Note: {item.personal_note}</Text>
        </View>
      </View>
    </View>
  );
};

export default MoodPost;
