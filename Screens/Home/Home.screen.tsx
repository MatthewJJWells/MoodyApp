import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { Stack, loginConnector, LoginProps } from '../../Interfaces';

const Home: React.FC<LoginProps> = ({ userName, isLoggedIn }) => {
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

export default loginConnector(Home);
