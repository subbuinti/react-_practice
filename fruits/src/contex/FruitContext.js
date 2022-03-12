import React from "react";

const FruitContext = React.createContext({
  fruits: [],
  cartItems: 0,
  totalPrice: 0,
});

export default FruitContext;
