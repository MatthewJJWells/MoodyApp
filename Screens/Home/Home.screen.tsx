import React, { useState } from 'react';
import { Dashboard, Login, SignUp, AddMood } from '../index';
import Analytics from '../Analytics/Analytics.screen';
import { NavigationContainer } from '@react-navigation/native';
import { HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { Stack } from '../../Utilities/Home.utilities';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const BottomTabs = createBottomTabNavigator();

type TabBarIconProps = {
  name: any;
  colour?: string;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({
  name,
  colour,
}: TabBarIconProps) => {
  return <Ionicons size={25} name={name} colour={colour}></Ionicons>;
};

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  const [moodPosts, setMoodPosts] = useState([]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabs.Navigator>
          <BottomTabs.Screen
            name="Dashboard"
            options={{ tabBarIcon: () => <TabBarIcon name="home-sharp" /> }}
          >
            {(props) => (
              <Dashboard
                moodPosts={moodPosts}
                setMoodPosts={setMoodPosts}
                {...props}
              ></Dashboard>
            )}
          </BottomTabs.Screen>
          <BottomTabs.Screen
            name="Analytics"
            component={Analytics}
            options={{
              tabBarIcon: () => <TabBarIcon name="analytics-sharp" />,
            }}
          />
          <BottomTabs.Screen
            name="Add Mood"
            options={{
              tabBarIcon: () => <TabBarIcon name="analytics-sharp" />,
            }}
          >
            {(props) => (
              <AddMood
                moodPosts={moodPosts}
                setMoodPosts={setMoodPosts}
                {...props}
              ></AddMood>
            )}
          </BottomTabs.Screen>
        </BottomTabs.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default loginConnector(Home);
