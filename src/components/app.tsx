import React from "react";
import Header from "./header";
import { useState } from "react";
import TestResult from "./test-result";

const App = ({ initialData }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <Header message={"Welcome to the Test Dashboard"} />
        <TestResult key={"testResult"} testResults={initialData} />
      </div>
    </>
  );
};

export default App;
