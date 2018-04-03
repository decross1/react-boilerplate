/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_MESSAGE,
  ARCHIVE_MESSAGE,
  MESSAGE_ARCHIVE_SUCCESS,
  MESSAGE_ARCHIVE_ERR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  message: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state
        .set('message', action.message);
    case ARCHIVE_MESSAGE:
      return state;
        // .set('loading', true);
    case MESSAGE_ARCHIVE_SUCCESS:
      return state
        .set('message', '')
        // .set('loading', false)
        .set('success', true)
        .set('error', false);
    case MESSAGE_ARCHIVE_ERR:
      return state
        // .set('loading', false)
        .set('success', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default homeReducer;
