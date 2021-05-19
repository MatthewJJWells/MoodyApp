import React from 'react';
import { View, Text } from 'react-native';
import styles from './MoodPost.style';
import getTimeDate from '../../Utilities/MoodPost.utilities';
import { MoodRecord } from '../../Utilities/AddMood.utilities';

export interface MoodLog {
  item: MoodRecord;
}

const MoodPost: React.FC<MoodLog> = ({ item }) => {
  const timeDate = getTimeDate(item.datetime);
  return (
    <View style={styles.moodPost}>
      <View style={styles.recordContainer}>
        <View style={styles.date_mood_int}>
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={styles.item}>{timeDate.date}</Text>
            <Text style={styles.item}>{timeDate.time}</Text>
          </View>
          <View>
            <Text style={styles.item}>{item.mood_text}</Text>
          </View>
          <View>
            <Text style={styles.item}>Intensity: {item.rating}</Text>
          </View>
        </View>

        <View style={styles.note_container}>
          <Text style={styles.item}>Note: {item.personal_note}</Text>
        </View>
      </View>
    </View>
  );
};

export default MoodPost;
