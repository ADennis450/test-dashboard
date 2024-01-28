import React from "react";
import Scenario from "./scenario";

const Feature: React.FC<{ feature: any }> = ({ feature }) => {
  let i = 0;
  return (
    <div className="test-list">
      <div id={feature.name} className="feature">
        {feature.name}
      </div>
      {feature.elements.map((scenarioResult) => {
        return <Scenario key={scenarioResult.id} scenario={scenarioResult} />;
      })}
    </div>
  );
};

export default Feature;
