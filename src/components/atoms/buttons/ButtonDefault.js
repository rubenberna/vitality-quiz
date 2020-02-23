import React from "react";
import styled from "styled-components";

export const ButtonDefault = ({
  children,
  big,
  inverted,
  handleClick,
  minwidth,
  justfy
}) => {
  const StyledButton = styled.button`
    color: ${props => (props.inverted ? invertedTheme.fc : standard.fc)};
    background: transparent;
    background-image: ${props =>
      props.inverted ? invertedTheme.bg : standard.bg};
    min-width: ${props => (props.minwidth ? "" : "188px")};
    width: ${props => (props.minwidth ? "100%" : "")};
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: ${props => (props.justfy ? "flex-end" : "space-evenly")};
    cursor: pointer;
    font-size: ${props => (props.big ? "24pt" : "18pt")};
    border-radius: 16px;
    padding: ${props =>
      props.inverted ? invertedTheme.padding : standard.padding};
    border: ${props =>
      props.inverted ? invertedTheme.border : standard.border};
    &:hover {
      background: ${props => (props.inverted ? standard.bg : invertedTheme.bg)};
      border: ${props =>
        props.inverted ? standard.border : invertedTheme.border};
      color: ${props => (props.inverted ? standard.fc : invertedTheme.fc)};
      padding: ${props =>
        props.inverted ? standard.padding : invertedTheme.padding};
    }
    &:focus {
      background: ${props =>
        props.inverted ? standard.bg : invertedTheme.bg} !important;
    }
  `;
  const standard = {
    bg: "linear-gradient(to right, #a2e1fc, #04a1e3)",
    fc: "white",
    border: "none",
    padding: "15px 25px"
  };

  const invertedTheme = {
    bg: "transparent",
    fc: "#04a1e3",
    border: "2px solid #04a1e3",
    padding: "13px 23px"
  };

  return (
    <StyledButton
      big={big}
      minwidth={minwidth}
      justfy={justfy}
      inverted={inverted}
      onClick={e => handleClick()}
    >
      {children}
    </StyledButton>
  );
};
