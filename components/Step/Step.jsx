import React from "react";
import { Button } from "rsuite";


const Step = ({ title, options, next, prev }) => {
  return (
    <div className="space-y-5 flex flex-col justify-center items-center">
      <div className="text-2xl">{title}</div>
      {
        options.map((option) => (
          <div className="rounded-lg border border-blue-700 p-2 hover:border-blue-400 hover:bg-blue-200 w-full">
            {option}
          </div>

        ))
      }
      {Boolean(next) && (
        <Button
          onClick={next}
          appearance="primary"
          color="blue"
          className="bg-blue-600"
        >
          Next question
        </Button>
      )}
      {Boolean(prev) && (
        <Button
          onClick={prev}
          appearance="primary"
          className="bg-gray-400 hover:bg-gray-500"
        >
          Prev question
        </Button>
      )}
    </div>
  );
}

export default Step