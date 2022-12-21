import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Step from "../components/Step";
import { questions } from "../data/questions";

const mockNext = jest.fn();
const mockPrev = jest.fn();

const mockItem = questions[1];

describe("Step", () => {
  it("renders the options", () => {
    const { getByText } = render(
      <Step
        item={mockItem}
        next={mockNext}
        prev={mockPrev}
        selectedAnswers={{}}
      />
    );

    const { options } = mockItem;

    options?.forEach((option) => {
      expect(getByText(option)).toBeVisible()
    });
  });

  it("calls the prev function when clicking the respective button is clicked", () => {
    const { getByText } = render(
      <Step
        item={mockItem}
        next={mockNext}
        prev={mockPrev}
        selectedAnswers={{}}
      />
    );

    const prevBtn = getByText("Prev question");

    fireEvent.click(prevBtn);
    expect(mockPrev).toHaveBeenCalled();
  });

  it("calls the next function only after selecting an option and clicking the next button", () => {
    const { getByText } = render(
      <Step
        item={mockItem}
        next={mockNext}
        prev={mockPrev}
        selectedAnswers={{}}
      />
    );

    const { options } = mockItem;
    const nextBtn = getByText("Next question");
    const selectedOption = getByText(options[1]);

    expect(nextBtn).toHaveAttribute("disabled");

    fireEvent.click(selectedOption);
    fireEvent.click(nextBtn);

    expect(mockNext).toHaveBeenCalled();
  });
});
