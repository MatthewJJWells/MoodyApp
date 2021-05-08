import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home, LogIn, SignUp, Dashboard } from './Screens/index';
import { StyleSheet, Text, View } from 'react-native';
import { FormButton } from './components';

const App: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <Home />
      {/* <LogIn /> */}
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      <StatusBar style="auto" />
      <FormButton></FormButton>
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
