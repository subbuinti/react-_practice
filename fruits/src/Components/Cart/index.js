import { Component } from "react";
import { Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { BsPatchPlus, BsPatchMinus } from "react-icons/bs";
import FruitContext from "../../contex/FruitContext";

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FruitContext.Consumer>
        {(value) => {
          const { updateCartItems, deleteCartItem } = value;
          console.log("aaa", value);
          const getCartItems = () => {
            let res = [];
            value.cartItems.map((item) => {
              const arr = value.cartItems.filter((i) => i.id === item.id);
              if (!res.map((i) => i.id).includes(item.id)) {
                res.push({ ...item, count: arr.length });
                console.log("ddd", res);
              }
            });
            return res;
          };

          return (
            <>
              {value.cartItems.length === 0 ? (
                <div>
                  <h5 className="cart-heading">
                    Empty Cart please
                    <Link to="/">
                      <Button variant="primary">Add</Button>
                    </Link>
                  </h5>
                </div>
              ) : (
                <>
                  <div>
                    <h1 className="heading">Cart Items</h1>
                  </div>
                  <div>
                    {getCartItems().map((fruit, id) => {
                      return (
                        <div key={id} className="card-container">
                          <h1 className="name">{fruit.name}</h1>
                          <img
                            className="image"
                            src={fruit.imageUrl}
                            alt=""
                          ></img>
                          <h1 className="name">{fruit.price}</h1>
                          <div className="icons">
                            <BsPatchPlus
                              style={{ margin: "25px" }}
                              onClick={(e) => {
                                updateCartItems(fruit);
                              }}
                            />
                            <FormControl
                              placeholder={fruit.count}
                              style={{ width: "50px" }}
                              disabled
                            />

                            <BsPatchMinus
                              style={{ margin: "25px" }}
                              onClick={(e) => {
                                deleteCartItem(fruit.id);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </>
          );
        }}
      </FruitContext.Consumer>
    );
  }
}

export default Cart;
