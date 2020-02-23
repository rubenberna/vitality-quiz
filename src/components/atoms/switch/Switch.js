import React, { Component } from "react";
import Switch from "react-switch";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
`
const Answer = styled.span`
  color: #9e9e9e;
  font-size: 15px;
`

export class SwitchToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
    this.props.changeChecked(checked)
  }

  render() {
    return (
      <Container>
        <Answer>{this.state.checked ? 'Toch wel' : 'Echt niet'}.</Answer>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          onColor="#4caf50"
          offColor="#e3686d"
          height={35}
          width={75}
        />
      </Container>
    );
  }
}
