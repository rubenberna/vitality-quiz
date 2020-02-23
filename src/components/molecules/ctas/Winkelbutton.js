import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Btnwinkel.scss";
import { ButtonDefault } from "../../atoms/buttons/ButtonDefault";
import { ReactComponent as WinkelenIcon } from "../../../assets/img/dashboard/shopdashboard.svg";

const Winkelbutton = props => {
  return (
    <div className={props.css}>
      <ButtonDefault
        inverted={props.inverted}
        justfy
         minwidth
        handleClick={props.navigate}
        to="/admin/winkelen"
      >
        {props.btnText ? props.btnText : "Winkelen"}

        <WinkelenIcon />
      </ButtonDefault>
    </div>
  );
};

export default withRouter(Winkelbutton);
