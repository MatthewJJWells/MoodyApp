import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './FormButton.styles';

const FormButton: React.FC<{ buttonName: string }> = ({
  buttonName,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
