import React, { Component } from "react";
import DashboardPane from "../../organisms/resultQuiz/dashboard";
import TekortenPane from "../../organisms/resultQuiz/tekorten";
import TekortDetail from "../../organisms/resultQuiz/tekorten/TekortDetail";
import { connect } from "react-redux";

import LifestylePane from "../../organisms/resultQuiz/lifestyle";
import MedicationPane from "../../organisms/resultQuiz/medication";
import WinkelenPane from "../../organisms/resultQuiz/winkelen";
import "./main.scss";

class Main extends Component {
  chooseMain() {
    switch (this.props.name) {
      case "winkelen":
        return <WinkelenPane />;
      case "health":
        return <TekortenPane />;
      case "lifestyle":
        return <LifestylePane />;
      case "medication":
        return <MedicationPane />;
      case "tekortdetail":
        return <TekortDetail />;
      default:
        return <DashboardPane />;
    }
  }
  render() {
    return (
      <div className="main">
        {this.chooseMain()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.dashboardNavigate.name
  };
};

export default connect(mapStateToProps)(Main);
