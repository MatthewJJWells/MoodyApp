import React, { useState } from 'react';
import { Dashboard, Login, SignUp, AddMood, Settings } from '../index';
import Analytics from '../Analytics/Analytics.screen';
import { NavigationContainer } from '@react-navigation/native';
import { HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { Stack } from '../../Utilities/Home.utilities';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MoodRecord } from '../../Utilities/AddMood.utilities';

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
  const [moodPosts, setMoodPosts] = useState<[] | MoodRecord[]>([]);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabs.Navigator>
          <BottomTabs.Screen
            name="Dashboard"
            options={{ tabBarIcon: () => <TabBarIcon name="home-outline" /> }}
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
            name="Add Mood"
            options={{
              tabBarIcon: () => <TabBarIcon name="add-circle-outline" />,
            }}
          >
            {(props) => (
              <AddMood setMoodPosts={setMoodPosts} {...props}></AddMood>
            )}
          </BottomTabs.Screen>
          <BottomTabs.Screen
            name="Analytics"
            options={{
              tabBarIcon: () => <TabBarIcon name="analytics-outline" />,
            }}
          >
            {(props) => (
              <Analytics
                moodPosts={moodPosts}
                setMoodPosts={setMoodPosts}
                {...props}
              ></Analytics>
            )}
          </BottomTabs.Screen>
          <BottomTabs.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: () => <TabBarIcon name="settings-outline" />,
            }}
          />
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
