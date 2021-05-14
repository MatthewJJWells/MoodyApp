import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationInterfaces';

type AddMoodScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface AddMoodNavigationProps {
  navigation: AddMoodScreenNavigationProp;
}

type AddMoodProps = {
  moodPosts: never[];
  setMoodPosts: any;
} & AddMoodNavigationProps;

export { AddMoodProps };
