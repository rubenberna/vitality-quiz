import React from 'react'
import Card from '../../atoms/card/CardHomeBanner'

const content = [
  {id: 1, title: 'Vitaminen', text: 'Amet occaecat et arbitror, possumus minim malis ad esse hic expetendis quo minim qui commodo se illum, senserit sunt id eiusmod exquisitaque non de an dolore singulis, amet iis ita illum offendit, qui ubi amet nisi sint. Culpa'},
  {id: 2, title: 'Mineralen', text: 'Amet occaecat et arbitror, possumus minim malis ad esse hic expetendis quo minim qui commodo se illum, senserit sunt id eiusmod exquisitaque non de an dolore singulis, amet iis ita illum offendit, qui ubi amet nisi sint. Culpa'},
  {id: 3, title: 'Complexen', text: 'Amet occaecat et arbitror, possumus minim malis ad esse hic expetendis quo minim qui commodo se illum, senserit sunt id eiusmod exquisitaque non de an dolore singulis, amet iis ita illum offendit, qui ubi amet nisi sint. Culpa'},
]

const CardsCollectionHome = () => {
  return(
    <div className='cards-collection-home'>
      { content.map( (sup, i) =>
        <Card key={i}
          title={sup.title}
          text={sup.text}
          inverted={ i === 1 ? true : false}
        />
    )}
    </div>
  )
}

export default CardsCollectionHome;
