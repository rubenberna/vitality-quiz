import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-materialize";

import "./dashboard.scss";
import pigImg from "../../../../assets/img/dashboard/pig.svg";
import smokeImg from "../../../../assets/img/dashboard/sigaretselectsmoke.svg";
import vegImg from "../../../../assets/img/dashboard/veg.svg";
import fishImg from "../../../../assets/img/dashboard/fish.svg";
import beerImg from "../../../../assets/img/dashboard/drink.svg";
import exerciseImg from "../../../../assets/img/dashboard/exercise.svg";
import waterImg from "../../../../assets/img/dashboard/water.svg";

import { Header } from "../../../atoms/typography";
import { finalResult } from "../../../../dummyData";

class LifestyleDashboard extends Component {
  dataSource = () => {
    if (this.props.debugState) return finalResult;
    else return this.props.quizFinalResult;
  };

  renderLifestyleInfo = () => {
    let currentList = this.dataSource().lifestyleQuestions.filter(
      item => item.supplement !== null
    );

    return currentList.map((lifestyle, i) => {
      return (
        <div className="card-lifestyle-img" key={i}>
          {this.renderImage(lifestyle)}
          {this.renderLifestyleIcon(lifestyle)}
        </div>
      );
    });
  };

  renderImage = lifestyle => {
    switch (lifestyle.name) {
      case "Groenten en fruit":
        return <img alt={lifestyle.name} src={vegImg} />;
      case "vlees":
        return <img alt={lifestyle.name} src={pigImg} />;
      case "vis":
        return <img alt={lifestyle.name} src={fishImg} />;
      case "roken":
        return <img alt={lifestyle.name} src={smokeImg} />;
      case "alcohol":
        return <img alt={lifestyle.name} src={beerImg} />;
      case "water":
        return <img alt={lifestyle.name} src={waterImg} />;
      case "sport":
        return <img alt={lifestyle.name} src={exerciseImg} />;
      default:
    }
  };

  renderLifestyleIcon = lifestyle => {
    if (lifestyle.score < 30)
      return <Icon className="iconGreenColor">check_circle</Icon>;
    else if (lifestyle.score >= 60)
      return <Icon className="iconRedColor">cancel</Icon>;
    else return <Icon className="iconorangeColor">help</Icon>;
  };

  render() {
    return (
      <div>
        <Header size="medium">Your basics</Header>
        <div className="card-lifestyle">
          {this.renderLifestyleInfo()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  };
};
export default connect(mapStateToProps, null)(LifestyleDashboard);
