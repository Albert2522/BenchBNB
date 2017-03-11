import { RECEIVE_CURRENT_USER,
         RECEIVE_LOGOUT,
         RECEIVE_ERRORS }
         from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({ }, state);
      newState.session.currentUser = action.currentUser;
      debugger;
      return newState;
    case RECEIVE_LOGOUT:
      newState = merge({ }, state);
      debugger;
      newState.session.currentUser = null;
      return newState;
    case RECEIVE_ERRORS:
      newState = merge({ }, state);
      newState.session.errors = action.errors;
      debugger;
      return newState;
    default:
      console.log("HERE");
      return state;
  }
};

export default sessionReducer;
