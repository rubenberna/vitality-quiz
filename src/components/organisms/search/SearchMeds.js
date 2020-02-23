import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'

import './search.scss'
import { addMed, clearMeds, setMeds, fetchMedication } from '../../../actions/medication'

const initialState = { isLoading: false, results: [], value: '' }

class SearchMeds extends Component {
  state = initialState

  componentDidMount() {
    this.props.fetchMedication()
  }

  handleChange = (med, {action, option}) => {
    let ids = []
    switch (action) {
      case 'select-option':
        return this.props.addMed(option.id)
      case 'remove-value':
        for (let i = 0; i < med.length; i++) {
          ids.push(med[i].id)
        }
        return this.props.setMeds(ids)
      default:
        return
    }
  }

  styles = {
    multiValue: (base, state) => {
      return state.data.isFixed ? { ...base, backgroundColor: 'red' } : base;
    },
    multiValueLabel: (base, state) => {
      return state.data.isFixed
        ? { ...base, fontWeight: 'bold', color: 'red', paddingRight: 6 }
        : base;
    },
    multiValueRemove: (base, state) => {
      return state.data.isFixed ? { ...base, display: 'none' } : base;
    },
  };

  render () {
    const { medicationTable } = this.props
    return (
      <div className="search-meds">
        <Select
          isSearchable
          ariaLive="off"
          options={medicationTable.map(med => ({ label: med.substance_name, value: med.substance_name, id: med.id }))}
          isMulti
          styles={this.styles}
          className='select-meds'
          onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    medicationTable: Object.values(state.medicationTable),
  }
}

export default connect(mapStateToProps, { addMed, clearMeds, setMeds, fetchMedication })(SearchMeds)
