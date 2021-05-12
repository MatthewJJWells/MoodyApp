import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../index';

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

interface SignupProps {
  navigation: SignUpScreenNavigationProp;
}

export { SignupProps };
