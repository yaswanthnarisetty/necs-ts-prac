import React from "react";
import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";

describe("Box", () => {
  test("to check will be render", () => {
    render(<Box/>);
    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

});
