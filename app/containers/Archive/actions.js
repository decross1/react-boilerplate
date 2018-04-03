/*
 *
 * Archive actions
 *
 */

import {
  LOAD_ARCHIVE,
  LOAD_SUCCESS,
  LOAD_ERR,
} from './constants';

export function loadArchive() {
  return {
    type: LOAD_ARCHIVE,
  };
}

export function archiveLoaded(messages) {
  return {
    type: LOAD_SUCCESS,
    messages,
  };
}

export function archiveLoadingError(err) {
  return {
    type: LOAD_ERR,
    err,
  };
}
