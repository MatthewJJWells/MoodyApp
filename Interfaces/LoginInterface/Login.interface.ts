import { RootStackParamList } from '../navigationInterfaces';
import { StackNavigationProp } from '@react-navigation/stack';

interface RootState {
  isLoggedIn: boolean;
  userName: string;
}

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginNavigationProps {
  navigation: LoginScreenNavigationProp;
}

type LoginProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  submit: (userName: string) => void;
} & LoginNavigationProps;

export { LoginProps, RootState };
