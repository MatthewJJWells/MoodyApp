import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Home, LogIn, SignUp, Dashboard } from './Screens/index';

const App: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      {/* <LogIn /> */}
      <SignUp />
      {/* <Dashboard /> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
