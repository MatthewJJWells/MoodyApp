import React from 'react';
import styles from './Login.style';
import { View, Text, TextInput } from 'react-native';
import FormButton from '../../Components/FormButton/FormButton.screen';
import { LoginProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';

const Login: React.FC<LoginProps> = ({ navigation, submit }) => {
  const navigationSignUp = () => {
    navigation.navigate('SignUp');
  };
  const matt = 'Matt';
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
            placeholder="Username"
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
          ></TextInput>
        </View>
        <FormButton
          buttonName="Login"
          onPress={() => submit(matt)}
        ></FormButton>
        <FormButton
          buttonName="Sign Up"
          onPress={navigationSignUp}
        ></FormButton>
      </View>
    </View>
  );
};

export default loginConnector(Login);
