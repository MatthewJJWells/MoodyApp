import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { Stack, HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';

const Home: React.FC<HomeProps> = ({ userName, isLoggedIn }) => {
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
