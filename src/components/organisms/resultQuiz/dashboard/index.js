import React, { Component } from "react";
import { Icon } from "react-materialize";
import { connect } from "react-redux";
import { dashboardNavigateAction } from "../../../../actions/dashboardNavigate";

import "./dashboard.scss";
import { Header, Paragraph } from "../../../atoms/typography";
import SpeedometerResult from "../../../molecules/graph/SpeedometerResult";
import { ButtonDefault } from "../../../atoms/buttons/ButtonDefault";
import DynamicDoughnut from "../../../molecules/graph/DynamicDoughnut";
import Product from "./Product";
import LifestyleDashboard from "./LifestyleDashboard";
import ChartFeedback from "./ChartFeedback";
import Winkelbutton from "../../../molecules/ctas/Winkelbutton";
import BtnDashboard from "../../../molecules/ctas/BtnDashboard";
import { ReactComponent as MedicationIcon } from "../../../../assets/img/dashboard/medication.svg";

class DashboardPane extends Component {
  render() {
    const { navigate } = this.props;
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <div className="dashboard-header-search">
            <Header bold>Your life in a nutshell.</Header>
          </div>
          <div className="dashboard-header-avatar">
            <Winkelbutton
              css="winkel-btn-clr"
              navigate={() => navigate("winkelen")}
            />
          </div>
        </header>

        <div className="dashboard-cards">
          <div className="card card-first" onClick={() => navigate("health")}>
            <Header size="small">Uw tekorten worden hier geanalyseerd</Header>
            <div className="dashboard-chart-wrapper">
              <DynamicDoughnut />
            </div>
            <div className="labels">
              <ChartFeedback />
            </div>
          </div>

          <div
            className="card lifestyle-wrapper"
            onClick={() => navigate("lifestyle")}
          >
            <LifestyleDashboard />
          </div>

          <div className="card-parent">
            <div
              className="card small meds"
              onClick={() => navigate("medication")}
            >
              <Header size="medium">Medicatie</Header>
              <MedicationIcon />
            </div>
            <div className="card small bmi">
              <Header size="medium">BMI</Header>
              <SpeedometerResult />
            </div>
          </div>
        </div>

        <div className="dashboard-header-second">
          <div className="dashboard-card-second">
            <div className="card">
              <Paragraph>
                Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
                bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
                zethaak met letters nam en ze door elkaar husselde om een
                font-catalogus te maken. Het heeft niet alleen vijf eeuwen
                overleefd maar is ook, vrijwel onveranderd, overgenomen in
                elektronische letterzetting.
              </Paragraph>
              <Paragraph>
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </Paragraph>
            </div>
            <ButtonDefault
              minwidth
              content
              handleClick={() => navigate("health")}
            >
              Alle resultaten
              <Icon>send</Icon>
            </ButtonDefault>
          </div>
          <div className="dashboard-card-first card">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    navigate: name => dispatch(dashboardNavigateAction(name))
  };
};
export default connect(null, mapDispatchToProps)(DashboardPane);
