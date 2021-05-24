import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { RootStackParamList } from '../navigationInterfaces';
import { MoodRecord } from '../../Utilities/AddMood.utilities';
type AnalyticsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface AnalyticsNavigationProps {
  navigation: AnalyticsScreenNavigationProp;
}

type AnalyticsProps = {
  moodPosts: MoodRecord[];
  setMoodPosts: Dispatch<SetStateAction<MoodRecord[]>>;
} & AnalyticsNavigationProps;

type ChartMoods = {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};

export { AnalyticsProps, ChartMoods };
