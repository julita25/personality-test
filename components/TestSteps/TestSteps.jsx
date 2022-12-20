import React from "react";
import { instanceOf, number } from "prop-types";

const TestSteps = ({ steps, currentIndex }) => (
  <div className="h-full flex flex-col justify-between w-full">
    {
      steps[currentIndex]
    }
    <div className="flex space-x-5 justify-center my-8">
      {
        steps.map((step, index) => (
          <div
            key={step.type?.name}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-gray-500" : "bg-gray-300"}`}
          />
        ))
      }
    </div>
  </div>
);

export default TestSteps;

TestSteps.propTypes = {
  steps: instanceOf(Array).isRequired,
  currentIndex: number.isRequired
};
