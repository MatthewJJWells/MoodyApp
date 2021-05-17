import React from 'react';
import { Text, View } from 'react-native';
import styles from './Date.stye';
import dayjs from 'dayjs';

export const Date: React.FC<Record<string, never>> = () => {
  const dateToday = dayjs().format('D MMM - dddd');
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.buttonText}>{dateToday}</Text>
    </View>
  );
};
