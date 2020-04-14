import React from "react";
import Calendar from "./calendar";

import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: Array(31).fill(false), // [null, null, null, ... ]
    };
  }

  setLS(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  }
  getLS(key) {
    const parsedItem = JSON.parse(localStorage.getItem(key));
    if (parsedItem) this.setState({ history: parsedItem });
  }

  handleClick(i) {
    const history = this.state.history;
    const dates = history.slice();
    dates[i] = !dates[i];
    this.setState({
      history: dates,
    });
    this.setLS("Monthly", this.state.history);
  }

  componentDidMount() {
    this.getLS("Monthly");
  }

  componentDidUpdate() {
    this.setLS("Monthly", this.state.history);
  }

  render() {
    return (
      <div>
        <Calendar
          circle={this.state.history}
          onClick={(i) => this.handleClick(i)}
          setLS={this.setLS}
        />
        {console.log(this.state.history)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
