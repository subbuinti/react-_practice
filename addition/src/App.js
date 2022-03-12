import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      res: "",
    };
    this.onChangeNum1 = this.onChangeNum1.bind(this);
    this.onChangeNum2 = this.onChangeNum2.bind(this);
    this.add = this.add.bind(this);
    this.mul = this.mul.bind(this);
    this.sub = this.sub.bind(this);
  }

  add() {
    console.log("add", parseInt(this.state.num1) + parseInt(this.state.num2));
    this.setState({
      res: parseInt(this.state.num1) + parseInt(this.state.num2),
    });
  }
  mul() {
    console.log("mul", parseInt(this.state.num1) * parseInt(this.state.num2));
    this.setState({
      res: parseInt(this.state.num1) * parseInt(this.state.num2),
    });
  }
  sub() {
    console.log("sub");
    let subRes = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({ res: subRes });
  }
  onChangeNum1(e) {
    this.setState({ num1: e.target.value });
  }
  onChangeNum2(e) {
    this.setState({ num2: e.target.value });
  }
  render() {
    return (
      <div className="container">
        <div style={{ display: "flex" }}>
          <div>
            <div className="row">
              <input
                onChange={(e) => {
                  this.onChangeNum1(e);
                }}
                type="number"
              ></input>
            </div>
            <div className="row">
              <input
                onChange={(e) => {
                  this.onChangeNum2(e);
                }}
                type="number"
              ></input>
            </div>
          </div>
          <div>
            <h1 className="boxes">Result</h1>
            <span className="right">{this.state.res}</span>
          </div>
        </div>

        <div>
          <button onClick={this.add} className="custom-btn">
            Add
          </button>
          <button onClick={this.mul} className="custom-btn">
            Mul
          </button>
          <button onClick={this.sub} className="custom-btn">
            Sub
          </button>
        </div>
      </div>
    );
  }
}

export default App;
