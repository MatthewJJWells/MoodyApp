import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './MoodTypes.style';

const MoodType: React.FC<{ item?: string | number }> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text
        style={styles.buttonText}
        onPress={() => console.log('mood tapped: ')}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default MoodType;
