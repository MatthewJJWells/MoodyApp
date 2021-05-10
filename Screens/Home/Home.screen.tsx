import React from 'react';
import styles from './Home.style';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormButton } from '../../components';

const Home: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40 }}>Moody App</Text>
      </View>
      <View style={styles.footer}>
        <Text>Home/Log In Screen</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
          ></TextInput>
        </View>
        <FormButton buttonName="Login"></FormButton>
        <FormButton buttonName="Sign up"></FormButton>
      </View>
    </View>
  );
};
export default Home;
