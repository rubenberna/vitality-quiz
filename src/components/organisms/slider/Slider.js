import React, { Component } from "react";
import { Icon } from "react-materialize";
import "./slider.scss";
import Card from "./Card";


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.properties = this.props.s;
    this.state = { index: 0 };
    this.max = this.properties.length;
  }
  changeProperty = num => {
    this.setState({
      index: this.state.index + num
    });
  };

  render() {
    if (this.properties == null) return <div />;
    const index = this.state.index ;

    return (
      <div className="slider">
        <button
          onClick={() => this.changeProperty(-1)}
          disabled={index === 0}
          className="right-btn"
        >
          <Icon className="slider-arrow">keyboard_arrow_left</Icon>
        </button>
        <button
          onClick={() => this.changeProperty(1)}
          disabled={index === this.max-1}
          className="left-btn"
        >
          <Icon className="slider-arrow">keyboard_arrow_right</Icon>
        </button>

        <div className="page">
        

          <div className="slider-col">
            <div className={`cards-slider active-slide-${index}`}>
              <div
                className="cards-slider-wrapper"
                style={{
                  transform: `translateX(-${index *
                    (20 / this.max)}%)`
                }}
              >
                {this.properties.map((property,i) =>
                  <Card key={i} property={property} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
