/**
 * Archives a message to the database
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { ARCHIVE_MESSAGE } from 'containers/HomePage/constants';
import { archiveMessageSuccess, archiveMessageErr } from 'containers/HomePage/actions';
import { makeSelectMessage } from 'containers/HomePage/selectors';

export function* archiveMessage() {
  const message = yield select(makeSelectMessage());
  const requestURL = 'http://localhost:3000/post';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  };
  try {
    yield call(request, requestURL, options);
    yield put(archiveMessageSuccess());
  } catch (err) {
    yield put(archiveMessageErr(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* messageData() {
  yield takeLatest(ARCHIVE_MESSAGE, archiveMessage);
}
