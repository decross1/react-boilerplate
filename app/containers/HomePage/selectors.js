/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectMessage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('message')
);

const makeSelectSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('success')
);

const makeSelectErr = () => createSelector(
  selectHome,
  (homeState) => homeState.get('err')
);

export {
  selectHome,
  makeSelectMessage,
  makeSelectSuccess,
  makeSelectErr,
};
