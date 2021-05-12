import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import MoodType from '../../Components/MoodType/MoodTypes.component';
import styles from './AddMood.style';

const AddMood: React.FC = () => {
  return (
    <View style={styles.container}>
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

      {/* <Button title='Add Mood' onPress={() => console.log('mood added')}></Button> */}
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
