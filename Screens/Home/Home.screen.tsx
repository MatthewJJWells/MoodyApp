import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { Stack } from '../../Interfaces';

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
