/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SIGN_UP} from './constants';
import { signUp_Success , signUp_Fail} from './actions';
import {setGlobalToken, setLocalStorage} from '../App/actions'
import request from "../../utils/request"
import { getThisState } from './selectors';
/**
 * Github repos request/response handler
 */
export function* trySignUp() {
  // Select username from store
  const {username, email, password} = yield select(getThisState());
  const stateData = {"username": username,"email":email, "password":password}
    try {
    const apiData = [
      "http://localhost:1337/auth/local/register",
      {
        method: 'POST',
        headers: {"Content-Type": "application/json"} ,
        body: JSON.stringify(stateData)
      }
    ]
    const result = yield call(request,...apiData)
    console.log("Successful Signup")
    console.log(result)
    yield put(setLocalStorage(result))
    yield put(setGlobalToken(result));
    yield put(signUp_Success());
    } catch (error) {
      console.log("Failed Signup")
      console.log(error)
      yield put(signUp_Fail(error));
    }
   

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* signUpAction() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_UP, trySignUp);
}
