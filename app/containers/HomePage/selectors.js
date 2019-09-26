import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

const makeSelectHomePage = () =>
  createSelector(selectHomePageDomain, substate => substate.toJS());


const makeSelectNotificationsLoading = () =>
  createSelector(selectHomePageDomain, substate =>
    substate.get('userRepos'),
  );

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectNotificationsLoading,
};
