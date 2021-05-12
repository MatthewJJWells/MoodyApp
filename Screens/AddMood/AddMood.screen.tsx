import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MoodType from '../../Components/MoodType/MoodTypes.component';
import CheckBox from '@react-native-community/checkbox';
import styles from './AddMood.style';

const AddMood: React.FC = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, position: 'absolute', top: 50 }}>
        How do you feel?
      </Text>
      <View style={styles.moodContainer}>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
        <MoodType></MoodType>
      </View>

      <View style={styles.switchContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        ></CheckBox>
        <Text>share?</Text>
      </View>

      <TouchableOpacity style={styles.addMoodBtn}>
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
