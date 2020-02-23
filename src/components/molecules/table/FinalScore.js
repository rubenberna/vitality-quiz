import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';
import { HealthyIcon, AlmostSickIcon, SickIcon } from '../../atoms/icons/ResultIcons'

export default class FinalScore extends Component {

  renderResultIcon = () => {
    const { color } = this.props.data
    switch (color) {
      case 'green':
        return <HealthyIcon className='healthy'/>
      case 'orange':
        return <AlmostSickIcon className='almost-sick'/>
      case 'red':
        return <SickIcon className='sick'/>
      default:
        return <HealthyIcon className='healthy'/>
    }
  }

  render() {
    const { title } = this.props
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1)
    return (
      <>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>{capitalizedTitle}</Header>
          </Table.Cell>
          <Table.Cell className='result-icon'>
            { this.renderResultIcon() }
          </Table.Cell>
          <Table.Cell width='two'>{this.props.data.result} %</Table.Cell>
          <Table.Cell>{this.props.data.advice.content}</Table.Cell>
        </Table.Row>
      </>
    );
  }
}
