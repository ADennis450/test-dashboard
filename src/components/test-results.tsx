import React from "react";
import { useEffect, useState } from "react";
import Feature from "./feature";
import { API_SERVER_URL } from "../public-config";
import axios from "axios";
import { fetchTestResults } from "../api-client";

const TestResult = ({ intialTestResults }) => {
  const [testResults, setTestResults] = useState(intialTestResults);

  useEffect(() => {
    // fetchTestResults().then((testResults) => {
    //   setTestResults(testResults);
    // });
  }, []);
  return (
    <div className="feature-block">
      {testResults.map((testResults) => {
        return <Feature key={testResults.id} feature={testResults} />;
      })}
    </div>
  );
};

export default TestResult;
