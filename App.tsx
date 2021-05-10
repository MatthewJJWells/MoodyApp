import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormButton } from './components';
import { Home } from './Screens/index';

const App: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <FormButton></FormButton>
      <Text>Open up App.tsx to start working on your app!!</Text>
      <Home />
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
