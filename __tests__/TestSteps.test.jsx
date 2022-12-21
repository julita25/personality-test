import React from "react";
import { render } from "@testing-library/react";
import TestSteps from "../components/TestSteps";
import Step from "../components/Step";
import { questions } from "../data/questions";

const mockNext = jest.fn();
const mockPrev = jest.fn();

const mockCurrentIndex = 1;

const mockSteps = [
  <Step
    item={questions[1]}
    next={mockNext}
    prev={mockPrev}
    selectedAnswers={{}}
  />,
  <Step
    item={questions[2]}
    next={mockNext}
    prev={mockPrev}
    selectedAnswers={{}}
  />
];

describe("TestSteps", () => {
  it("renders the right step, depending on the current index given", () => {
    const { getByText } = render(<TestSteps steps={mockSteps} currentIndex={mockCurrentIndex} />);
    const { options } = questions[2];

    options?.forEach((option) => {
      expect(getByText(option)).toBeVisible();
    });
  });
});
