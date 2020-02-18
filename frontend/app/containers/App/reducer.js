/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {SET_GLOBAL_TOKEN, SET_LOCAL_STORAGE, SIGN_OUT_USER } from './constants';

// The initial state of the App
export const initialState = {
  jwt: undefined,
  user: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_LOCAL_STORAGE:
        break;
      case SET_GLOBAL_TOKEN:
        draft.jwt = action.data.jwt;
        draft.user = action.data.user;
        break;
      case SIGN_OUT_USER:
        break;
    }
  });

export default appReducer;
