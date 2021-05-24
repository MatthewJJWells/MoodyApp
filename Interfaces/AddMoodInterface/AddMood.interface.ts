import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationInterfaces';
import { MoodRecord } from '../../Utilities/AddMood.utilities';
import { Dispatch, SetStateAction } from 'react';
type AddMoodScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface AddMoodNavigationProps {
  navigation: AddMoodScreenNavigationProp;
}

type AddMoodProps = {
  setMoodPosts: Dispatch<SetStateAction<[] | MoodRecord[]>>;
} & AddMoodNavigationProps;

export { AddMoodProps };
