import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { saveUser } from '../../../actions/user'
import { setDemographics } from '../../../actions/demographics'
import laravelDB from '../../../apis/laravelDB'
import ModalLogin from '../../molecules/modals/ModalLogin'

class LoginQuizContainer extends Component {
  state = {
    error: false,
    msg: '',
    inputVisible: true
  }

  validate = (email) => {
    if(!email) {
      return this.setState({ error: true, msg: 'Please write your email first ;)' })
    }
    else {
      if(this.validateEmail(email) === false) {
        return this.setState({ error: true, msg: "That does't look right..." })
      }
      else this.fetchUser(email)
    }
  }

  validateEmail = (email) => {
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    if (email.match(mailformat)) return true;
    else return false;
  }

  clearError = () => {
    this.setState({ error: false, msg: '' })
  }

  fetchUser = async (email) => {
    const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

    const response = await laravelDB.post('/login', {
      email,
      env
    })
    if (response.status === 200) {
      this.setState({ msg: 'Please check your email!', inputVisible: false })
    }
    else this.setState({ msg: "I'm agraid we didn't find a verified email with that address" })
  }

  componentDidMount() {
    this.findUserInURL()
  }

  findUserInURL = async () => {
    const url = this.props.history.location.search
    const key = url.split('=')[1]
    if (key) {
      const response = await laravelDB.post('/profile', {key})
      const user = { ...response.data, key }
      this.props.saveUser(user)
      this.props.setDemographics(user)
    }
  }

  render() {
    return(
      <>
        { this.props.user && <ModalLogin
          validate={this.validate}
          error={ this.state.error }
          clearError={ this.clearError }
          msg={ this.state.msg }
          inputVisible={this.state.inputVisible}
        /> }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile
  }
}
const loginContainer = connect(mapStateToProps, { saveUser, setDemographics })(LoginQuizContainer)
export default withRouter(loginContainer);
