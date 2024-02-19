import { render, renderHook, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import CheckBoxReplica from ".";

describe("Testing Custom CheckBox", () => {
  test("checking text in the field", () => {
    const { getByText } = render(<CheckBoxReplica label="Testing" />);
    const textElement = getByText("Testing");
    expect(textElement).toBeTruthy();
  });

  test("Check Todo is rendereding or not with filled star", () => {
    render(<CheckBoxReplica label="Testing" stared={true} />);
    expect(screen.getByTestId("filledStar")).toBeInTheDocument();
  })

  test("Check completed functionality", () => {
    render(<CheckBoxReplica label="Testing" completed={true} />);
    expect(screen.getByTestId("completed")).toBeInTheDocument();
  })
  test("Check in complete functionality", () => {
    render(<CheckBoxReplica label="Testing" completed={false} />);
    expect(screen.getByTestId("Incompleted")).toBeInTheDocument();
  })

  test("Check on click state change", () => {
    render(<CheckBoxReplica label="Testing" completed={false} />);
    expect(screen.getByTestId("Incompleted")).toBeInTheDocument();
  })
});