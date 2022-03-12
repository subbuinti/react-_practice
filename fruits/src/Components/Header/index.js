import { Component } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import FruitContext from "../../contex/FruitContext";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <FruitContext.Consumer>
        {(value) => {
          const caluclatePrice = () => {
            return value.cartItems
              .map((i) => i.price)
              .reduce((acc, val) => acc + val, 0);
          };

          return (
            <Navbar className="header" sticky="top">
              <nav className="nav-header">
                <Link to="/">
                  <h1>Fruits</h1>
                </Link>

                <p>Total Price: {caluclatePrice()}</p>
                <div>
                  <Link to="/cart">
                    <BsFillCartPlusFill className="cart-icon" />
                    {value.cartItems.length}
                  </Link>
                </div>
              </nav>
            </Navbar>
          );
        }}
      </FruitContext.Consumer>
    );
  }
}

export default Header;
