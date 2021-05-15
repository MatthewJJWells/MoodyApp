import React, { useState } from 'react';
import { Dashboard, Login, SignUp, AddMood } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { Stack } from '../../Utilities/Home.utilities';

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  const [moodPosts, setMoodPosts] = useState([]);

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
            {(props) => (
              <Dashboard
                moodPosts={moodPosts}
                setMoodPosts={setMoodPosts}
                {...props}
              ></Dashboard>
            )}
          </Stack.Screen>
          <Stack.Screen name="Add Mood">
            {(props) => (
              <AddMood
                moodPosts={moodPosts}
                setMoodPosts={setMoodPosts}
                {...props}
              ></AddMood>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
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
