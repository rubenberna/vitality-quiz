import React, { Component } from 'react';

import '../../molecules/forms/forms.scss'
import NameEmailTemplate from '../../molecules/forms/profileTemplates/NameEmailTemplate'
import GenderTemplate from '../../molecules/forms/profileTemplates/GenderTemplate'
import BirthdayTemplate from '../../molecules/forms/profileTemplates/BirthdayTemplate'
import BmiTemplate from '../../molecules/forms/profileTemplates/BmiTemplate'

class FormUserProfile extends Component {
  state = {
    active: 'nameEmail'
  }

  setActiveTemplate = (name) => {
    this.setState({ active: name })
  }

  render() {
    const { active } = this.state
    return (
      <>
        <NameEmailTemplate active={active} setActiveTemplate={this.setActiveTemplate}/>
        <GenderTemplate active={active} setActiveTemplate={this.setActiveTemplate}/>
        <BmiTemplate active={active} setActiveTemplate={this.setActiveTemplate}/>
        <BirthdayTemplate active={active} setActiveTemplate={this.setActiveTemplate}/>
      </>
    )
  }
}

export default FormUserProfile
