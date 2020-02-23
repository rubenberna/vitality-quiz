import React from 'react'
import styled from 'styled-components'

export const ChartLabel = ({ children }) => {
  const StyledChartLabel = styled.div`
  margin: 20px;
  padding: 10px;
  color:black
  `
return <StyledChartLabel>{children}</StyledChartLabel>
}
export const ChartLabelspan = ({ color }) => {
  const StyledChartLabel = styled.span`
  background-color: ${props => props.color === 'red' ? '#c13c37' : (props.color === 'green' ? '#216a22' : '#e38627')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 6px;
  height: 13px;
  width: 14px;
  `
return <StyledChartLabel color={color}></StyledChartLabel>
}
