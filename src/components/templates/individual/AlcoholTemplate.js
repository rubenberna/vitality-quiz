import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import composedTemplateWrapper from '../../../hocs/TemplateWrapper'
import { Paragraph } from '../../atoms/typography/index'
import { Rectangle } from '../../atoms/shapes'
import { ReactComponent as Bar } from '../../../assets/img/alcohol/barwithbeerguy.svg'
import Beers from '../../molecules/animations/Beers'

const beerCoordinates = [
    { top: '417px', left: '17vw'},
    { top: '417px', left: '25vw'},
    { top: '417px', left: '33vw'},
    { top: '417px', left: '41vw'},
]

const rectangleCoordinates = [
  { top: '-40vh', left: '-10vw', rotation: '230deg', bottom: '', right: '' },
  { top: '', left: '-33vw', rotation: '140deg', bottom: '26vh', right: '' },
  { top: '', left: '', rotation: '35deg', bottom: '25vh', right: '-34vw' },
]

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  oveflow: hidden;
  position: relative;
`

const Background = styled(Bar)`
  z-index: -99;
`

const Question = styled.h4`
  position: absolute;
  top: 7vh;
`

const SpeechWrapper = styled.div`
  position: absolute;
  top: ${props => props.top };
  right: ${props => props.right };
  left: ${props => props.left };
`

const SpeechBuble = styled.div`
    position: relative;
    width: 240px;
    height: ${props => props.height};
    text-align: center;
    background-color: #fff;
    border: 2px solid #666;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    -webkit-box-shadow: 2px 2px 4px #888;
    -moz-box-shadow: 2px 2px 4px #888;
    box-shadow: 2px 2px 4px #888;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::before {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      top: ${props => props.before};
      border: ${props => props.blackBorder} solid;
      border-color: #666 #666 transparent transparent;
      right: 18px;
    }
    &::after {
      content: ' ';
      position: absolute;
      width: 0;
      height: 0;
      right: 22px;
      top: ${props => props.after};
      border: ${props => props.whiteBorder} solid;
      border-color: #fff #fff transparent transparent;
    }

  }
`

const SpeechAnswers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`

const Answer = styled.span`
  color: #04a1e3;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
`

const ClientAnswer = styled.p`
  font-style: italic;
`

const AlcoholTemplate = ({data, currIndex, updateQuestionScore}) => {
  const [counter, setCounter] = useState(0)

  useEffect( () => {
    updateQuestionScore(counter, data)
  }, [data, updateQuestionScore, counter])


  const increaseCount = () => {
    if (counter < 4 ) setCounter(counter + 1 )
  }

  const decreaseCount = () => {
    if (counter > 0 ) setCounter(counter - 1 )
  }

  const renderRectangles = () => {
    return rectangleCoordinates.map((rectangle, i) => {
      return <Rectangle
        key={i}
        degree={rectangle.rotation}
        top={rectangle.top}
        bottom={rectangle.bottom}
        right={rectangle.right}
        left={rectangle.left}
      />
    })
  }

  const renderActions = () => {
    return(
      <SpeechAnswers>
        <Answer onClick={ decreaseCount }>Minder!</Answer>
        <Answer onClick={ increaseCount }>Meer!</Answer>
      </SpeechAnswers>
    )
  }

  const renderClientSpeech = () => {
    switch (counter) {
      case 0:
        return <ClientAnswer>"This body only takes H2O"</ClientAnswer>
      case 1:
        return <ClientAnswer>"On Pictionary nights"</ClientAnswer>
      case 2:
        return <ClientAnswer>"With the footbal"</ClientAnswer>
      case 3:
        return <ClientAnswer>"Practically every night"</ClientAnswer>
      case 4:
        return <ClientAnswer>"I have a problem"</ClientAnswer>
      default:
        return <ClientAnswer>"I don't eat meat"</ClientAnswer>
    }
  }

  const renderTemplate = () => {
    return(
      <Container>
        <Question>{data.text}</Question>
        <SpeechWrapper top='125px' right='470px'>
          <SpeechBuble height='135px' before='131px' after='125px' whiteBorder='23px' blackBorder='24px'>
            <Paragraph>Meer? Of minder?</Paragraph>
            { renderActions() }
          </SpeechBuble>
        </SpeechWrapper>
        <SpeechWrapper top='225px' left='100px'>
          <SpeechBuble height='100px' before='95px' after='93px' whiteBorder='18px' blackBorder='21px'>{renderClientSpeech()}</SpeechBuble>
        </SpeechWrapper>
        <Beers coordinates={beerCoordinates} counter={counter}/>
        <Background />
        { renderRectangles() }
      </Container>
    )
  }

  return (
    <>
      { currIndex === data.index && renderTemplate() }
    </>
  )
}

export default composedTemplateWrapper(AlcoholTemplate);
