// IMPORTS ==================================================================//
import React from "react";

import Header from "./Header";

// DEFINE COMPONENT =========================================================//
const App = props => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

// EXPORT ===================================================================//
export default App;
