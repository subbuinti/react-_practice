import {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.incrementFn = this.increment.bind(this)
    this.decrementFn = this.decrement.bind(this)
  }

  increment() {
    if (this.state.counter < 10){
      this.setState({ counter : this.state.counter +1 })
    }
  }
  decrement(){
    if(this.state.counter > 0){
    this.setState({counter: this.state.counter -1})
  }}

  render(){
    return (
      <div>
        counter : {this.state.counter}
        <div>
        <button onClick={this.incrementFn} > Increment</button>
        <button onClick={this.decrementFn}>Decrement</button>
        </div>
        
      </div>
    )
  }
}
 
export default App;
