import { Component, createContext } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import CountContext from "./Context/CountContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  updateCount = (count) => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <CountContext.Provider
        value={{ count: this.state.count, updateCount: this.updateCount }}
      >
        <Header />
        <Body />
      </CountContext.Provider>
    );
  }
}

export default App;
