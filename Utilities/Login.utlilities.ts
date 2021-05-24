import { RootState } from '../Interfaces/LoginInterface/Login.interface';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => {
  return {
    isLoggedIn: state.isLoggedIn,
    userName: state.userName,
  };
};
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: string | null }) => void,
) => {
  return {
    login: (userName: string) => dispatch({ type: 'LOGIN', payload: userName }),
    logout: () => dispatch({ type: 'LOGOUT', payload: null }),
  };
};

const loginConnector = connect(mapStateToProps, mapDispatchToProps);

export { loginConnector };
