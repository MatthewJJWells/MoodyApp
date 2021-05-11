import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MoodEntry.style';

const MoodEntryButton: React.FC<Record<string, never>> = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text>Add Mood</Text>
    </TouchableOpacity>
  );
};

export default MoodEntryButton;
