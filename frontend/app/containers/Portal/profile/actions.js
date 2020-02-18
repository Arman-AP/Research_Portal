/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL, CHANGE_USERNAME , CHANGE_PASSWORD, CHANGE_EMAIL} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function signUp() {
  return {
    type: SIGN_UP
  };
}
export function signUp_Success(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data
  };
} 
export function signUp_Fail(error) {
  return {
    type: SIGN_UP_FAIL,
    error
  };
} 

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}