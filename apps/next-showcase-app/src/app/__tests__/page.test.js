import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

jest.mock("next/navigation");

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: "Welcome to Next js!",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a button", () => {
    const button = screen.getByRole("button", {
      name: "Check the Portfolio page",
    });
    expect(button).toBeInTheDocument();
  });
});
