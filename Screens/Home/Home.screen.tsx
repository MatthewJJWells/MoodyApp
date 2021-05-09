import React from 'react';
import styles from './Home.style';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


const Home: React.FC<Record<string, never>> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 40}}>Moody App</Text>
      </View>
      <View style={styles.footer}>
        <Text>Home/Log In Screen</Text>
        <View style={styles.inputContainer}>
          <TextInput  placeholder='Email'></TextInput>
        </View >
        <View style={styles.inputContainer}>
          <TextInput placeholder='Password'></TextInput>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;