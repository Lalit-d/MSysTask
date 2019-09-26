/*
 * Home Actions
 */

import { LOAD_USER_REPOS_ACTION, LOAD_USER_REPOS_SUCCESS_ACTION } from './constants';

export function loadAUserReposAction() {
  return {
    type: LOAD_USER_REPOS_ACTION,
  };
}

export function loadAUserReposSuccessAction(repos) {
  return {
    type: LOAD_USER_REPOS_SUCCESS_ACTION,
    repos,
  };
}
