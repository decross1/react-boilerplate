
import { fromJS } from 'immutable';
import archiveReducer from '../reducer';

describe('archiveReducer', () => {
  it('returns the initial state', () => {
    expect(archiveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
