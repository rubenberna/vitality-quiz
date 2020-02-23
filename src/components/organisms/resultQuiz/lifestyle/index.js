import React, { Component } from "react";
import { connect } from "react-redux";

import "./lifestyle.scss";
import pigImg from "../../../../assets/img/dashboard/pig.svg";
import smokeImg from "../../../../assets/img/dashboard/sigaretselectsmoke.svg";
import vegImg from "../../../../assets/img/dashboard/veg.svg";
import fishImg from "../../../../assets/img/dashboard/fish.svg";
import beerImg from "../../../../assets/img/dashboard/drink.svg";
import { Header, Paragraph } from "../../../atoms/typography";
import { finalResult } from "../../../../dummyData";
import { ReactComponent as Winkelen } from "../../../../assets/img/dashboard/shopdashboard.svg";
import { dashboardNavigateAction } from "../../../../actions/dashboardNavigate";

class LifestylePane extends Component {
  dataSource = () => {
    if (this.props.debugState) return finalResult;
    else return this.props.quizFinalResult;
  };

  renderLifestyle = () => {
    let currentList = this.dataSource().lifestyleQuestions.filter(
      item => item.supplement !== null
    );

    console.log(currentList);

    return currentList.map((lifestyle, i) =>
      <div className="card-lifestyle card" key={i}>
        <div className="content">
          <div>
            {this.renderImage(lifestyle)}
          </div>
          <div className="paragraph-lifestyle">
            <Paragraph bold>Score</Paragraph>
            {this.renderScore(lifestyle)}
            {this.renderResult(lifestyle)}
          
          </div>
          <span className="permalink">  {this.renderWinkelenImg(lifestyle)}</span>

        </div>
      </div>
    );
  };

  renderScore = lifestyle => {
    if (lifestyle.score < 30)
      return (
        <Paragraph bold color="#008000">
          {Math.floor(lifestyle.score)}%
        </Paragraph>
      );
    else if (lifestyle.score >= 60)
      return (
        <Paragraph bold color="#b71c1c">
          {Math.floor(lifestyle.score)}%
        </Paragraph>
      );
    else
      return (
        <Paragraph bold color="#ff8f00">
          {Math.floor(lifestyle.score)}%
        </Paragraph>
      );
  };

  renderImage = lifestyle => {
    switch (lifestyle.name) {
      case "Groenten en fruit":
        return (
          <img alt={lifestyle.name} src={vegImg} className="lifestyle-img" />
        );
      case "vlees":
        return (
          <img alt={lifestyle.name} src={pigImg} className="lifestyle-img" />
        );
      case "vis":
        return (
          <img alt={lifestyle.name} src={fishImg} className="lifestyle-img" />
        );
      case "roken":
        return (
          <img alt={lifestyle.name} src={smokeImg} className="lifestyle-img" />
        );
      case "alcohol":
        return (
          <img alt={lifestyle.name} src={beerImg} className="lifestyle-img" />
        );

      default:
    }
  };

  // renderIcon = lifestyle => {
  //   console.log("dsfsdssfd"+lifestyle.score);

  //   if (lifestyle.score < 30)
  //     return <Icon className="iconGreenColor">check_circle</Icon>;
  //   else if (lifestyle.score >= 60)
  //     return <Icon className="iconRedColor">cancel</Icon>;
  //   else return <Icon className="iconorangeColor">help</Icon>;
  // };

  renderResult = lifestyle => {
    console.log(lifestyle.result.name);

    if (lifestyle.score < 30)
      return (
        <div>
          <Paragraph bold>Advice:</Paragraph>
          <span>You're golden! Keep it that way!</span>
        </div>
      );
    else if (lifestyle.score >= 60)
      return (
        <div>
          <Paragraph bold>Advice:</Paragraph>
          <Paragraph>
            {lifestyle.result.name}
          </Paragraph>
        </div>
      );
    else
      return (
        <div>
          <Paragraph bold>Advice: change of habits</Paragraph>
          <Paragraph>
            {lifestyle.result.name}
          </Paragraph>
        </div>
      );
  };

  renderWinkelenImg = lifestyle => {
    const { navigate } = this.props;
    if (lifestyle.score >= 60)
      return (
        <div
          className="lifestyle-img-winkel"
          navigate={() => navigate("winkelen")}
          // onClick={e => this.props.changemain("winkelen")}
        >
          <Winkelen />
        </div>
      );
  };

  render() {
   
    return (
      <main className="lifestyle">
        <header className="pane-header">
          <div className="pane-header-avatar">
            <div className="card lifestyle">
              <Header>lifestyle</Header>
              <Paragraph>
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </Paragraph>
            </div>
          </div>
        </header>

        <div className="lifestyle-header-second ">
          {this.renderLifestyle()}
      
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  };
};
const mapDispatchToProps = dispatch => {
  return {
    navigate: name => dispatch(dashboardNavigateAction(name))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LifestylePane);
