/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { fromJS } from 'immutable';
import { LOAD_USER_REPOS_ACTION, LOAD_USER_REPOS_SUCCESS_ACTION } from './constants';

// The initial state of the App
export const initialState = fromJS({});

/* eslint-disable default-case, no-param-reassign */
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_REPOS_SUCCESS_ACTION:
      return state.set('userRepos', action.repos);
    default:
      return state;
  }
}

export default homeReducer;
