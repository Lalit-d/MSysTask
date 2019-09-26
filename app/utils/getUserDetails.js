import { actionAngular, bidding, pravar, wizard, reactBasicPluralsight, superslides } from './constants';

export const getUserDetails = userDetails => {
  let filterUserDetails = [];
  let user = {};
  userDetails && userDetails.map(detail => {
    user = {
      name: detail.name,
      description: detail.description,
      language: detail.language,
      stargazersCount: detail.stargazers_count,
      forksCount: detail.forks_count
    };
    filterUserDetails.push(user);
  });
  return filterUserDetails;
};
