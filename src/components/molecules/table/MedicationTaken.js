import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

export default class MedicationTaken extends Component {
  render() {
    const { brand_name } = this.props.data
    const capitalizedBrand = brand_name.charAt(0).toUpperCase() + brand_name.slice(1)
    return (
      <>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>{capitalizedBrand}</Header>
          </Table.Cell>
          <Table.Cell>
            {this.props.data.advice}
          </Table.Cell>
        </Table.Row>
      </>
    );
  }
}
