import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CheckBox from '@react-native-community/checkbox';
import styles from './AddMood.style';
import {
  moodsArray,
  createMoodRecord,
} from '../../Utilities/AddMood.utilities';
import { addRecord } from '../../services/ApiService';
import { AddMoodProps } from '../../Interfaces/AddMoodInterface/AddMood.interface';

const AddMood: React.FC<AddMoodProps> = ({ navigation, setMoodPosts }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [currentMood, setCurrentMood] = useState('');
  const [note, setNote] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = async () => {
    if (currentMood === '') return;
    const moodRecord = createMoodRecord(
      currentMood,
      toggleCheckBox,
      note,
      rating,
    );
    const addedRecord = await addRecord(moodRecord);
    setNote('');
    setCurrentMood('');
    setMoodPosts((moodPosts) => [addedRecord, ...moodPosts]);
    navigation.navigate('Dashboard');
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

      <View>
        <MultiSlider
          onValuesChangeFinish={(values) => {
            setRating(values[0]);
          }}
          min={1}
          max={10}
          selectedStyle={{
            backgroundColor: '#F0C7FF',
          }}
          unselectedStyle={{
            backgroundColor: '#fefefe',
          }}
          markerStyle={{
            backgroundColor: '#F0C7FF',
            height: 22,
            width: 22,
          }}
        />
      </View>
      <Text style={styles.moodRating}>Mood rating: {rating}</Text>

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
