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

export const LOG_IN = 'login/LOG_IN';
export const LOG_IN_SUCCESS = 'login/LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'login/LOG_IN_FAIL';
export const CHANGE_IDENTIFIER = 'login/CHANGE_IDENTIFIER';
export const CHANGE_PASSWORD = 'login/CHANGE_PASSWORD';
export const CLEAN_UP_LOG_IN = 'login/CLEAN_UP_LOG_IN';