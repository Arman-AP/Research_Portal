/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SIGN_UP, SIGN_UP_SUCCESS, CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_EMAIL, SIGN_UP_FAIL} from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  email:"",
  password:""
};

/* eslint-disable default-case, no-param-reassign */
const registerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        draft.username= action.username;
        break;
      case CHANGE_EMAIL:
          draft.email= action.email;
          break;
      case CHANGE_PASSWORD:
            draft.password= action.password;
            break;
      case SIGN_UP:
            draft.loading = true;
        break;
      case SIGN_UP_SUCCESS:
          draft.username = action.data.username;
          draft.password = null;
          draft.email = action.data.email;
          draft.error = undefined;
          draft.bulk = action.data;
          break;
      case SIGN_UP_FAIL:
          draft.error = action.error;
          break;
    }
  });

export default registerReducer;
