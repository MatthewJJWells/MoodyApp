import React from 'react';
import styles from './Home.style';
import { View, Text, TextInput } from 'react-native';
import { FormButton } from '../../components';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { connect } from 'react-redux';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<HomeProps | any> = ({ navigation, submit }) => {
  const navigationSignUp = () => {
    navigation.navigate('SignUp');
  };
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
        <FormButton buttonName="Login" onPress={submit()}></FormButton>
        <FormButton
          buttonName="Sign Up"
          onPress={navigationSignUp}
        ></FormButton>
      </View>
    </View>
  );
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: string }) => void,
) => {
  return {
    submit: () => dispatch({ type: 'LOGIN', payload: 'Matt' }),
  };
};

export default connect(null, mapDispatchToProps)(Home);
