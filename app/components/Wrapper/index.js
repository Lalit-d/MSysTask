/**
 *
 * Wrapper
 *
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: "Circular Std", Arial;
  display: flex;
  flex-direction: ${props => (props.flexColumn && 'column') || 'row'};
  min-width: ${props => props.minWidth || '320px'};
  margin: ${props => props.marginWrapper || '15px 15px 0px 15px'};
  background: ${props => props.background || 'none'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  & .box {
    display: inline-grid;
    width: 100px;
    height: 140px;
    padding: 16px;
    border: 1px solid #d1d5da;
    border-radius: 8px;
  }
`;

export default Wrapper;
