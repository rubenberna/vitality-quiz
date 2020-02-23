import React from 'react'

import '../style.scss'
import Cta from '../../../molecules/ctas/CTAHomeText'
import { Header, Paragraph } from '../../../atoms/typography'
import bannerImage from '../../../../assets/img/headerimagerotated.png'

const HomeBannerOne = () => {
  return (
    <div className='home-banner-one'>
      <Cta css='cta-home-banner-one' link='/select_quiz'>
        <Header>Heb jij tekorten?</Header>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit ut
          atque amet, mollitia, libero harum esse porro quae perspiciatis fuga
          maiores facere commodi similique nihil sint ipsam voluptatem
          dignissimos doloribus.
        </Paragraph>
      </Cta>
      <img alt={ 'headerimage' } src={bannerImage} className='home-banner-one-img'/>
    </div>
  )
}

export default HomeBannerOne
