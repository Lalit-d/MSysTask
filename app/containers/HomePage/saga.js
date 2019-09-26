/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_USER_REPOS_ACTION } from './constants';
import { loadAUserReposSuccessAction } from './actions';

import request from 'utils/request';

export function* getUserRepos() {
  const requestURL = 'https://api.github.com/users/supreetsingh247/repos';
  try {
    const response = yield call(request, requestURL);
    yield put(loadAUserReposSuccessAction(response));
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchActions() {
  yield takeLatest(LOAD_USER_REPOS_ACTION, getUserRepos);
}
