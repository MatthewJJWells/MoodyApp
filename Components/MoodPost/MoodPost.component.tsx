import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './MoodPost.style';
import getTimeDate from '../../Utilities/MoodPost.utilities';
import { MoodRecord } from '../../Utilities/AddMood.utilities';

export interface MoodLog {
  item: MoodRecord;
}

import arrowUp from '../../assets/arrow_up.png';
import arrowDown from '../../assets/arrow_down.png';

const MoodPost: React.FC<MoodLog> = ({ item }) => {
  const [personalNoteShown, setPersonalNoteShown] = useState(false);

  const timeDate = getTimeDate(item.datetime);
  return (
    <View style={styles.moodPost}>
      <View style={styles.recordContainer}>
        <View style={styles.date_mood_int}>
          <View style={styles.section1}>
            <Text style={{ fontSize: 11, color: '#fefefe' }}>
              {timeDate.date}
            </Text>
            <Text style={{ fontSize: 24, color: '#fefefe' }}>
              {timeDate.time}
            </Text>
          </View>
          <View style={styles.section2}>
            <Text style={styles.fieldTitle}>Mood</Text>
            <Text style={styles.item}>{item.mood_text}</Text>
          </View>
          <View style={styles.section3}>
            <Text style={styles.fieldTitle}>Intensity</Text>
            <Text style={styles.item}>{item.rating}</Text>
          </View>
        </View>

        {personalNoteShown ? (
          <View>
            <View style={styles.note_container}>
              <Text style={styles.noteText}>Note: {item.personal_note}</Text>
            </View>
            <Pressable
              style={styles.arrow_container}
              onPress={() => {
                setPersonalNoteShown(false);
              }}
            >
              <Image
                style={{
                  width: 400,
                  height: 10,
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }}
                source={arrowUp}
              ></Image>
            </Pressable>
          </View>
        ) : (
          <Pressable
            style={styles.arrow_container}
            onPress={() => {
              setPersonalNoteShown(true);
            }}
          >
            <Image
              style={{
                height: 10,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
              source={arrowDown}
            ></Image>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default MoodPost;
