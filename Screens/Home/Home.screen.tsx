import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Home: React.FC<Record<string, never>> = ({ isLoggedIn }) => {
  return (
    <View>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
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
      )}
    </View>
  );
};

const mapStateToProps = (state: { isLoggedIn: boolean; userName: string }) => {
  console.log('andres label: ', state);

  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Home);
