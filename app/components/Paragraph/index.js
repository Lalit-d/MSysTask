import styled, { css } from "styled-components";

const Paragraph = styled.span`
  display: ${props => (props.displayInherit && "inherit") || "block"};
  font-family: "Circular Std", Arial;
  font-size: ${props => props.fontSize || "14px"};
  float: ${props => props.float};
  line-height: ${props => props.lineHeight || "16px"};
  margin-top: ${props => props.marginTop};
  margin: ${props => props.margin};
  color: ${props => props.color || "#000"};
  font-weight: ${props => (props.bold && "600") || "100"};
  padding: ${props => props.padding || "0"};
  cursor: ${props => props.clickable && "pointer"};
  text-transform: ${props => props.textTransfrom && 'capitalize'};
`;

export default Paragraph;
