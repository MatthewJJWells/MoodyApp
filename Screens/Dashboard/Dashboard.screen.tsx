import React from 'react';
import { View, Text } from 'react-native';
import styles from './DashBoard.style';

import { MoodEntryButton, MoodType, Date } from '../../Components/index';

const Dashboard: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <Date />
      <MoodEntryButton></MoodEntryButton>
      {/* <MoodType></MoodType> */}
    </View>
  );
};

export default Dashboard;
