/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

const RightContainer = styled.div`
  right: 0;
  /* background-color: green; */
  width: 80%;
  margin-left: 95px;
  margin-right: 52px;
  @media (min-width: 360px) and (max-width: 667px) {
    float: left;
}

@media (min-width: 768px) and (max-width: 1024px) {
    padding-left: 20px !important;
}
`;

export default RightContainer;
