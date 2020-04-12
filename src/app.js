import React from "react";
import ReactDOM from "react-dom";

function Circle(props) {
  return (
    <button
      className={props.value ? "done-day" : "yet-day"}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.date + 1}
      {props.value ? "done" : "yet"}
    </button>
  );
  // date
}

class Calendar extends React.Component {
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
        </div>
        <div>
          {this.renderDay(8)}
          {this.renderDay(9)}
          {this.renderDay(10)}
          {this.renderDay(11)}
          {this.renderDay(12)}
          {this.renderDay(13)}
          {this.renderDay(14)}
        </div>
        <div>
          {this.renderDay(15)}
          {this.renderDay(16)}
          {this.renderDay(17)}
          {this.renderDay(18)}
          {this.renderDay(19)}
          {this.renderDay(20)}
          {this.renderDay(21)}
        </div>
        <div>
          {this.renderDay(22)}
          {this.renderDay(23)}
          {this.renderDay(24)}
          {this.renderDay(25)}
          {this.renderDay(26)}
          {this.renderDay(27)}
          {this.renderDay(28)}
        </div>
        <div>
          {this.renderDay(29)}
          {this.renderDay(30)}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: Array(31).fill(false), // [null, null, null, ... ]
    };
  }

  setLS() {
    localStorage.setItem("Monthly", JSON.stringify(this.state.history));
  }
  getLS() {
    const parsedMonthly = JSON.parse(localStorage.getItem("Monthly"));
    if (parsedMonthly) this.setState({ history: parsedMonthly });
  }

  handleClick(i) {
    const history = this.state.history;
    const dates = history.slice();
    dates[i] = !dates[i];
    this.setState({
      history: dates,
    });
    this.setLS();
  }

  componentDidMount() {
    this.getLS();
  }

  componentDidUpdate() {
    this.setLS();
  }

  render() {
    return (
      <div>
        <Calendar
          circle={this.state.history}
          onClick={(i) => this.handleClick(i)}
        />
        {console.log(this.state.history)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
