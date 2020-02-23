import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-materialize'

import './style.scss'
import { addMed, removeMed } from '../../../actions/medication'
import SearchMeds from '../search/SearchMeds_'
import MedicinesInvoice from '../../molecules/cards/CardMedicinesInvoice'
import { Header } from '../../atoms/typography'
import { ButtonDefault } from '../../atoms/buttons/ButtonDefault'
import pharmacyPhoto from '../../../assets/img/medicines/background.jpg'
import cross from '../../../assets/img/medicines/apothekerkruis.svg'

class Medicines extends Component {
  state = {
    medsList: [],
    medsIds: []
  }

  saveMed = (med) => {
    this.setState({ medsList: [...this.state.medsList, med] })
    this.props.addMed(med.id)
  }

  removeMed = (med) => {
    const newList = this.state.medsList.filter( item => item !== med )
    this.setState({ medsList: newList })
    this.props.removeMed(med.id)
  }

  renderFinishBtn = () => {
    if(this.state.medsList.length > 0 ) {
      return <ButtonDefault handleClick={ this.props.finishQuiz }>Afronden <Icon>send</Icon></ButtonDefault>
    }
  }

  render() {
    return(
      <div className='medicines'>
        <div className='medicines-background-frame'>
          <img alt={ 'cross' } src={ cross } className='cross'/>
          <img alt={ 'pharmacyPhoto' } src={ pharmacyPhoto } className='background'/>
        </div>
        <div className='medicines-counter'>

          <div className='medicines-search-container'>
            <div className='medicines-search'>
              <Header size='medium'>Welke medicijnen neemt u?</Header>
              <SearchMeds saveMed={this.saveMed}/>
            </div>
            <div className='medicines-action' onClick={ this.props.finishQuiz }>
              <Header size='small' color='#04a1e3'>Ik neem geen medicijnen</Header>
            </div>
          </div>
          <div className='medicines-calculator'>
            <MedicinesInvoice medsList={this.state.medsList} removeMed={this.removeMed}/>
            { this.renderFinishBtn() }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {addMed, removeMed})(Medicines);
