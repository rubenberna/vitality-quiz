import React from 'react'
import styled from 'styled-components'

export const Header = ({ size, bold, children, color, givenClass, align, margin }) => {
  const StyledHeader = styled.h4`
    font-size: ${props => props.size === 'medium' ? '24pt' : (props.size === 'small' ? '16pt' : '28pt')};
    font-weight: ${props => props.bold ? '600' : ''};
    color: ${props => props.color ? props.color : ''};
    text-align: ${props => props.align ? props.align : ''};
    margin: ${props => props.margin};
    cursor: default;
  `
  return <StyledHeader
          size={size}
          bold={bold}
          color={color}
          margin={margin}
          align={align}
          className={givenClass}>{children}</StyledHeader>
}

export const Paragraph = ({ bold, children, css, color}) => {
  const StyledParagraph = styled.p`
    font-size: 12pt;
    font-weight: ${props => props.bold ? 600 : 'normal'};
    color: ${props => props.color ? props.color : ''}
  `
  return <StyledParagraph bold={bold} className={css} color={color}>{children}</StyledParagraph>
}
