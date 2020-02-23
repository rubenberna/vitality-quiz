import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Calendario extends React.Component {
  handleChange = (date) => {
    this.props.changeBirthday(date)
  }

  render() {
    return (
      <DatePicker
        showYearDropdown
        scrollableYearDropdown
        maxDate={new Date('December 31, 2002')}
        selected={this.props.date}
        onChange={this.handleChange}
      />
    );
  }
}

export default Calendario
