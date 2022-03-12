import { Component } from "react";
import "./index.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import CountContext from "../../Context/CountContext";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <CountContext.Consumer>
        {(value) => {
          const { count } = value;
          return (
            <div className="header">
              <div className="nav-header">
                <nav>Shopping Cart</nav>
              </div>
              <div>
                <BsFillCartPlusFill className="cart-icon" />
                <span className="count">{count}</span>
              </div>
            </div>
          );
        }}
      </CountContext.Consumer>
    );
  }
}

export default Header;
