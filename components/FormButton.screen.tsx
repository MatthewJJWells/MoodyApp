import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import styles from './FormButton.styles';

const FormButton: React.FC<Record<string, never>> = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Hello</Text>
    </TouchableOpacity>
  );
};

export default FormButton;
