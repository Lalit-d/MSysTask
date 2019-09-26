/**
 *
 * PopularRepositories
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/Paragraph';
import Wrapper from 'components/Wrapper';
import { BranchIconSVG, StarIconSVG } from 'components/Icons';

const popularlabel = 'Popular repositories';

const UserDetailWrapper = styled.div`
  margin: 0 -16px;
`;

const SectionWrapper = styled.div`
  float: ${props => props.float};
  margin: ${props => props.margin};
`;

const StarWrapper = styled.div`
`;

const CircleWrapper = styled.div`
   width: 12px;
   height: 12px;
   border-radius: 50%;
   background-color: ${props => props.backgroundColor};
`;

function PopularRepositories(props) {
  const { userDetails } = props;

  return (
    <div>
      <Paragraph margin="12px 0">{popularlabel}</Paragraph>
      <UserDetailWrapper>
        {userDetails && userDetails.map((detail, index) => {
          const { name, description, language, stargazersCount, forksCount } = detail;
          const blueColor = language =='JavaScript' && '#f1e05a';
          const greenColor = language =='HTML' && 'green';
          const indigoColor = language =='CSS' && 'indigo';
          return (
            <Wrapper key={index} className="box" marginWrapper="1px 0px 18px 21px">
              <Paragraph color="#6f42c1" bold margin="2px 0">{name}</Paragraph>
                {description &&
                  <Paragraph color="#586069" margin="12px 0">
                    {description}
                  </Paragraph>
                }
                <StarWrapper>
                  {language &&
                  <SectionWrapper float="left" margin="-2px 2px">
                    <Paragraph margin="-2px 18px" float="left">
                      {language}
                    </Paragraph>
                    <CircleWrapper backgroundColor={blueColor || greenColor || indigoColor }/>
                  </SectionWrapper>
                }
                  {stargazersCount>0 &&
                  <SectionWrapper>
                    <StarIconSVG/>
                      <Paragraph margin="-5px 0">
                        {stargazersCount}
                      </Paragraph>
                    </SectionWrapper>
                }
                {forksCount > 0 &&
                  <SectionWrapper>
                    <BranchIconSVG/>
                    <Paragraph margin="-5px 0">
                      {forksCount}
                    </Paragraph>
                  </SectionWrapper>
                }
                </StarWrapper>
            </Wrapper>
          )
        })
        }
      </UserDetailWrapper>
    </div>
  );
}

PopularRepositories.propTypes = {
  userDetails: PropTypes.array,
};

export default PopularRepositories;
