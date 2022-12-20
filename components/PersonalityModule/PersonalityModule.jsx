import React, { useState } from "react";
import Step from "../Step/Step";
import TestSteps from "../TestSteps/TestSteps";
import testQuestions from "../../data/questions.json";
import { useRouter } from "next/router";

const PersonalityModule = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const onNextStep = (answer) => {
    setCurrentIndex(currentIndex + 1);
    setAnswers(answer);
  };

  const onComplete = (answer) => {
    setAnswers(answer);
    const score = Object.values(answers).reduce((prev, current) => prev + current, 0);
    console.log(score);
    router.push(`/results/${score}`);
  };

  const onPrevStep = () => setCurrentIndex(currentIndex - 1);

  const getSteps = () => (
    testQuestions.map((it, index) => (
      <Step
        item={it}
        next={index === testQuestions.length - 1 ? onComplete : onNextStep}
        prev={index !== 0 && onPrevStep}
        selectedAnswers={answers}
      />
    ))
  );

  return (
    <>
      <TestSteps steps={getSteps()} currentIndex={currentIndex} />
    </>
  )
};

export default PersonalityModule;
