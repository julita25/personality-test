import React, { useEffect, useState } from "react";
import { Button } from "rsuite";


const Step = ({ item, next, prev, selectedAnswers }) => {
  const { title, options, id } = item;
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected()
  }, [item])

  const handleNext = () => {
    console.log(selectedAnswers);
    const updatedAnswer = { ...selectedAnswers };
    updatedAnswer[id] = selected

    next(updatedAnswer)
  }

  return (
    <div className="space-y-5 flex flex-col justify-center items-center">
      <div className="text-2xl">{title}</div>
      {
        options?.map((option, index) => (
          <div
            onClick={() => setSelected(index + 1)}
            className={`rounded-lg border border-blue-700 p-2 hover:border-blue-400 hover:bg-blue-200 w-full ${index === selected && "bg-blue-200"}`}>
            {option}
          </div>

        ))
      }
      {Boolean(next) && (
        <Button
          onClick={handleNext}
          appearance="primary"
          color="blue"
          className="bg-blue-600"
        >
          {id === 4 ? "Finish" : "Next question"}
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