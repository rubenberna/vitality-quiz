import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { Switch } from 'react-materialize'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper.js'
import { Rectangle } from '../../atoms/shapes'
import { FishIcon } from '../../../assets/img/fish/FishImage.js'

const colors = ['aliceblue', '#fde0dc']

const giveColor = () => {
  return colors[Math.round(Math.random())]
}

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '', color: giveColor() },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '', color: giveColor() },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw', color: giveColor() },
]

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Frame = styled.div`
  width: 835px;
  height: 500px;
  display: flex;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-top: 60px;
  border-radius: 9px;
  padding: 39px;
  flex-direction: column;
`

const QuestionDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const QuestionText = styled.p`

`

const QuestionActions = styled.div`
  width: 232px;
  display: flex;
  align-items: center;
`

const QuestionButtons = styled.div`
  width: 87px;
  display: flex;
  justify-content: space-between;
`

const IconsContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
`

const StyledIcon = styled.i`
  color: darkgray;
`

const LifeStyleTemplate = ({data, currIndex, updateQuestionScore}) => {
  const [meat, setmeat] = useState(0)
  const [fish, setfish] = useState(0)
  const [vegetables, setvegetables] = useState(0)
  const [water, setwater] = useState(0)
  const [sports, setsports] = useState(0)
  const [alcohol, setalcohol] = useState(0)
  const [smoke, setsmoke] = useState(false)

  useEffect( () => {
    const meatQuestion = data.find(q => q.question_nr === 605)
    updateQuestionScore(meat, meatQuestion)
  }, [meat, updateQuestionScore, data])

  useEffect( () => {
    const vegetablesQuestion = data.find(q => q.question_nr === 606)
    updateQuestionScore(vegetables, vegetablesQuestion)
  }, [vegetables, updateQuestionScore, data])

  useEffect( () => {
    const alcoholQuestion = data.find(q => q.question_nr === 603)
    updateQuestionScore(alcohol, alcoholQuestion)
  }, [alcohol, updateQuestionScore, data])

  useEffect( () => {
    const fishQuestion = data.find(q => q.question_nr === 604)
    updateQuestionScore(fish, fishQuestion)
  }, [fish, updateQuestionScore, data])

  useEffect( () => {
    const sportsQuestion = data.find(q => q.question_nr === 768)
    updateQuestionScore(sports, sportsQuestion)
  }, [sports, updateQuestionScore, data])

  useEffect( () => {
    const waterQuestion = data.find(q => q.question_nr === 801)
    updateQuestionScore(water, waterQuestion)
  }, [water, updateQuestionScore, data])

  useEffect( () => {
    const smokeQuestion = data.find(q => q.question_nr === 632)
    const points = smoke ? 4 : 0
    updateQuestionScore(points, smokeQuestion)
  }, [smoke, updateQuestionScore, data])

  const renderRectangles = () => {
    return rectangleCoordinates.map((rectangle, i) => {
      return <Rectangle
        key={i}
        degree={rectangle.rotation}
        top={rectangle.top}
        bottom={rectangle.bottom}
        right={rectangle.right}
        left={rectangle.left}
        color={rectangle.color}
      />
    })
  }

  const handleSmoke = () => {
    setsmoke(!smoke)
  }

  console.log('props from lifeStyle: ', data);
  const increaseCount = q => {
    switch (q.question_nr) {
      case 605:
        if (meat < 4 ) setmeat(meat + 1)
        break
      case 606:
        if (vegetables < 4 ) setvegetables(vegetables + 1)
        break
      case 604:
        if (fish < 4 ) setfish(fish + 1)
        break
      case 603:
        if (alcohol < 4 ) setalcohol(alcohol + 1)
        break
      case 768:
        if (sports < 4 ) setsports(sports + 1)
        break
      case 801:
        if (water < 4 ) setwater(water + 1)
        break
      default:
        return
    }
  }

  const decreaseCount = q => {
    switch (q.question_nr) {
      case 605:
        if (meat > 0 ) setmeat(meat - 1)
        break
      case 606:
        if (vegetables > 0 ) setvegetables(vegetables - 1)
        break
      case 604:
        if (fish > 0 ) setfish(fish - 1)
        break
      case 603:
        if (alcohol > 0 ) setalcohol(alcohol - 1)
        break
      case 768:
        if (sports > 0 ) setalcohol(alcohol - 1)
        break
      case 801:
        if (water > 0 ) setwater(water - 1)
        break
      default:
        return
    }
  }

  const renderIcons = id => {
    switch (id) {
      case 605:
        const arrayM = [...new Array(meat)]
        return arrayM.map(i => <StyledIcon className='material-icons' key={shortid.generate()}>restaurant_menu</StyledIcon>)
      case 606:
        const arrayV = [...new Array(vegetables)]
        return arrayV.map(i => <StyledIcon className='material-icons' key={shortid.generate()}>local_florist</StyledIcon>)
      case 604:
        const arrayF = [...new Array(fish)]
        return arrayF.map(i => <FishIcon key={shortid.generate()} style={{ width: '35px', fill: 'darkgray' }}/>)
      case 632:
        if(smoke) return <StyledIcon className='material-icons'>smoking_rooms</StyledIcon>
        else return <StyledIcon className='material-icons'>smoke_free</StyledIcon>
      case 603:
        const arrayA = [...new Array(alcohol)]
        return arrayA.map(i => <StyledIcon className='material-icons' key={shortid.generate()}>local_bar</StyledIcon>)
      case 768:
        const arraySp = [...new Array(sports)]
        return arraySp.map(i => <StyledIcon className='material-icons' key={shortid.generate()}>pool</StyledIcon>)
      case 801:
        const arrayW = [...new Array(water)]
        return arrayW.map(i => <StyledIcon className='material-icons' key={shortid.generate()}>opacity</StyledIcon>)
      default:
      return
    }
  }

  const renderQuestions = () => {
    return data.map((q, i) => {
      if (q.question_nr === 632) {
        return(
          <QuestionDiv key={q.id}>
            <QuestionText>{q.text}</QuestionText>
            <QuestionActions>
              <QuestionButtons>
                <Switch offLabel="" onLabel="" onClick={handleSmoke}/>
              </QuestionButtons>
              <IconsContainer>{renderIcons(q.question_nr)}</IconsContainer>
            </QuestionActions>
          </QuestionDiv>
        )
      }
    else return (
        <QuestionDiv key={q.id}>
          <QuestionText>{q.text}</QuestionText>
          <QuestionActions>
            <QuestionButtons>
              <button
                className="btn-floating"
                onClick={e => increaseCount(q)}>
                <i className="material-icons">add</i>
              </button>
              <button
                className="btn-floating"
                onClick={e => decreaseCount(q)}>
                <i className="material-icons">remove</i>
              </button>
            </QuestionButtons>
            <IconsContainer>{renderIcons(q.question_nr)}</IconsContainer>
          </QuestionActions>
        </QuestionDiv>
      )
    })
  }

  const renderTemplate = () => {
    return(
      <Container>
        <Frame>
          { renderQuestions() }
        </Frame>
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { currIndex === data.index &&  renderTemplate() }
    </>
  )
}

export default composedTemplateWrapper(LifeStyleTemplate);
