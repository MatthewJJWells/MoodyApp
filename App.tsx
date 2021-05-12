import React from 'react';
import { Dashboard, Home, SignUp } from './Screens/index';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { addRecord, getUserRecords } from './services/ApiService';

export type RootStackParamList = {
  Home: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC<Record<string, never>> = () => {
  addRecord({
    user_id: 3,
    rating: 10,
    datetime: new Date(),
    mood_text: 'awesome',
    personal_note: 'note',
    shared: true,
  });
  getUserRecords(3);
  return (
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
  );
};

export default App;
