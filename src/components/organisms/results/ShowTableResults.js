import React, { Component } from "react";

import "./resultstable.scss";
import FinalScore from "../../molecules/table/FinalScore";
import Table from "../../atoms/table/Table";
import MedicationTaken from "../../molecules/table/MedicationTaken";
import Demographics from "../../molecules/table/Demographics";
import LifestyleQuestions from "../../molecules/table/LifestyleQuestions";

export default class ShowTableResults extends Component {
  getRowsDataFinalScore = () => {
    const { finalScore } = this.props.data;

    if (finalScore) {
      return Object.keys(finalScore).map((key, index) => {
        return <FinalScore key={index} title={key} data={finalScore[key]} />;
      });
    }
  };
  getRowsDataMedicationTaken = () => {
    const { medicationTaken } = this.props.data;

    if (medicationTaken) {
      return Object.keys(medicationTaken).map((key, index) => {
        return (
          <MedicationTaken
            key={index}
            title={key}
            data={medicationTaken[key]}
          />
        );
      });
    }
  };
  getRowsDataDemographics = () => {
    const { demographics } = this.props.data;

    if (demographics) {
      return Object.keys(demographics).map((key, index) => {
        if (key === "bmi") {
          return (
            <Demographics key={index} title={"Bmi"} data={demographics[key]} />
          );
        }
      });
    }
  };
  getRowsDatlifestyleQuestions = () => {
    const { lifestyleQuestions } = this.props.data;

    if (lifestyleQuestions) {
      return Object.keys(lifestyleQuestions).map((key, index) => {
        return (
          <LifestyleQuestions key={index} data={lifestyleQuestions[key]} />
        );
      });
    }
  };

  render() {
    return (
      <div className="results-table">
        <div className="results-table-finalScore">
          <Table
            data={this.getRowsDataFinalScore()}
            titleeen="Defficiency"
            titletwee="Result"
            titledrie="Score"
            titlevier="Advice"
          />
        </div>
        <div className="results-table-demo-meds">
          <Table
            data={this.getRowsDataMedicationTaken()}
            titleeen="Medication "
            titletwee="Supplement"
          />
          <Table
            data={this.getRowsDataDemographics()}
            titleeen="Demographics"
            titletwee="Advice"
            titledrie="Result"
          />
          <Table
            data={this.getRowsDatlifestyleQuestions()}
            titleeen="lifestyleQuestions"
            titletwee="Advice"
          />
        </div>
      </div>
    );
  }
}
