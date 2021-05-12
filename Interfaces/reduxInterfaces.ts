import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = (state: { isLoggedIn: boolean; userName: string }) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};
