import { createSelector } from 'reselect';

/**
 * Direct selector to the archive state domain
 */
const selectArchiveDomain = (state) => state.get('archive');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Archive
 */

const makeSelectArchive = () => createSelector(
  selectArchiveDomain,
  (substate) => substate.toJS()
);

export default makeSelectArchive;
export {
  selectArchiveDomain,
};
