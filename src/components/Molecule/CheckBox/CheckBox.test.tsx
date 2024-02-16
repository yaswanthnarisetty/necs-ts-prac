import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CheckBoxInput from ".";

describe("Testing Checkbox",()=>{
    test("Testing CheckBox", () => {
        // Render the CheckBoxInput component
        const { getByLabelText } = render(
          <CheckBoxInput name="testing" possible={true} label="Testing" />
        );  
        const textElement = screen.getByText("Testing");
        expect(textElement).toBeInTheDocument();   
      });
      test("Testing Enabled CheckBox", () => {
        // Render the CheckBoxInput component
        const { getByLabelText } = render(
          <CheckBoxInput name="testing" possible={true} label="Testing" />
        );  
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeEnabled();
      });
      test("Testing Disabled CheckBox", () => {
        // Render the CheckBoxInput component
        const { getByLabelText } = render(
          <CheckBoxInput name="testing" possible={false} label="Testing" />
        );  
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeDisabled();

});

test("Clicking CheckBox toggles its false state", () => {
    const { getByLabelText } = render(
      <CheckBoxInput name="testing" possible={true} label="Testing" />
    );
    const checkbox = getByLabelText("Testing") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  test("Clicking CheckBox toggles its true state", () => {
    const { getByLabelText } = render(
      <CheckBoxInput name="testing" possible={true} label="Testing" />
    );
    const checkbox = getByLabelText("Testing") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
  });