import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import styles from './Home.style';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormButton } from '../../Components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';


export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Home: React.FC<Record<string, never>> = ({ userName, isLoggedIn }) => {
  console.log(isLoggedIn, userName);
  if (isLoggedIn) {
    return <Dashboard />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state: { isLoggedIn: boolean; userName: string }) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
