import React from 'react'
import { Header } from 'semantic-ui-react'

const NamedHeader = (props) => (
  <div>
    <Header
      size={props.size}
      textAlign={props.textAlign}
      float={props.float}
      color={props.color}
      className={props.class}>
        {props.children}
      </Header>
  </div>
)

export default NamedHeader
