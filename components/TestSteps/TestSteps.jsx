import React from "react";

const TestSteps = ({ steps, currentIndex }) => {
  console.log(currentIndex);
  return (
    <div className="h-full flex flex-col justify-between">
      {
        steps[currentIndex]
      }
    </div>
  );
}

export default TestSteps;
