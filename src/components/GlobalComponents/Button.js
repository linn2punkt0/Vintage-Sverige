import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  min-height: 40px;
  width: 10em;
  background-color: ${({ bgColor }) =>
    bgColor || "var(--primary-button-color)"};
  color: ${({ color }) => color || "var(--light-text-color)"};
  border-radius: 5px;
  font-weight: 600;
  border: none;
  margin: ${({ margin }) => margin || "0"};
  @media only screen and (max-width: 800px) {
    width: 35vw;
  }

  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -o-transform: skew(-20deg);
  transform: skew(-20deg);

  & > div {
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);
  }
`;

const Button = props => {
  const { children, onClick, margin, bgColor, color, disabled } = props;
  return (
    <StyledButton
      color={color}
      bgColor={bgColor}
      margin={margin}
      onClick={onClick}
      disabled={disabled}
    >
      <div>{children}</div>
    </StyledButton>
  );
};

export default Button;
