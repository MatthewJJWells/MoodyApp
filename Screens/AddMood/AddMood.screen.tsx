import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import MoodType from '../../Components/MoodType/MoodTypes.component';
import CheckBox from '@react-native-community/checkbox';
import styles from './AddMood.style';
import {
  moodsArray,
  createMoodRecord,
} from '../../Utilities/AddMood.utilities';
import { MoodLog } from '../../Components/MoodPost/MoodPost.component';
import { call } from 'react-native-reanimated';
import { addRecord } from '../../services/ApiService';

const AddMood: React.FC<MoodLog> = ({ item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = () => {
    const moodRecord = createMoodRecord(currentMood, toggleCheckBox, note);
    console.log(moodRecord);
    addRecord(moodRecord);
  };

  const arrayOfMoods = moodsArray.map((mood) => (
    <TouchableOpacity
      key={mood.mood_text}
      onPress={() => setCurrentMood(mood.mood_text)}
      style={styles.buttonStyle}
    >
      <Text style={styles.buttonText}>{mood.mood_text}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How do you feel?</Text>

      <View style={styles.moodContainer}>{arrayOfMoods}</View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(letter) => setNote(letter)}
          value={note}
          placeholder="Add more detail..."
        ></TextInput>
      </View>

      <View style={styles.toggleContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        ></CheckBox>
        <Text>Share?</Text>
      </View>

      <TouchableOpacity onPress={() => handleSubmit()}>
        <Text style={styles.buttonStyle}>Add Mood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMood;
