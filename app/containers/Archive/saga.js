/**
 * Retrieve Archived Messages
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ARCHIVE } from 'containers/Archive/constants';
import { archiveLoaded, archiveLoadingError } from 'containers/Archive/actions';
import request from 'utils/request';

/**
 * Archived Messages request handler
 */
export function* getMessages() {
  const requestURL = 'http://localhost:3000/api/post';

  try {
    // Call our request helper (see 'utils/request')
    let messages = yield call(request, requestURL);
    messages = JSON.parse(messages);
    yield put(archiveLoaded(messages));
  } catch (err) {
    yield put(archiveLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* messageData() {
  yield takeLatest(LOAD_ARCHIVE, getMessages);
}
