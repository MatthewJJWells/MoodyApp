import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import styles from './MoodEntryButton.style';

const MoodEntryButton: React.FC<{
  onPress: (event: GestureResponderEvent) => void;
}> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>Add Mood</Text>
    </TouchableOpacity>
  );
};

export default MoodEntryButton;
