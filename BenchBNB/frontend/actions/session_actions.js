import { signUp, login, logout } from '../util/session_api_util';

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});

export const requestSignUp = user => dispatch => {
  return signUp(user).then(
    response => dispatch(receiveCurrentUser(response))).fail(
      error => dispatch(receiveErrors(error.responseJSON))
    );
};

export const requestLogin = user => dispatch => {
  return login(user).then(
    response => dispatch(receiveCurrentUser(response))).fail(
      error => dispatch(receiveErrors(error.responseJSON))
    );
};

export const requestLogout = user => dispatch => {
  return signUp(user).then(
    response => dispatch(receiveCurrentUser(response))).fail(
      error => dispatch(receiveErrors(error.responseJSON))
    );
};
