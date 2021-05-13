import React from 'react';
import { Text, View } from 'react-native';
import styles from './Date.stye';

const Date: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.buttonText}>7th May - Friday</Text>
    </View>
  );
};

export default Date;
