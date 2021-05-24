/* eslint-disable indent */
import { AnyAction } from 'redux';
import { LOGIN, LOGOUT } from '../constants';

interface userState {
  isLoggedIn: boolean;
  userName: string | null;
}
const initialState: userState = {
  isLoggedIn: false,
  userName: null,
};

const userReducer = (state = initialState, action: AnyAction): any => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        userName: null,
      };
    default:
      return state;
  }
};

export default userReducer;
