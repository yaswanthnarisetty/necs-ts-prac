import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputButton from "./index";

describe("InputButton Component", () => {
  test("renders without errors", () => {
    render(<InputButton todo="" setTodo={() => { } } handleSubmit={() => { } } setCurrentAction={undefined} setCurrentId={undefined} currentAction={undefined} />);
    expect(screen.getByTestId("input-button-form")).toBeInTheDocument();
  });

  test("renders input field with default value", () => {
    const defaultValue = "Default Value";
    render(<InputButton todo={defaultValue} setTodo={() => {}} handleSubmit={() => {}} />);
    const inputElement = screen.getByDisplayValue(defaultValue);
    expect(inputElement).toBeInTheDocument();
  });

  test("calls setTodo function on input change", () => {
    const setTodoMock = jest.fn();
    render(<InputButton todo="" setTodo={setTodoMock} handleSubmit={() => {}} />);

    const inputValue = "New Todo";
    const inputElement = screen.getByTestId("custom-input");
    fireEvent.change(inputElement, { target: { value: inputValue } });

    expect(setTodoMock).toHaveBeenCalledWith(inputValue);
  });

  test("calls handleSubmit function on form submission", () => {
    const handleSubmitMock = jest.fn();
    render(<InputButton todo="" setTodo={() => {}} handleSubmit={handleSubmitMock} />);

    const formElement = screen.getByTestId("input-button-form");
    fireEvent.submit(formElement);

    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
