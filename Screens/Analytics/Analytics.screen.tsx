import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './Analytics.style';
import { PieChart } from 'react-native-chart-kit';
import {
  dailyMoods,
  weeklyMoods,
  monthlyMoods,
} from '../../Utilities/Analytics.utilities';

const Analytics: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ textAlign: 'center' }}>Daily Moods</Text>
        <PieChart
          data={dailyMoods}
          width={Dimensions.get('window').width - 16}
          height={220}
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
      <View>
        <Text style={{ textAlign: 'center' }}>Weekly Moods</Text>
        <PieChart
          data={weeklyMoods}
          width={Dimensions.get('window').width - 16}
          height={220}
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
      <View>
        <Text style={{ textAlign: 'center' }}>Monthly Moods</Text>
        <PieChart
          data={monthlyMoods}
          width={Dimensions.get('window').width - 16}
          height={220}
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
  );
};

export default Analytics;
