import React from 'react'

import Cta from '../../../molecules/ctas/CTAHomeText'
import GraphWithBackground from '../../gallery/ChartWithBackground'
import { Header, Paragraph } from '../../../atoms/typography'

const HomeBannerThree = () => {
  return (
    <div className="home-banner-three">
      <Cta css="cta-home-banner-three" link='/select_quiz'>
        <Header>Uitgebreiden resultaten</Header>
        <Paragraph>Nostrud summis excepteur probant, eu duis nescius aliquip, sunt o ab culpa
        iudicem ita ingeniis arbitrantur ita quibusdam, se ita philosophari hic senserit
        sunt deserunt, ne tempor a amet, fore commodo incurreret. Est minim tempor ad
        laboris ad ipsum incididunt aut senserit. Occaecat e nescius e excepteur do
        tamen. O noster duis ne expetendis se vidisse despicationes eu occaecat hic elit
        constias consectetur, possumus summis aute quo culpa, quem e commodo, do
        mandaremus praesentibus si noster ut ingeniis, ea aute eram o litteris.Quo
        laboris eu.</Paragraph>
      </Cta>
      <GraphWithBackground />
    </div>
  );
};

export default HomeBannerThree;
