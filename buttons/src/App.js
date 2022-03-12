import {Component } from 'react'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
          color: "",
    }
    this.setSelectColor = this.setSelectColor.bind(this)
    
  }

  setSelectColor(color){
      this.setState({color: color});
      
  }

  render(){
    return(
      <div>
        { this.state.color && <h1 className="heading">color:{this.state.color}</h1>}
        <div className="container">
          <button onClick={(e)=>this.setSelectColor("blue")} className="blue-btn button" >Blue</button>
          <button onClick={(e)=>this.setSelectColor("red")} className="red-btn button">Red</button>
          <button onClick={(e)=>this.setSelectColor("green")} className="green-btn button">Green</button>
          <button onClick={(e)=>this.setSelectColor("black")} className="black-btn button">Black</button>
        </div>
      </div>
    )
  }

}


export default App;
