import { Component } from "react";
import Body from "./Components/Body";
import FruitContext from "./contex/FruitContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./Components/Cart";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        {
          id: 1,
          imageUrl:
            "https://5.imimg.com/data5/NL/FU/MY-48841722/apple-fruit-500x500.jpeg",
          name: "Apple",
          price: 10,
        },
        {
          id: 2,
          imageUrl:
            "https://5.imimg.com/data5/IW/CY/MY-46595757/fresh-orange-281kg-29-500x500.png",
          name: "Orange",
          price: 20,
        },
        {
          id: 3,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
          name: "Banana",
          price: 30,
        },
        {
          id: 4,
          imageUrl:
            "https://www.jiomart.com/images/product/600x600/590000070/pineapple-queen-1-pc-0-20201119.jpg",
          name: "Pineapple",
          price: 40,
        },
        {
          id: 5,
          imageUrl:
            "https://www.theproducemoms.com/wp-content/uploads/2016/02/Ripe-pomegranate-fruit-1-scaled.jpg",
          name: "Pomegranate",
          price: 50,
        },
        {
          id: 6,
          imageUrl:
            "https://solidstarts.com/wp-content/uploads/introducing-avocado-to-babies.jpg",
          name: "Avacado",
          price: 60,
        },
        {
          id: 7,
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/4/43/Pitaya_cross_section_ed2.jpg",
          name: "Dragon",
          price: 70,
        },
        {
          id: 8,
          imageUrl:
            "https://solidstarts.com/wp-content/uploads/Kiwi_edited-scaled.jpg",
          name: "Kiwi",
          price: 80,
        },
        {
          id: 9,
          imageUrl:
            "https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg",
          name: "Watermelon",
          price: 90,
        },
        {
          id: 10,
          imageUrl:
            "https://5.imimg.com/data5/NL/FU/MY-48841722/apple-fruit-500x500.jpeg",
          name: "Apple",
          price: 100,
        },
      ],
      cartItems: [],
    };
    this.updateCartItems = this.updateCartItems.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }
  updateCartItems = (fruit) => {
    console.log("called");
    this.setState({ cartItems: [...this.state.cartItems, fruit] });
  };
  deleteCartItem = (id) => {
    console.log("deleteItem");
    const indexVal = this.state.cartItems.findIndex((item, index) => {
      return item.id === id;
    });
    console.log("aaa", indexVal);
    const cartItemsList = this.state.cartItems;
    cartItemsList.splice(indexVal, 1);
    this.setState({ cartItems: [...cartItemsList] });
  };
  render() {
    return (
      <Router>
        <FruitContext.Provider
          value={{
            fruits: this.state.fruits,
            updateCartItems: this.updateCartItems,
            cartItems: this.state.cartItems,
            deleteCartItem: this.deleteCartItem,
          }}
        >
          <Header />

          <Routes>
            <Route exact path="/" element={<Body />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </FruitContext.Provider>
      </Router>
    );
  }
}

export default App;
