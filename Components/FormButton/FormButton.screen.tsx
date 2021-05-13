import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';
import styles from './FormButton.styles';

const FormButton: React.FC<{
  buttonName: string;
  onPress: (event: GestureResponderEvent) => void;
}> = ({ buttonName, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
