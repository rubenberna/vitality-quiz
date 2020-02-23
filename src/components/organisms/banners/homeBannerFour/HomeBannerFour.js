import React from 'react'

import Cta from '../../../molecules/ctas/CTAHomeText'
import { Header, Paragraph } from '../../../atoms/typography'

const HomeBannerFour = () => {
  return(
    <div className='home-banner-four'>
      <div  className='home-banner-four-frame'>
        <img alt={ 'headerimage' } src={'http://redcarrotsdev.be/dev/relax.svg'} className='home-banner-four-frame-img'/>
        <div className='home-banner-four-frame-text'>
          <Header>Zo vind je de ideale rust</Header>
          <Paragraph>Admodum quid pariatur laborum. Fabulas malis mentitum consequat. Ex proident
          reprehenderit. In consequat aut nostrud.Eu sed quid aliquip de est iudicem
          exquisitaque et iis iis adipisicing eu iis irure quo veniam. Cupidatat sint
          dolor ad anim est fugiat ex se tempor proident aut quamquam si labore possumus
          id aute aliquip aliquip.</Paragraph>
        </div>
      </div>
      <Cta css='cta-home-banner-four' link='/blogs' btnText='Lees meer'>
        <Header>Lees meer op onze blogs</Header>
        <Paragraph>Heb je interesse in onze artikels en heb je nodig echte lifestyle en food advice?</Paragraph>
        <Paragraph>Geen probleem! We got you covered.</Paragraph>
      </Cta>
    </div>
  )
}

export default HomeBannerFour;
