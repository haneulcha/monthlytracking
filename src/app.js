import React from "react";
import Calendar from "./calendar";
import Month from "./month";
import ReactDOM from "react-dom";

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
        <Month />
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
