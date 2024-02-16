import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import  Text  from "./index";

describe("Text Component", () => {
  test("renders with default text content", () => {
    render(<Text>Hello, World!</Text>);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  test("renders with custom text content", () => {
    const customText = "Custom Text Content";
    render(<Text>{customText}</Text>);
    expect(screen.getByText(customText)).toBeInTheDocument();
  });

  test("applies default styles if no props are provided", () => {
    render(<Text>Hello, World!</Text>);
    const textElement = screen.getByText("Hello, World!");
    expect(textElement).toHaveStyle("color: black");
    expect(textElement).toHaveStyle("font-size: 10px");
  });

  test("applies custom styles when props are provided", () => {
    render(
      <Text
        color="red"
        fontSize="20px"
        margin="10px"
        padding="5px"
        fontFamily="Arial, sans-serif"
      >
        Custom Styles Text
      </Text>
    );

    const textElement = screen.getByText("Custom Styles Text");

    
    expect(textElement).toHaveStyle("color: red");
    expect(textElement).toHaveStyle("font-size: 20px");
    expect(textElement).toHaveStyle("margin: 10px");
    expect(textElement).toHaveStyle("padding: 5px");
    expect(textElement).toHaveStyle("font-family: 'Arial, sans-serif'");
  });

  // test("handles click event if onClick prop is provided", () => {
  //   const onClickMock = jest.fn();
  //   render(<Text onClick={onClickMock}>Clickable Text</Text>);

  //   const textElement = screen.getByText("Clickable Text");
  //   fireEvent.click(textElement);

  //   expect(onClickMock).toHaveBeenCalled();
  // });
});
