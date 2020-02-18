/*
 * App Actions
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
 
import { SET_GLOBAL_TOKEN, SET_LOCAL_STORAGE, SIGN_OUT_USER } from './constants';

/**
 * Sets the JWT token to the local storage
 *
 * @return {object} An action object with a type of SET_LOCAL_STORAGE
 */
export function setLocalStorage(data) {

  localStorage.setItem("jwt",data.jwt);
  return {
    type: SET_LOCAL_STORAGE
  };
} 

/**
 * Passes the user JWT and data to the global state to bet set
 *
 * @return {object} An action object with a type of SET_GLOBAL_TOKEN
 * @return {object} An Object containing JWT and user data
 */
export function setGlobalToken(data) {
  console.log("set Global Token")
  return {
    type: SET_GLOBAL_TOKEN,
    data
  };
} 
export function signOutUser() {
  try {
    localStorage.removeItem("jwt");
    return {
      type: SIGN_OUT_USER
    }
  } catch (error) {
    
  }
  ;
} 
