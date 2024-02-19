import React from "react";
import { render, screen } from "@testing-library/react";
import SideBar from "./index";
import Text from "@/components/Atoms/Text";

test("renders SideBar component with title and children", () => {
  const { getByText, getByTestId } = render(
    <SideBar title="Test Title" width="300px" height="400px" borderRadius={20}>
      <Text color="white" fontSize="16px" fontWeight="bold" mt="60px">
        Hello, World!
      </Text>
    </SideBar>
  );

  const titleElement = getByText("Test Title");
  const childElement = getByText("Hello, World!");

  expect(titleElement).toBeInTheDocument();
  expect(childElement).toBeInTheDocument();
});

test("applies styles correctly", () => {
  render(
    <SideBar title="Test Title" width="300px" height="400px" borderRadius={20} />
  );

  const sideBarElement = screen.getByTestId('SideBarBox');

  expect(sideBarElement).toHaveStyle("width: 300px");
  expect(sideBarElement).toHaveStyle("height: 400px");
  expect(sideBarElement).toHaveStyle("border-radius: 20px");
});
