import React from 'react';
import { Dashboard, Home, SignUp } from './Screens/index';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC<Record<string, never>> = ({ isLoggedIn }) => {
  return (
    <View>
      {isLoggedIn ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Dashboard></Dashboard>
      )}
    </View>
  );
};

const mapStateToProps = (state: { isLoggedIn: boolean }) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
