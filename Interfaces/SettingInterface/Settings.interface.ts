import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigationInterfaces';

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface SettingsNavigationProps {
  navigation: SettingsScreenNavigationProp;
}

type SettingsProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  logout: () => void;
} & SettingsNavigationProps;

export { SettingsProps };
