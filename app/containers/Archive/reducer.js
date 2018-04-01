/*
 *
 * Archive reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ARCHIVE,
} from './constants';

const initialState = fromJS({});

function archiveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARCHIVE:
      return state;
    default:
      return state;
  }
}

export default archiveReducer;
