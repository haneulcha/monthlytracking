import React from "react";
import Circle from "./circle";

class Calendar extends React.Component {
  LastDayOfMonth() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    let lastDay = new Date(year, month + 1, 0);

    return lastDay.getDate();
    //return 28, 29, 30, 31
  }

  renderDay(i) {
    return (
      <Circle
        date={i}
        value={this.props.circle[i]}
        onClick={() => this.props.onClick(i)}
      />
    ); // <Circle value={null}
  }

  render() {
    return (
      <div>
        <div>
          {this.renderDay(0)}
          {this.renderDay(1)}
          {this.renderDay(2)}
          {this.renderDay(3)}
          {this.renderDay(4)}
          {this.renderDay(5)}
          {this.renderDay(6)}
          {this.renderDay(7)}
          {this.renderDay(8)}
          {this.renderDay(9)}
          {this.renderDay(10)}
          {this.renderDay(11)}
          {this.renderDay(12)}
          {this.renderDay(13)}
          {this.renderDay(14)}
          {this.renderDay(15)}
          {this.renderDay(16)}
          {this.renderDay(17)}
          {this.renderDay(18)}
          {this.renderDay(19)}
          {this.renderDay(20)}
          {this.renderDay(21)}
          {this.renderDay(22)}
          {this.renderDay(23)}
          {this.renderDay(24)}
          {this.renderDay(25)}
          {this.renderDay(26)}
          {this.LastDayOfMonth() > 27 ? this.renderDay(27) : ""}
          {this.LastDayOfMonth() > 28 ? this.renderDay(28) : ""}
          {this.LastDayOfMonth() > 29 ? this.renderDay(29) : ""}
          {this.LastDayOfMonth() > 30 ? this.renderDay(30) : ""}
        </div>
      </div>
    );
  }
}

export default Calendar;
