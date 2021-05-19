import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './Analytics.style';
import { PieChart } from 'react-native-chart-kit';
import { getCount } from '../../Utilities/Analytics.utilities';
import { AnalyticsProps, ChartMoods } from '../../Interfaces';

const Analytics: React.FC<AnalyticsProps> = ({ moodPosts }) => {
  const [overallMoods, setOverallMoods]: [
    ChartMoods[],
    Dispatch<SetStateAction<ChartMoods[]>>,
  ] = useState<ChartMoods[]>([]);

  const [monthlyMoods, setMonthlyMoods]: [
    monthlyMoods: ChartMoods[],
    setMonthlyMoods: Dispatch<SetStateAction<ChartMoods[]>>,
  ] = useState<ChartMoods[]>([]);

  useEffect(() => {
    getCount(moodPosts, setOverallMoods, false);
    getCount(moodPosts, setMonthlyMoods, true);
  }, [moodPosts]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytics</Text>
      <View>
        <Text style={styles.cardTitle}>Overall Moods</Text>
        <View style={styles.card}>
          <PieChart
            data={overallMoods}
            width={Dimensions.get('window').width - 16}
            height={250}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="population"
            backgroundColor="none"
            paddingLeft="15"
            absolute
          />
        </View>
        <Text style={styles.cardTitle}>Monthly Moods</Text>
        <View style={styles.card}>
          <PieChart
            data={monthlyMoods}
            width={Dimensions.get('window').width - 16}
            height={250}
            chartConfig={{
              backgroundColor: '#1cc910',
              backgroundGradientFrom: '#eff3ff',
              backgroundGradientTo: '#efefef',
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            accessor="population"
            backgroundColor="none"
            paddingLeft="15"
            absolute
          />
        </View>
      </View>
    </View>
  );
};

export default Analytics;
