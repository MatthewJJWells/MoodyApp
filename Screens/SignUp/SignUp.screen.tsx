import React from 'react';
import styles from './SignUp.style';
import { View, Text, TextInput, Image } from 'react-native';
import FormButton from '../../Components/FormButton/FormButton.screen';
import { SignupProps } from '../../Interfaces';

const SignUp: React.FC<SignupProps> = ({ navigation }) => {
  const navigationCreateAccount = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/moodyLogo.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
          ></TextInput>
        </View>
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
            secureTextEntry
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Confirm Password"
            secureTextEntry
          ></TextInput>
        </View>
        <FormButton
          buttonName="Create Account"
          onPress={navigationCreateAccount}
        ></FormButton>
      </View>
    </View>
  );
};

export default SignUp;
