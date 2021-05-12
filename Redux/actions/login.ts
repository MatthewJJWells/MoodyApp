import { LOGIN, LOGOUT } from '../constants';

export function isLoggedIn(
  userName: string,
): { type: string; payload: string } {
  return {
    type: LOGIN,
    payload: userName,
  };
}
