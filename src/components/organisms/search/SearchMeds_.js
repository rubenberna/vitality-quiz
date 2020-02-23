import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Search } from 'semantic-ui-react'
import { addMed, clearMeds, setMeds, fetchMedication } from '../../../actions/medication'

const initialState = { isLoading: false, results: [], value: '' }

let source = []

class SearchExampleStandard extends Component {
  state = initialState

  async componentDidMount() {
    await this.props.fetchMedication()
    this.normalizeData()
  }

  normalizeData = () => {
    const { medicationTable } = this.props
    for (let med of medicationTable) {
      med.title = med.substance_name
      med.description = med.brand_name
      source = [...source, med]
    }
  }

  handleResultSelect = (e, { result }) => {
    this.setState({ value: '' })
    this.props.saveMed(result)
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    medicationTable: Object.values(state.medicationTable),
  }
}

export default connect(mapStateToProps, { addMed, clearMeds, setMeds, fetchMedication })(SearchExampleStandard)
