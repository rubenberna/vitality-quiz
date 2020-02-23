import React from "react";
import { withRouter } from "react-router-dom";

import "./Btnwinkel.scss";
import { ButtonDefault } from "../../atoms/buttons/ButtonDefault";
import { Link } from "react-router-dom";
import { ReactComponent as WinkelenIcon } from "../../../assets/img/dashboard/shopdashboard.svg";

const BtnDashboard = props => {
  return (
    <div className={props.css}>
      <ButtonDefault
        inverted={props.inverted}
        component={Link}
        to="/select_quiz"
        size="small"
        minwidth
        content
        handleClick={props.navigate}
      >
        {props.btnText ? props.btnText : "Winkelen"}
        <WinkelenIcon />
      </ButtonDefault>
    </div>
  );
};

export default withRouter(BtnDashboard);
