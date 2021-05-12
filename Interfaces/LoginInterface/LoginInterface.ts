import { connect } from 'react-redux';
import { RootStackParamList } from '../navigationInterfaces';
import { StackNavigationProp } from '@react-navigation/stack';

interface RootState {
  isLoggedIn: boolean;
  userName: string;
}
const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userName: state.userName,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: string }) => void,
) => {
  return {
    submit: () => dispatch({ type: 'LOGIN', payload: 'Matt' }),
  };
};

const loginConnector = connect(mapStateToProps, mapDispatchToProps);

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginNavigationProps {
  navigation: LoginScreenNavigationProp;
}

type LoginProps = {
  isLoggedIn: boolean;
  userName: string;
} & {
  submit: () => void;
} & LoginNavigationProps;

export { LoginProps, loginConnector };
