/*
 *
 * Archive reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_ARCHIVE,
  LOAD_SUCCESS,
  LOAD_ERR,
} from './constants';

const initialState = fromJS({
  loading: false,
  err: false,
  messages: [],
});

function archiveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARCHIVE:
      return state
      .set('loading', true);
    case LOAD_SUCCESS:
      return state
      .set('err', false)
      .set('loading', false)
      .set('messages', action.messages);
    case LOAD_ERR:
      return state
      .set('loading', false)
      .set('err', action.err);
    default:
      return state;
  }
}

export default archiveReducer;
