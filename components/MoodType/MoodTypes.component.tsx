import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MoodTypes.style';

const MoodType: React.FC<Record<string, never>> = () => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>Happy</Text>
    </TouchableOpacity>
  );
};

export default MoodType;
