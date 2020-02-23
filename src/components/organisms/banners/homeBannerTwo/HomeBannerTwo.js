import React from 'react'

import CardsCollectionHome from '../../../molecules/cards/CardsCollectionHome'
import Cta from '../../../molecules/ctas/CTAHomeText'
import { Header, Paragraph } from '../../../atoms/typography'

const HomeBannerTwo = () => {
  return(
    <div className='home-banner-two'>
      <CardsCollectionHome />
      <Cta css='cta-home-banner-two' link='/select_quiz'>
        <Header>Lorem Ipsum Dolor</Header>
        <Paragraph>aute eram sunt duis multos dolore velit minim malis nisi quorum tempor export
        noster quem labore quae tamen sunt eram aute eram sunt duis multos dolore velit minim malis nisi quorum tempor export noster quem labore quae tamen sunt eram</Paragraph>
      </Cta>
    </div>
  )
}

export default HomeBannerTwo;
