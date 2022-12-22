import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { useRouter } from "next/router";
import ResultsPage from "../pages/results/[score]";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

const mockScore = 6;

describe(("ResultsPage"), () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      query: { score: mockScore },
      push: mockPush
    }));
  });

  it("renders the result based on the score", () => {
    const { getByText } = render(<ResultsPage />);
    const result = getByText("You are more of an introvert");
    expect(result).toBeVisible();
  });

  it("redirects to Main page when clicking on retake test button", () => {
    const { getByText } = render(<ResultsPage />);
    const button = getByText("Retake test");

    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
