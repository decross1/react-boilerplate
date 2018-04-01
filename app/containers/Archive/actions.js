/*
 *
 * Archive actions
 *
 */

import {
  LOAD_ARCHIVE,
} from './constants';

export function loadArchive() {
  return {
    type: LOAD_ARCHIVE,
  };
}
