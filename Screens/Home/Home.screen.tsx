import React from 'react';
import { Dashboard, Login, SignUp, AddMood } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { Stack } from '../../Utilities/Home.utilities';

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
          component={AddMood}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default loginConnector(Home);
