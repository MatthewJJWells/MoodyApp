import React from 'react';
import styles from './SignUp.style';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FormButton } from '../../Components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

interface SignupProps {
  navigation: SignUpScreenNavigationProp;
}

const SignUp: React.FC<SignupProps> = ({ navigation }) => {
  const navigationCreateAccount = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 40 }}>Moody App</Text>
      </View>
      <View style={styles.footer}>
        <Text>Sign Up Screen</Text>
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
            placeholder="Phone"
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
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
