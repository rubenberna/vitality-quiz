import React, { Component } from "react";
import { connect } from 'react-redux'
import ReactMinimalPieChart from "react-minimal-pie-chart";

import { finalResult } from "../../../dummyData";

class DynamicDoughnut extends Component {

  dataSource = () => {
    if (this.props.debugState) return finalResult
    else return  this.props.quizFinalResult;
       

  }


  getRowsDataFinalScore() {
    const redColor = [];
    const greenColor = [];
    const orangeColor = [];

    return Object.keys(this.dataSource()["finalScore"]).map((tekoort, i) => {
      if (this.dataSource()["finalScore"][tekoort].color === "red") {
        redColor.push(this.dataSource()["finalScore"][tekoort].color);
      }
      if (this.dataSource()["finalScore"][tekoort].color === "green") {
        greenColor.push(this.dataSource()["finalScore"][tekoort].color);
      }
      if (this.dataSource()["finalScore"][tekoort].color === "orange") {
        orangeColor.push(this.dataSource()["finalScore"][tekoort].color);
      }

      return {
        redColor: redColor.length,
        greenColor: greenColor.length,
        orangeColor: orangeColor.length
      };
    });
  }

  getRowsDatasFinalScore() {
    console.log( this.getRowsDataFinalScore())
    const lastchild = this.getRowsDataFinalScore()
      .slice(-1)
      .pop();
    return [lastchild.redColor, lastchild.greenColor, lastchild.orangeColor];
  }

  render() {
    return (
      <ReactMinimalPieChart
        animate={true}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: "#C13C37",
            title: "Opgelet",
            value: this.getRowsDatasFinalScore()[0]
          },
          {
            color: "#216a22",
            title: "Goed zo",
            value: this.getRowsDatasFinalScore()[2]
          },
          {
            color: "#E38627",
            title: "Kan beter",
            value: this.getRowsDatasFinalScore()[1]
          }
        ]}
        label
        labelPosition={60}
        labelStyle={{
          fontFamily: "sans-serif",
          fontSize: "5px"
        }}
        lengthAngle={360}
        lineWidth={30}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={8}
        radius={50}
        ratio={1}
        startAngle={0}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  }
}

export default connect(mapStateToProps, null)(DynamicDoughnut)
