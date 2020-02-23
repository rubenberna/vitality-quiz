import React, { Component } from "react";
import { connect } from 'react-redux'
import ReactSpeedometer from "react-d3-speedometer";
import { finalResult } from "../../../dummyData";

class SpeedometerResult extends Component {
  
  dataSource = () => {
    if (this.props.debugState) return finalResult
    else return this.props.quizFinalResult
  }

  render() {
    return (
      <>
        <ReactSpeedometer
          maxValue={100}
          maxSegmentLabels={0}
          value={
            this.dataSource()["demographics"].bmi.lifestyle_advice
              ? 30
              : this.dataSource()["demographics"].bmi.food_advice
              ? 70
              : 100
          }
          height={88}
          needleColor="red"
          valueFormat="d"
          forceRender={true}
          customSegmentStops={[0, 33, 67, 100]}
          segments={2}
          eedleTransitionDuration={4000}
          needleTransition="easeElastic"
          segmentColors={
            this.dataSource()["demographics"].bmi.lifestyle_advice
              ? ["green", "#E8E8E8", "#F0F0F0"]
              : this.dataSource()["demographics"].bmi.food_advice
              ? ["#E8E8E8", "orange", "#F0F0F0"]
              : ["#E8E8E8", "#F0F0F0", "red"]
          }
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  };
};

export default connect(
  mapStateToProps,
  null
)(SpeedometerResult);
