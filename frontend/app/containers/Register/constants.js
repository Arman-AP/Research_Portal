/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SIGN_UP = 'register/SIGN_UP';
export const SIGN_UP_SUCCESS = 'register/SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'register/SIGN_UP_FAIL';
export const CHANGE_USERNAME = 'register/CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'register/CHANGE_PASSWORD';
export const CHANGE_EMAIL = 'register/CHANGE_EMAIL';
export const CLEAR_STATE = 'register/CLEAR_STATE';
