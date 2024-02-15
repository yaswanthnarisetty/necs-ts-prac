import React from "react";
import { describe, test, expect } from "vitest";
import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import { getServer } from "../utils/test-utils";
import * as stories from "./Profile.stories";
import { debug } from "vitest-preview";

const { MockedSuccess, MockedError } = composeStories(stories);

const server = getServer();
describe("Profile", () => {
  test("renders film cards for each film", async () => {
    server.use(...MockedSuccess.parameters.msw.handlers);
    render(<MockedSuccess />);

    expect(screen.getByText(/fetching star wars data/i)).toBeInTheDocument();
    await screen.findAllByRole("article");

    const articleNodes = screen.getAllByRole("article");
    expect(articleNodes).toHaveLength(3);

    const headingNodes = screen.getAllByRole("heading");
    expect(headingNodes[0]).toHaveTextContent("A New Hope");
    expect(headingNodes[1]).toHaveTextContent("Empire Strikes Back");
    expect(headingNodes[2]).toHaveTextContent("Return of the Jedi");
    debug();
  });

  test("renders error message if it cannot load the films", async () => {
    server.use(...MockedError.parameters.msw.handlers);
    render(<MockedError />);

    const errorMsgNode = await screen.findByText(
      /could not fetch star wars data/i
    );
    expect(errorMsgNode).toBeInTheDocument();
  });
});
