import React from "react";
import Header from "./header";
import { useState } from "react";

const App = ({ initialData }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <Header message={"Welcome to the Test Dashboard"} />
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      </div>
    </>
  );
};

export default App;
