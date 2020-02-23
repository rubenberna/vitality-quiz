import React from 'react';
import styled from 'styled-components';

export const CardResultBanner = ({ children, widthsize, heightsize }) => {
  const StyledResultCard = styled.div`
    width: ${props =>
      props.widthsize === 'medium'
        ? '400px'
        : props.widthsize === 'small'
        ? '245px'
        : props.widthsize === 'large'
        ? '600px'
        : '350px'};

    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 25px;
    cursor: default;
    height: ${props =>
      props.heightsize === 'medium'
        ? '400px'
        : props.heightsize === 'small'
        ? '245px'
        : props.heightsize === 'large'
        ? '600px'
        : '350px'};
    background-color: #fff;
    position: relative;
    border-radius: 9px;
  `;

  return (
    <StyledResultCard widthsize={widthsize} heightsize={heightsize}>
      {children}
    </StyledResultCard>
  );
};
