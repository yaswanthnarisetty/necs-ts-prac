import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import InputButton from "./index";
import { mock } from "node:test";
import { vi } from "vitest";

describe("InputButton Component", () => {
  test("renders without errors", () => {
    render(<InputButton todo="" setCurrentAction={undefined} setCurrentId={undefined} currentAction={undefined} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders input field with default value", () => {
    const defaultValue = "Default Value";
    render(<InputButton todo={defaultValue} setTodo={() => { }} handleSubmit={() => { }} />);
    const inputElement = screen.getByDisplayValue(defaultValue);
    expect(inputElement).toBeInTheDocument();
  });

  test("send todo text from prop", () => {
    // const setTodoMock = vi.fn();
    render(<InputButton todo="Hello" handleSubmit={() => { }} />);
    const todoInput = screen.getByRole('textbox');
    expect(todoInput).toHaveValue('Hello');
  });
});
