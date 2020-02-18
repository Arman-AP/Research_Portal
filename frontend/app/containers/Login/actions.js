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

import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAIL, CHANGE_IDENTIFIER, CHANGE_PASSWORD, CLEAN_UP_LOG_IN } from './constants';
import { func } from 'prop-types';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function failedLogin(error) {
  return (
    {
      type: LOG_IN_FAIL,
      error
    }
  )
}
export function successfullLogin() {
  return (
    {
      type: LOG_IN_SUCCESS
    }
  )
}
export function cleanUpCurrentState(){
  return(
    {
      type: CLEAN_UP_LOG_IN
    }
  )
}

export function logIn() {
  return {
    type: LOG_IN
  };
}
export function changeIdentifier(value) {
  return {
    type: CHANGE_IDENTIFIER,
    value
  };
}
export function changePassword(value) {
  return {
    type: CHANGE_PASSWORD,
    value
  };
}