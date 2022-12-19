import React, { useState } from 'react'
import Step from '../Step/Step'
import TestSteps from '../TestSteps/TestSteps'
import testQuestions from "../../data/questions.json"

const PersonalityModule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => setCurrentIndex(currentIndex + 1);
  const prevStep = () => setCurrentIndex(currentIndex - 1);

  const getSteps = () => (
    testQuestions.map((it, index) => (
      <Step
        title={it.question}
        options={it.options}
        next={index === testQuestions.length - 1 ? null : nextStep}
        prev={index === 0 ? null : prevStep}
      />
    )
    )
  )

  return (
    <>
      <TestSteps steps={getSteps()} currentIndex={currentIndex} />
    </>
  )
}

export default PersonalityModule