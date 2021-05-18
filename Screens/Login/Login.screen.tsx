import React, { ChangeEvent, useState } from 'react';
import styles from './Login.style';
import { View, Text, TextInput, Image } from 'react-native';
import FormButton from '../../Components/FormButton/FormButton.screen';
import { LoginProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';

const Login: React.FC<LoginProps> = ({ navigation, login }) => {
  const [usersName, setUsersName] = useState('');

  const onChange = (letter: string) => {
    setUsersName(letter);
  };

  const handleSubmit = (name: string) => {
    login(name);
  };

  const navigationSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/moodyLogo.png')}
          style={{ width: 175, height: 175, borderRadius: 10 }}
        />
      </View>
      <View style={styles.footer}>
        <Text>Home/Log In Screen</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Username"
            onChangeText={(letter) => onChange(letter)}
            value={usersName}
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
          onPress={() => handleSubmit(usersName)}
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
