import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./medication.scss";
import { finalResult } from "../../../../dummyData";

import { Header, Paragraph } from "../../../atoms/typography";

class MedicationPane extends Component {

  dataSource = () => {
    if (this.props.debugState) return finalResult
    else return this.props.quizFinalResult
  }

  render () {
    
    
    return (
      <>
        <main className="medication">
          <header className="medication-header">
            <div className="medication-header-avatar">
              <div className="card meds">
                <Header>Medication</Header>
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

          <div className="medication-body-card">
            {
           
              this.dataSource()["medicationTaken"] ?  Object.keys(this.dataSource()["medicationTaken"]).map((mtaken, i) => (
              <div className="card" key={i}>
                <Header>{this.dataSource()["medicationTaken"][mtaken].brand_name}</Header>
                <Paragraph>{this.dataSource()["medicationTaken"][mtaken].advice}</Paragraph>
              </div>
              ))
              : ""
              }
          </div>
        </main>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  }
}

export default connect(mapStateToProps, null)(MedicationPane)
