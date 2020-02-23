import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

export default class LifestyleQuestions extends Component {
  render() {
    return (
      <>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>{this.props.data.name}</Header>
          </Table.Cell>
          <Table.Cell>{this.props.data.result}</Table.Cell>
        </Table.Row>
      </>
    );
  }
}
