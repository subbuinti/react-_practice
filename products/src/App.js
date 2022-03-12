import { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onIncrement() {
    console.log("called");
    if (this.state.counter < 10) {
      this.setState({ counter: this.state.counter + 2 });
    }
  }
  onDecrement() {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 2 });
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
