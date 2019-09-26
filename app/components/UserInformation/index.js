/**
 *
 * UserInformation
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/Standard';
import Paragraph from 'components/Paragraph';
import { LocationIconSVG, EmailIconSVG, UserIconSVG } from 'components/Icons';
import {target, location, position, email, block, buttonLabel } from './constants';


const ImageWrapper = styled.img`
  height: 260px;
  width: 260px;
  border-radius: 4px;
`;

const SectionWrapper = styled.div`
`;
function UserInformation(props) {
  const { owner } = props;
  const { avatar_url, login } = owner;
  const name = login && login.replace(/[0-9]/g, '');
  const firstName = name && name.substring(0, 7);
  const lastName = name && name.substring(7, 12);

  return (
    <div>
    <ImageWrapper src={avatar_url} alt="profile-photo" />
      <Paragraph bold fontSize="20px" marginTop="20px" textTransfrom>{firstName} {lastName}</Paragraph>
      <Paragraph margin="10px 0" color="#586069" fontSize="18px">{login}</Paragraph>
      <Button>{buttonLabel}</Button>
      <Paragraph fontSize="13px" margin="10px 0" color="#586069">{position}</Paragraph>
      <SectionWrapper>
        <UserIconSVG />
        <Paragraph fontSize="13px" margin="10px 25px" color="#586069">{target}</Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <LocationIconSVG />
        <Paragraph fontSize="13px" margin="10px 25px" color="#586069">{location}</Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <EmailIconSVG />
        <Paragraph fontSize="13px" margin="10px 25px" color="indigo">{email}</Paragraph>
      </SectionWrapper>
      <Paragraph fontSize="13px" margin="10px 0" color="#586069">{block}</Paragraph>
    </div>
  );
}

UserInformation.propTypes = {
  owner: PropTypes.object,
};

export default UserInformation;
