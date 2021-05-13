import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MoodEntryButton.style';

const MoodEntryButton: React.FC<Record<string, never>> = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Add Mood</Text>
    </TouchableOpacity>
  );
};

export default MoodEntryButton;
