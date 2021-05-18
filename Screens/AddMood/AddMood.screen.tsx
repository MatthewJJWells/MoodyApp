import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './AddMood.style';
import {
  moodsArray,
  createMoodRecord,
} from '../../Utilities/AddMood.utilities';
import { addRecord } from '../../services/ApiService';
import { AddMoodProps } from '../../Interfaces/AddMoodInterface/AddMood.interface';

const AddMood: React.FC<AddMoodProps> = ({
  navigation,
  moodPosts,
  setMoodPosts,
}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const [note, setNote] = useState('');

  const navigateDashboard = () => {
    navigation.navigate('Dashboard');
  };
  const handleSubmit = async () => {
    if (currentMood === '') return;
    const moodRecord = createMoodRecord(currentMood, toggleCheckBox, note);
    const addedRecord = await addRecord(moodRecord);
    setNote('');
    setCurrentMood('');
    setMoodPosts([addedRecord, ...moodPosts]);
    navigateDashboard();
  };

  const arrayOfMoods = moodsArray.map((mood) => (
    <TouchableHighlight
      key={mood.mood_text}
      onPress={() => setCurrentMood(mood.mood_text)}
      underlayColor={'white'}
      style={
        currentMood !== mood.mood_text
          ? styles.buttonStyle
          : styles.pressedButtonStyle
      }
    >
      <Text style={styles.buttonText}>{mood.mood_text}</Text>
    </TouchableHighlight>
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
        <Text style={styles.share}>Share?</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          handleSubmit();
        }}
      >
        <Text style={styles.buttonStyle}>Add Mood</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddMood;
