/**
 * Retrieve Archived Messages
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_ARCHIVE } from 'containers/Archive/constants';
import { archiveLoaded, archiveLoadingError } from 'containers/Archive/actions';
import { request, parseJSON } from 'utils/request';

/**
 * Archived Messages request handler
 */
export function* getMessages() {
  const requestURL = 'http://localhost:3000/api/get';
  try {
    // Call our request helper (see 'utils/request')
    const messages = yield call(request, requestURL);
    const messagesMod = yield call(parseJSON, messages);
    yield put(archiveLoaded(messagesMod));
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
