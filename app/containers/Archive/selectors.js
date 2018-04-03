import { createSelector } from 'reselect';

/**
 * Direct selector to the archive state domain
 */
const selectArchive = (state) => state.get('archive');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Archive
 */

const makeSelectArchive = () => createSelector(
  selectArchive,
  (homeState) => homeState.get('messages')
);

const makeSelectErr = () => createSelector(
  selectArchive,
  (homeState) => homeState.get('err')
);

export {
  selectArchive,
  makeSelectArchive,
  makeSelectErr,
};
