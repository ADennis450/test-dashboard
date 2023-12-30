import React from "react";
import Feature from "./feature";

const TestResult: React.FC<{ testResults: Array<any> }> = ({ testResults }) => {
  return (
    <div className="feature-block">
      {testResults.map((testResult) => {
        return <Feature key={testResult.id} feature={testResult} />;
      })}
    </div>
  );
};

export default TestResult;
