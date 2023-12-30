import React from "react";
import Scenario from "./scenario";

const Feature: React.FC<{ feature: any }> = ({ feature }) => {
  let i = 0;
  return (
    <div className="test-list">
      <div className="feature">{feature.name}</div>
      {feature.elements.map((scenarioResult) => {
        i++;
        return (
          <Scenario key={scenarioResult.id + i} scenario={scenarioResult} />
        );
      })}
    </div>
  );
};

export default Feature;
