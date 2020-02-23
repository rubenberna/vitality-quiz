import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./products.scss";
import { finalResult } from "../../../dummyData";
import { ReactComponent as Tekorten } from "../../../assets/img/dashboard/healthdashboard.svg";
import { ReactComponent as Medication } from "../../../assets/img/dashboard/medicationdashboard.svg";
import { ReactComponent as Lifestyle } from "../../../assets/img/dashboard/lifestyledashboard.svg";

import { Header } from "../../atoms/typography";

import Slider from "../../organisms/slider/Slider";

class Product extends Component {
  quizFinalResult = () => {
    if (this.props.debugState) return finalResult;
    else return this.props.quizFinalResult;
  };

  ListProductsData = () => {
    const quizFinalResult = this.props.quizFinalResult;
    const productList = {
      medicationTaken: [],
      finalScore: [],
      lifestyleQuestions: []
    };
    let products = [];
    quizFinalResult["medicationTaken"].map(medication => {
      medication.products &&
        medication.products.map(product => {
          if (productList.medicationTaken.every(p => p.id !== product.id)) 
                productList.medicationTaken.push(product);
        });
    });
    console.log("productList :", productList,quizFinalResult["medicationTaken"]);

    if (quizFinalResult["finalScore"]["products"] != null) {
      quizFinalResult["finalScore"]["products"].map(fproduct => {
        if (fproduct !== undefined && fproduct !== null) {
          productList.finalScore.push(fproduct);
        }
      });
    }

    Object.keys(quizFinalResult["lifestyleQuestions"]).map((Lifestyle, i) => {
      const product = quizFinalResult["lifestyleQuestions"][i].product;
      if (product !== undefined && product !== null)
        productList.lifestyleQuestions.push(product);
    });
    return productList;
  };

  render() {
    this.properties = this.ListProductsData();
    return (
      <div>
        <Header size="small">
          Supplementen gebaseerd op jouw <Tekorten className="tekort-icon" />
          Tekorten
        </Header>
        <Slider s={this.properties.finalScore} />

        <Header size="small">
          Supplementen gebaseerd op jouw <Medication className="tekort-icon" />
          medication
        </Header>
        <Slider s={this.properties.medicationTaken} />
        <Header size="small">
          Supplementen gebaseerd op jouw <Lifestyle className="tekort-icon" />
          lifestyle
        </Header>
        <Slider s={this.properties.lifestyleQuestions} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  };
};
export default connect(mapStateToProps)(Product);
