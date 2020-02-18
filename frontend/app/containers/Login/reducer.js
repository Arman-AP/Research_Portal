/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, CHANGE_IDENTIFIER ,CHANGE_PASSWORD, CLEAN_UP_LOG_IN } from './constants';

// The initial state of the App
export const initialState = {
  identifier: '',
  password: "",
  error:"",
  loading : false,
  redirect : false
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_PASSWORD:
        draft.password = action.value;
        break;
      case CHANGE_IDENTIFIER:
        draft.identifier = action.value;
        break;
      case LOG_IN:
        draft.loading = true;
        break;
      case LOG_IN_SUCCESS:
        draft.loading= false;
        draft.redirect=true;
        break;
      case LOG_IN_FAIL:
        draft.error=action.error;
        draft.identifier=undefined;
        draft.password=undefined;
        draft.redirect=false;
        draft.loading=false;
        break;
      case CLEAN_UP_LOG_IN:
        console.log(        "Clean up login reducer"        )
        draft.error=undefined;
        draft.identifier=undefined;
        draft.password=undefined;
        draft.redirect=undefined;
        draft.loading=undefined;
        state = undefined;
        break;
    }
  });

export default loginReducer;
