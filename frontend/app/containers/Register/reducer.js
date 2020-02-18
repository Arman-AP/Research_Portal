/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SIGN_UP, SIGN_UP_SUCCESS, CHANGE_USERNAME, CHANGE_PASSWORD, CHANGE_EMAIL, SIGN_UP_FAIL,CLEAR_STATE} from './constants';

// The initial state of the App
export const initialState = {
  username: undefined,
  email:undefined,
  password:undefined,
  error:undefined,
  loading:undefined
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
          draft.username = undefined;
          draft.password = undefined;
          draft.email = undefined;
          draft.error = undefined;
          draft.loading = false;
          draft.redirect = true;
          break;
      case SIGN_UP_FAIL:
          draft.error = action.error;
          draft.loading=false;
          draft.username = undefined;
          draft.password = undefined;
          draft.email = undefined;
          break; 
      case CLEAR_STATE:
          draft.email = undefined,
          draft.password = undefined,
          draft.username = undefined
          draft.error=undefined;
          draft.loading=undefined;
          break;
    }
  });

export default registerReducer;
