import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './Analytics.style';
import { PieChart } from 'react-native-chart-kit';
import { weeklyMoods, monthlyMoods } from '../../Utilities/Analytics.utilities';

const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analytics</Text>

      <View>
        <Text style={styles.cardTitle}>Weekly Moods</Text>
        <View style={styles.card}>
          <PieChart
            data={weeklyMoods}
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
