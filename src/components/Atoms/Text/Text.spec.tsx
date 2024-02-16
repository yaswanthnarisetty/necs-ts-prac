import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Text.stories";
const { PrimaryText } = composeStories(stories);

describe("Text Component", () => {
  test("renders with default text content", () => {
    render(<PrimaryText>Hello, World!</PrimaryText>);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  test("renders with custom text content", () => {
    const customText = "Custom Text Content";
    render(<PrimaryText>{customText}</PrimaryText>);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  test("applies default styles if no props are provided", () => {
    render(<PrimaryText>Hello, World!</PrimaryText>);
    const textElement = screen.getByText("Hello, World!");
    expect(textElement).toHaveStyle("color: black");
    expect(textElement).toHaveStyle("font-size: 10px");
  });

  test("applies custom styles when props are provided", () => {
    render(
      <PrimaryText
        color="red"
        fontSize="20px"
        margin="10px"
        padding="5px"
        fontFamily="Arial, sans-serif"
      >
        Custom Styles Text
      </PrimaryText>
    );

    const textElement = screen.getByText("Custom Styles Text");
    expect(textElement).toHaveStyle("color: red");
    expect(textElement).toHaveStyle("font-size: 20px");
    expect(textElement).toHaveStyle("margin: 10px");
    expect(textElement).toHaveStyle("padding: 5px");
    expect(textElement).toHaveStyle("font-family: 'Arial, sans-serif'");
  
  });

  test("handles click event if onClick prop is provided", () => {
    const onClickMock = jest.fn();
    render(<PrimaryText onClick={onClickMock}>Clickable Text</PrimaryText>);

    const textElement = screen.getByText("Clickable Text");
    fireEvent.click(textElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
