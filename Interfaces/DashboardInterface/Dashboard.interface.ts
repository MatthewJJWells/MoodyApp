import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationInterfaces';

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
  submit: (userName: string) => void;
} & DashboardNavigationProps;

export { DashboardProps };
