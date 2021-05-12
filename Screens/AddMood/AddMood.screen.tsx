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
import { MoodLog } from '../../Components/MoodPost/MoodPost.component';

const AddMood: React.FC<MoodLog> = ({ item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const moodyPosts = [
    {
      id: 1,
      date: '21/03/21',
      mood_text: 'happy',
      rating: 8,
      personal_note: '',
    },
    { id: 2, date: '22/04/21', mood_text: 'sad', rating: 2, personal_note: '' },
    {
      id: 3,
      date: '30/004/21',
      mood_text: 'meh',
      rating: 5,
      personal_note: '',
    },
    {
      id: 4,
      date: '21/03/21',
      mood_text: 'angry',
      rating: 8,
      personal_note: '',
    },
    { id: 5, date: '22/04/21', mood_text: 'sad', rating: 2, personal_note: '' },
    {
      id: 6,
      date: '30/004/21',
      mood_text: 'meh',
      rating: 5,
      personal_note: '',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, position: 'absolute', top: 50 }}>
        How do you feel?
      </Text>
      <View style={styles.moodContainer}>
        {/* <FlatList
          data={moodyPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MoodType item={item.mood_text} />}
        ></FlatList> */}
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

      <View style={styles.toggleContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        ></CheckBox>
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
