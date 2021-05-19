import { StackNavigationProp } from '@react-navigation/stack';
import { Dispatch, SetStateAction } from 'react';
import { RootStackParamList } from '../navigationInterfaces';
import { MoodRecord } from '../../Utilities/AddMood.utilities';
type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface DashboardNavigationProps {
  navigation: DashboardScreenNavigationProp;
}

type DashboardProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  moodPosts: MoodRecord[];
  setMoodPosts: Dispatch<SetStateAction<MoodRecord[]>>;
} & {
  login: (userName: string) => void;
} & DashboardNavigationProps;

export { DashboardProps };
