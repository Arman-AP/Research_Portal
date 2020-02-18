/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.register || initialState;

const getThisState = () =>
  createSelector(
    selectHome,
    homeState => homeState,
  );
  const thisStateError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );
export {thisStateError, selectHome, getThisState };
