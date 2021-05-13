import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MoodType from '../../Components/MoodType/MoodTypes.component';
// import CheckBox from '@react-native-community/checkbox';
import styles from './AddMood.style';
import { MoodLog } from '../../Components/MoodPost/MoodPost.component';

const AddMood: React.FC<MoodLog> = ({ item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [currentMood, setCurrentMood] = useState('');

  const moodyPosts = [
    { mood_text: 'happy' },
    { mood_text: 'sad' },
    { mood_text: 'meh' },
    { mood_text: 'angry' },
    { mood_text: 'mad' },
    { mood_text: 'hopeful' },
    { mood_text: 'happy' },
    { mood_text: 'sad' },
    { mood_text: 'meh' },
    { mood_text: 'happy' },
    { mood_text: 'sad' },
    { mood_text: 'meh' },
    { mood_text: 'happy' },
    { mood_text: 'sad' },
    { mood_text: 'dangerous' },
  ];

  const arrayOfMoods = moodyPosts.map((mood) => (
    <MoodType item={mood.mood_text} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How do you feel?</Text>

      <View style={styles.moodContainer}>{arrayOfMoods}</View>

      <View style={styles.toggleContainer}>
        {/* <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        ></CheckBox> */}
        <Text>share?</Text>
      </View>

      <TouchableOpacity>
        <Text>Add Mood</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add more detail..."
        ></TextInput>
      </View>
    </View>
  );
};

export default AddMood;
