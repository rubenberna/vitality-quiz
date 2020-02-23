import React, { Component } from "react";
import { connect } from "react-redux";
import { SideNav, SideNavItem } from "react-materialize";

import "./sidebar.scss";
import { dashboardNavigateAction } from "../../../actions/dashboardNavigate";
import { Header } from "./../../atoms/typography";
import { ReactComponent as Lifestyle } from "../../../assets/img/dashboard/lifestyledashboard.svg";
import { ReactComponent as Winkelen } from "../../../assets/img/dashboard/shopdashboard.svg";
import { ReactComponent as Tekorten } from "../../../assets/img/dashboard/healthdashboard.svg";
import { ReactComponent as Medication } from "../../../assets/img/dashboard/medication.svg";
class Sidebar extends Component {
  render() {
    const { name } = this.props;

    return (

      <SideNav fixed={true}>
       
        <SideNavItem
          className={name === "dashboard" ? "selected-dashboard" : ""}
          onClick={this.props.dashboardNavigateAction}
        >
          <Header size="medium">Dashboard</Header>
        </SideNavItem>
        <SideNavItem
          waves={true}
          className={name === "health" ? "active" : ""}
         
          onClick={() => this.props.dashboardNavigateAction("health")}
        >
          
          <div className="item tekorten">
            <Tekorten />
            <Header size="small">Tekorten</Header>
          </div>
        </SideNavItem>
        <SideNavItem
          waves={true}
          className={name === "lifestyle" ? "active" : ""}
          onClick={() => this.props.dashboardNavigateAction("lifestyle")}
        >
          <div className="item lifestyle">
            <Lifestyle />
            <Header size="small">Lifestyle</Header>
          </div>
        </SideNavItem>
        <SideNavItem
          waves={true}
          className={name === "medication" ? "active" : ""}
          onClick={() => this.props.dashboardNavigateAction("medication")}
        >
          <div className="item medication">
            <Medication />
            <Header size="small">Medication</Header>
          </div>
        </SideNavItem>
        <SideNavItem
          waves={true}
          className={name === "winkelen" ? "active" : ""}
          onClick={() => this.props.dashboardNavigateAction("winkelen")}
        >
          <div className="item winkelen">
            <Winkelen />
            <Header size="small">Winkelen</Header>
          </div>
        </SideNavItem>
      </SideNav>
    );
  }
}

const mapStateToProps = state => {
  return {
    dashboardNavigate: state.dashboardNavigate.name
  };
};

export default connect(mapStateToProps, {dashboardNavigateAction})(Sidebar);
