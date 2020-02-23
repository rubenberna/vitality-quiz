import React, { Component } from "react";
import { connect } from "react-redux";

import "./dashboard.scss";
import { finalResult } from "../../../../dummyData";
import { Header, Paragraph } from "../../../atoms/typography";

 class Product extends Component {
  isObject(obj){
    return typeof obj === "object" && obj !== null;
  }
  dataSource = () => {
    if (this.props.debugState) return finalResult 
    else return this.props.quizFinalResult
  }

  ProductList = () =>{
    const data = this.dataSource();
    const productList  = [];
   
   if(this.isObject(data['finalScore']) && this.isObject(data["finalScore"]["products"])){
    const product = data["finalScore"]["products"][0];
    if(product)
      productList.push(product);
   }
   
    if(this.isObject(data["medicationTaken"])){

      data["medicationTaken"].some(element=>{
        const products =element['products'];
        return products &&  products.some(product=>{
          if(product){
            if(productList.every(p=>p.id !== product.id)){
              productList.push(product);
              return true;
            }
          }
          return false;
        })
      })
    }

    if(this.isObject(data["lifestyleQuestions"])){
      data["lifestyleQuestions"].some(element => {
        const product =element['product'];
        if(product){
          if(productList.every(p=>p.id !== product.id)){
            productList.push(product);
            return true;
          }
        }
        return false;
      });
     
    }
    console.log(productList);

    return productList;
  }

  render() {
  console.log(this.ProductList());
  
    
    return (
      <>
          <Header size='medium'>Products</Header>

        {this.ProductList().map((Product, i) => (
          <div className="overviewcard-icon" key={i}>
            <div className="overviewcard-img">
              <img
                alt={"medication result"}
                src={Product.pic}
                className="products-images"
              />
            </div>
            <div className="overviewcard-content">
              <Paragraph>{Product.description}</Paragraph>
            </div>
          </div>
        ))}
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
)(Product);