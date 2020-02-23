import React, { Component } from 'react'

import Product from "../../../molecules/products/Product";
import { Header, Paragraph } from "../../../atoms/typography";

class WinkelenPane extends Component {


  render() {
    return (
      <>
        <header className="pane-header">
          <div className="pane-header-avatar">
            <div className="card winkelen">
              <Header>Winkelen</Header>
              <Paragraph>
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is in
                de jaren '60 populair geworden met de introductie van Letraset
                vellen met Lorem Ipsum passages en meer recentelijk door desktop
                publishing software zoals Aldus PageMaker die versies van Lorem
                Ipsum bevatten.
          </Paragraph>
            </div>
          </div>
        </header>

        <Product />
      </>
    )
  }
}

export default WinkelenPane
