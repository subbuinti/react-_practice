import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: 0,
      input2: 0,
      sum: 0,
    };
    this.onChangeInput1 = this.onChangeInput1.bind(this);
    this.onChangeInput2 = this.onChangeInput2.bind(this);
    this.add = this.add.bind(this);
  }

  onChangeInput1(e) {
    this.setState({
      input1: parseInt(e.target.value),
      sum: parseInt(e.target.value) + this.state.input2,
    });
  }
  onChangeInput2(e) {
    this.setState({
      input2: parseInt(e.target.value),
      sum: this.state.input1 + parseInt(e.target.value),
    });
  }
  add() {
    this.setState({
      sum: parseInt(this.state.input1) + parseInt(this.state.input2),
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={(e) => {
              this.onChangeInput1(e);
            }}
          ></input>
          <input
            onChange={(e) => {
              this.onChangeInput2(e);
            }}
          ></input>
          <button onClick={this.add}>add</button>
        </div>
        <h1>sum:{this.state.sum}</h1>
      </div>
    );
  }
}
export default App;
