import React from "react";

const Scenario: React.FC<{ scenario: any }> = ({ scenario }) => {
  return (
    <div className="feature-block">
      <div className="feature">{scenario.name}</div>
      <div className="scenario">
        <div>
          {scenario.steps.map((step) => {
            {
              return <div className={step.result.status}>{step.name}</div>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Scenario;
