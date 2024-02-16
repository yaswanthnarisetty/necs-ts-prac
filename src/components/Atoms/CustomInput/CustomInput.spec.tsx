import React from "react";
import { describe, test, expect, vi } from "vitest";
import {  render, screen,fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./CustomInput.stories";
const { Primary } = composeStories(stories);

describe("rendering custom input", () => {
  test("renders the input ", () => {
    render(<Primary background="#eee"
    border="1px solid black"
    width="200px"
    hoverBgColor="#ffffff"
    borderRadius="2px"
    padding="10px 20px"
    margin="10px 10px"/>);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test('handles input change', () => {
    const { getByTestId } = render(<Primary background="#eee"
    border="1px solid black"
    width="200px"
    hoverBgColor="#ffffff"
    borderRadius="2px"
    padding="10px 20px"
    margin="10px 10px"/>);
    const customInput = screen.getByRole("textbox");
    
    fireEvent.change(customInput, { target: { value: 'new value' } });

    expect(customInput.value).toBe('new value');
  });

  test('applies styles on hover', () => {
    const { getByTestId } = render(<Primary background="#eee"
    border="1px solid black"
    width="200px"
    hoverBgColor="#ffffff"
    borderRadius="2px"
    padding="10px 20px"
    margin="10px 10px"/>);
    const customInput = screen.getByRole("textbox");
    
    fireEvent.mouseEnter(customInput);

    expect(customInput).toHaveStyle('background-color: #ffffff ');
  });
});
