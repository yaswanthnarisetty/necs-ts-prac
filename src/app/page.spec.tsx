import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Home from "./page";
import { vi } from "vitest";

describe("Home Component", () => {
    
  test("renders without errors", () => {
    render(<Home />);
    expect(screen.getByText(/Filters/i)).toBeInTheDocument();
    expect(screen.getByText(/Tasks/i)).toBeInTheDocument();
  });

  test("renders checkboxes for side bar items", () => {
    render(<Home />);
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Starred/i)).toBeInTheDocument();
  });

  test("renders input button for adding todos", () => {
    render(<Home />);
    expect(screen.getByText(/Add Todo/i)).toBeInTheDocument();
  });

  test("empty todo submission", async () => {
    render(<Home />);
    const submitButton = screen.getByText("Add Todo");
    const alertSpy = vi.spyOn(window, "alert");

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(alertSpy).toHaveBeenCalledWith("Add some Task!!");
  });

});
