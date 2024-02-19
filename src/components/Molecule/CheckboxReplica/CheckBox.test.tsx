import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CheckBoxReplica from ".";

describe("Testing Custom CheckBox", () => {
  test("checking text in the field", () => {
    const { getByText } = render(<CheckBoxReplica label="Testing" />);
    const textElement = getByText("Testing");
    expect(textElement).toBeTruthy();
  });
});