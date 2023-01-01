import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader, Message } from "rsuite";
import Step from "./Step";
import TestSteps from "./TestSteps";

const PersonalityTest = () => {
  const router = useRouter();
  const [testQuestions, setTestQuestions] = useState([]);
  const [error, setError] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const fetchTestQuestions = async () => {
    const res = await fetch("/api/questions");
    if (res?.ok) {
      const response = await res.json();
      setTestQuestions(response);
      setError();
    } else {
      setError(new Error("Not possible to load test, try again"));
    }
  };

  useEffect(() => {
    fetchTestQuestions();
  }, []);

  const onNextStep = (answer) => {
    setCurrentIndex(currentIndex + 1);
    setAnswers(answer);
  };

  const onComplete = (answer) => {
    setAnswers(answer);
    const score = Object.values(answer).reduce((prev, current) => prev + current, 0);
    router.push(`/results/${score}`);
  };

  const onPrevStep = () => setCurrentIndex(currentIndex - 1);

  const steps = testQuestions.map((it, index) => (
    <Step
      item={it}
      next={index === testQuestions.length - 1 ? onComplete : onNextStep}
      prev={index !== 0 && onPrevStep}
      selectedAnswers={answers}
    />
  ));

  if (!testQuestions.length) return <Loader size="lg" center />;

  return (
    <>
      {Boolean(error) && (
        <Message showIcon type="error" header={error.message} className="w-full" />
      )}
      <TestSteps steps={steps} currentIndex={currentIndex} />
    </>
  );
};

export default PersonalityTest;
