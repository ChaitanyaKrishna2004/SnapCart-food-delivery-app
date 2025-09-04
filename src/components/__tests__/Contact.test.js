import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact component", () => {
    render(<Contact />);

    const inputname = screen.getByPlaceholderText("name");

    expect(inputname).toBeInTheDocument();
  });

  it("should load 2 input name inside contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });

  it("should load 2 input name inside contact component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).not.toBe(3);
  });
});
