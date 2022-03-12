import React from "react";

const CountContext = React.createContext({
  count: 0,
  updateCount: () => {},
});

export default CountContext;
