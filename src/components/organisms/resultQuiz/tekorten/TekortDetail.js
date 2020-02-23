import React, { Component } from "react";
import { connect } from "react-redux";

import "./health.scss";
import { Header, Paragraph } from "../../../atoms/typography";

class TekortDetail extends Component {
  render() {
    return (
      <main>
        <div className="main-overview">
          <div className="flex-wrapper">
            <div className="pane-header-details">
              <div className="card tekorten">
                <Header>
                  {this.props.data.tekort}
                </Header>
                <Paragraph>
                  {this.props.data.advice.content} 
            
                </Paragraph>
                <Paragraph>
          
                Score :   {this.props.data.result}
                </Paragraph>
              </div>
            
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dashboardNavigate.data
  };
};

export default connect(mapStateToProps)(TekortDetail);
