import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './FormButton.styles';

const FormButton: React.FC<{ buttonName: string }> = ({ buttonName }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.buttonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
