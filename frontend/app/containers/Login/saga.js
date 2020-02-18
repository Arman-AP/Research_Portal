/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOG_IN} from './constants';
import request from "../../utils/request"
import { getThisState } from './selectors';
import {setGlobalToken, setLocalStorage} from '../App/actions'
import {successfullLogin,failedLogin} from "./actions"
/**
 * Github repos request/response handler
 */
export function* tryLogIn() {
  const {identifier, password} = yield select(getThisState());
  const stateData = {identifier: identifier, password:password};
  try {
    const apiData = [
      "http://localhost:1337/auth/local",
      {
        method: 'POST',
        headers: {"Content-Type": "application/json"} ,
        body: JSON.stringify(stateData)
      }
    ]
    const result = yield call(request,...apiData)
    console.log("Successful Login")
    console.log(result)
    yield put(setLocalStorage(result))
    yield put(setGlobalToken(result));
    yield put(successfullLogin())
    } catch (error) {
      console.log("Failed Login")
      console.log(error)
      yield put(failedLogin(error))
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginAction() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOG_IN, tryLogIn);
}
