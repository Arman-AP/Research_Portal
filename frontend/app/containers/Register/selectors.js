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
  const thisStateLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );
  const thisStateRedirect = () =>
  createSelector(
    selectHome,
    homeState => homeState.redirect,
  );
export {thisStateLoading,thisStateError, selectHome,thisStateRedirect, getThisState };
