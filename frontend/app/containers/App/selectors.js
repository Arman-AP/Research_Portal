/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;
const getGlobalState = () =>
  createSelector(
    selectGlobal,
    globalState => globalState,
  );

export {
  getGlobalState
};
