import React from 'react'

import { Form } from 'semantic-ui-react'
import NamedIcon from '../../atoms/icons/NamedIcon'
import { ButtonDefault } from '../../atoms/buttons/ButtonDefault'

const QuizNavigation = (props) => {

  const renderNavigation = () => {
    const { currIndex, lastIndex, changePage } = props
    // First and last page
    if ( currIndex === 0 && currIndex === lastIndex) {
      return (
        <div className='navigation first-last-page'>
          <Form.Field
            id='form-button-control-public'
            control={ButtonDefault}
            color='green'
            content='Confirm'
            handleClick={props.finishQuiz}
          />
          Verder
        </div>
      )
    }
    // First page
    if (currIndex === 0) {
      return (
        <div className='navigation first-page'>
          <ButtonDefault
            inverted='true'
            handleClick={ e => changePage(+1) }>
            Verder
            <NamedIcon
              name={'angle right'}
              className={'btn-arrow'}
              size={'small'}/>
          </ButtonDefault>
        </div>
      )
      // Last page
    } else if (lastIndex === currIndex) {
      return (
        <div className='navigation last-page'>
          <ButtonDefault
            inverted='true'
            handleClick={ e => props.changePage(-1) }>
            <NamedIcon
              name={'angle left'}
              className={'btn-arrow'}
              size={'small'}/>
            Terug
          </ButtonDefault>
          <ButtonDefault
            inverted='true'
            handleClick={ props.showMedication }>
            Verder
            <NamedIcon
            name={'angle right'}
            className={'btn-arrow'}
            size={'small'}/>
          </ButtonDefault>
        </div>
      )
      // Middle pages
    } else {
      return(
        <div className='navigation middle-page'>
          <ButtonDefault
            inverted='true'
            handleClick={ e => changePage(-1) }>
            <NamedIcon
              name={'angle left'}
              className={'btn-arrow'}
              size={'small'}/>
            Terug
          </ButtonDefault>
          <ButtonDefault
            inverted='true'
            handleClick={ e => changePage(+1) }>
            Verder
            <NamedIcon
            name={'angle right'}
            className={'btn-arrow'}
            size={'small'}/>
          </ButtonDefault>
        </div>
      )
    }
  }

  return(
    <>
      { renderNavigation() }
    </>
  )
}

export default QuizNavigation;
