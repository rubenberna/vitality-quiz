import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class TableHeader extends Component {
  render() {
    return (
      <>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>
                {this.props.titleeen}
              </Table.HeaderCell>

              <Table.HeaderCell>{this.props.titletwee}</Table.HeaderCell>
              { this.props.titledrie && <Table.HeaderCell>{this.props.titledrie}</Table.HeaderCell> }
              { this.props.titlevier && <Table.HeaderCell>{this.props.titlevier}</Table.HeaderCell> }
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.props.data}</Table.Body>
        </Table>
      </>
    );
  }
}
