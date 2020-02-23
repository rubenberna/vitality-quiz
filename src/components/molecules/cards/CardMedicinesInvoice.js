import React from 'react'
import Typist from 'react-typist'
import { Header } from '../../atoms/typography'

import './style.scss'

const MedicinesInvoice = (props) => {

  return(
    <div className='medicines-invoice'>
      <Header size='small'><center>Uw medicatie:</center></Header>
      {props.medsList.map((med, i) =>
        <div key={i} className='med'>
          <Typist>{med.title}</Typist>
          <span className='med-cancel' onClick={ e => props.removeMed(med) }>x</span>
        </div>
      )}
    </div>
  )
}

export default MedicinesInvoice;
