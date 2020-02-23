import React from "react";
import { withRouter } from "react-router-dom";

import { ButtonDefault } from "../../atoms/buttons/ButtonDefault";
import { Icon } from "react-materialize";

const CTAHomeText = props => {
  const navigate = () => {
    props.history.push(props.link);
  };
  return (
    <div className={props.css}>
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
      <ButtonDefault inverted={props.inverted} handleClick={navigate}>
        {props.btnText ? props.btnText : "Start"}
        <Icon>send</Icon>
      </ButtonDefault>
    </div>
  );
};

export default withRouter(CTAHomeText);
