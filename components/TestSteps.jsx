/* eslint-disable react/no-array-index-key */
import React from "react";
import { instanceOf, number } from "prop-types";

const TestSteps = ({ steps, currentIndex }) => (
  <div className="h-full flex flex-col w-full">
    {
      steps[currentIndex]
    }
    <div className="flex space-x-5 justify-center my-8">
      {
        steps.map((step, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-gray-500" : "bg-gray-300"}`}
          />
        ))
      }
    </div>
  </div>
);

export default TestSteps;

TestSteps.propTypes = {
  steps: instanceOf(Object).isRequired,
  currentIndex: number.isRequired
};
