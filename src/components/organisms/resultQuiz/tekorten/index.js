import React, { Component } from "react";
import { connect } from "react-redux";
import { dashboardNavigateAction } from "../../../../actions/dashboardNavigate";
import "./health.scss";
import { Header, Paragraph } from "../../../atoms/typography";
import { finalResult } from "../../../../dummyData";
import { ReactComponent as BrainsRed } from "../../../../assets/img/insight/brainsrood.svg";
import { ReactComponent as BrainsGreen } from "../../../../assets/img/insight/brainsgreen.svg";
import { ReactComponent as BrainsOrange } from "../../../../assets/img/insight/brainsoranje.svg";
import { ReactComponent as HeartRed } from "../../../../assets/img/insight/heartrood.svg";
import { ReactComponent as HeartOrange } from "../../../../assets/img/insight/heartoranje.svg";
import { ReactComponent as HeartGreen } from "../../../../assets/img/insight/heartgroen.svg";

class TekortenPane extends Component {
  data;
  dataSource = () => {
    if (this.props.debugState) return finalResult;
    else return this.props.quizFinalResult;
  };

  renderIcon(color, icon) {
    if (color === "green" && icon === "brain") {
      return <BrainsGreen />;
    } else if (color === "green" && icon === "heart") {
      return <HeartGreen />;
    } else if (color === "red" && icon === "heart") {
      return <HeartRed />;
    } else if (color === "red" && icon === "brain") {
      return <BrainsRed />;
    } else if (color === "orange" && icon === "brain") {
      return <BrainsOrange />;
    } else if (color === "orange" && icon === "heart") {
      return <HeartOrange />;
    }
  }

  filterTekorten = () => {
    this.data = this.dataSource()["finalScore"];
    return Object.keys(this.data).filter(tekort => tekort !== "products");
  };

  render() {
    const  navigate  = this.props.dashboardNavigateAction;
    return (
      <main>
        <header className="pane-header">
          <div className="pane-header-avatar">
            <div className="card tekorten">
              <Header>tekorten</Header>
              <Paragraph>
                Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel
                onveranderd, overgenomen in elektronische letterzetting. Het is
                in de jaren '60 populair geworden met de introductie van
                Letraset vellen met Lorem Ipsum passages en meer recentelijk
                door desktop publishing software zoals Aldus PageMaker die
                versies van Lorem Ipsum bevatten.
              </Paragraph>
            </div>
          </div>
        </header>

        <div className="health-body" />
        <div className="main-overview">
          <div className="flex-wrapper">
            {this.filterTekorten().map((tekort, i) => {
              return (
                <div className="flex-column" key={i}>
                  <div className="card">
                    <div className="card-content">
                      <Header>
                        {tekort}
                      </Header>
                      {this.renderIcon(
                        this.data[tekort].color,
                        this.data[tekort].icons
                      )}
                      <Paragraph>
                        {this.data[tekort].advice.content}
                      </Paragraph>
                    </div>
                    <span
                      className="permalink"
                      onClick={() => {
                        console.log("mmmm", {
                          ...this.data[tekort],
                          tekort: tekort
                        });
                        navigate("tekortdetail", {
                          ...this.data[tekort],
                          tekort: tekort
                        });
                      }}
                    >
                      lees meer
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizFinalResult: state.quizFinalResult,
    debugState: state.debugState
  };
};


export default connect(mapStateToProps, {dashboardNavigateAction})(TekortenPane);
