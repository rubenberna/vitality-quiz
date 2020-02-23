import React from 'react'
import { Loader } from 'semantic-ui-react'

const loaderStyle = {
  color: 'white'
}

const Loading = () => <Loader active inline='centered' size='huge' style={loaderStyle}/>

export default Loading