/* eslint-disable indent */
import { AnyAction } from 'redux';

interface userState {
  isLoggedIn: boolean;
  userName: string | null;
}
const initialState: userState = {
  isLoggedIn: false,
  userName: null,
};

const userReducer = (state = initialState, action: AnyAction): unknown => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        userName: null,
      };
  }
};

export default userReducer;
