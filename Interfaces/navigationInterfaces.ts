import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export { Stack, RootStackParamList };
