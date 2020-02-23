import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import isEmpty from "lodash/isEmpty";
import { BounceLoader } from "react-spinners";

import Main from "../components/molecules/main/Main";
import Sidebar from "../components/molecules/sidebar/Sidebar";


const debugStateCss = {
  textAlign: 'center',
  color: 'white',
  background: '#b71c1c',
  width: '143px',
  padding: '10px',
  position: 'absolute',
  top: '5px',
  right: '58px',
  zIndex: 999
}

class QuizResult extends Component {


  renderDebutStateAlert = () => {
    if(this.props.debugState) return (
      <h5 style={debugStateCss}>Debug!</h5>
    )
  }

  renderOptions = () => {
    const { quizFinalResult, loading, debugState } = this.props;
    if (isEmpty(quizFinalResult) && loading) {
        return (
          <BounceLoader
            sizeUnit={"px"}
            size={150}
            color={"#fde0dc"}
            loading={true}
          />
        );
    }
    else if (!isEmpty(quizFinalResult) || debugState) {
        return (
          <>
            { this.renderDebutStateAlert() }
            <div className="content-main">
              <Sidebar />
              <Main />
            </div> 
          </>
        );
    }
    else if (isEmpty(quizFinalResult) && !debugState) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <h4>We may not have your results yet</h4>
          <Link to="/">Home</Link>
        </div>
      );
    }
  };

  render() {
    return <>{this.renderOptions()}</>;
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    loading: state.loading,
    debugState: state.debugState
  }
}

export default connect(mapStateToProps, null)(QuizResult)
