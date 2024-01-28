import React from "react";
import Header from "./header";
import { useState } from "react";
import TestResult from "./test-results";

const App = ({ initialData }) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="container">
        <Header message={"Welcome to the Test Dashboard"} />
        <TestResult intialTestResults={initialData.testResults} />
      </div>
    </>
  );
};

export default App;
