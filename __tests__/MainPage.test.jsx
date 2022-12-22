import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MainPage from "../pages/index";

const mockPersonalityTest = jest.fn();
jest.mock("../components/PersonalityTest", () => (props) => {
  mockPersonalityTest(props);
  return <mock-PersonalityTest />
});

describe("MainPage", () => {
  it("renders the personality test component when the user click on start test", () => {
    const { getByText } = render(<MainPage />);

    const startBtn = getByText("Start test");
    expect(startBtn).toBeVisible();

    fireEvent.click(startBtn);
    expect(mockPersonalityTest).toHaveBeenCalled();
  });
});
