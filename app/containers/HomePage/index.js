/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import head from 'lodash/head';
import Wrapper from 'components/Wrapper';
import LeftContainer from 'components/LeftContainer';
import RightContainer from 'components/RightContainer';
import UserInformation from 'components/UserInformation';
import PopularRepositories from 'components/PopularRepositories';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { getUserDetails } from 'utils/getUserDetails';

import {
  makeSelectNotificationsLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { overviewLabel, repositoriesLabel, projectsLabel, starsLabel, followersLabel, followingLabel } from './messages';
import { loadAUserReposAction } from './actions';

const NavBar = styled.ul`
  background-color: inherit;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px 16px;
  font-size: 17px;
  border-bottom: 1px solid #d1d5da;
`;
const List = styled.li`
  display: inline-block;
  font-size: 18px;
  color: #586069;
  padding: ${prop => prop.padding || "20px"};
  text-decoration: ${props => props.showOverview && 'underline'};
  text-decoration-color: ${props => props.showOverview && 'orange'};
  text-underline-position: under;
`;

export class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showOverview: true,
      showTabsData: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(loadAUserReposAction());
  }

  onOverViewClick = () => {
    const { showOverview, showTabsData} = this.state;
    this.setState({  showOverview: !showOverview, showTabsData: false });
  }
  onTabClick = () => {
    const { showOverview } = this.state;
    this.setState({ showTabsData: true, showOverview: false  });
  }

  loadUserList() {
    const { showOverview } = this.state;
    return (
      <div>
        <List padding="0" showOverview={showOverview} onClick={this.onOverViewClick}>{overviewLabel}</List>
        <List onClick={this.onTabClick}>{repositoriesLabel}</List>
        <List onClick={this.onTabClick}>{projectsLabel}</List>
        <List onClick={this.onTabClick}>{starsLabel}</List>
        <List onClick={this.onTabClick}>{followersLabel}</List>
        <List onClick={this.onTabClick}>{followingLabel}</List>
      </div>
    )
  }

  render() {
    const { userRepos } = this.props;
    const {showOverview} = this.state;
    const userDetails = getUserDetails(userRepos);
    const owner = userRepos && head(userRepos).owner || {};

    return (
      <Wrapper marginWrapper="0px 0px 16px 20px">
       <LeftContainer>
        <UserInformation owner={owner}/>
       </LeftContainer>
       <RightContainer>
        <NavBar>
         {this.loadUserList()}
        </NavBar>
        {showOverview ?
          <PopularRepositories userDetails={userDetails}/> :
          <div>No data to display </div>
        }
       </RightContainer>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userRepos: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  userRepos: makeSelectNotificationsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
