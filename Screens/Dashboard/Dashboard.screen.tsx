import React from 'react';
import { View, Text } from 'react-native';
import styles from './DashBoard.style';

import { MoodEntryButton } from '../../Components/index';

const Dashboard: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <MoodEntryButton></MoodEntryButton>
    </View>
  );
};

export default Dashboard;
