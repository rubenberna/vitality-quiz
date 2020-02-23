import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

export default class Demographics extends Component {
  render() {
    const { title } = this.props
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)

    return (
      <>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>{capitalizedTitle}</Header>
          </Table.Cell>

          <Table.Cell>
            {this.props.data.index
              ? this.props.data.advice:''}
          </Table.Cell>
          <Table.Cell>
            {this.props.data.index
              ? this.props.data.index
              : ''}
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}
