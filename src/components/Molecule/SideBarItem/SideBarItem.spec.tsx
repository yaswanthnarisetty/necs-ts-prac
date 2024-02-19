import { fireEvent, render, screen } from "@testing-library/react";
import { describe, vi } from "vitest";
import SideBarItem from ".";
import { AArrowUp } from "lucide-react";
import React from "react";

describe("SideBar Item Test ", () => {
    const setState = vi.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

    afterEach(() => {
      vi.clearAllMocks();
    });
    test("Should render Sidebar Item", () => {
        render(<SideBarItem active={""} itemName={"Test Tab"} itemIcon={<AArrowUp />} setSelectedpage={vi.fn()} />)
        expect(screen.getByText("Test Tab")).toBeInTheDocument();
    })

    test("On clicking tab set Usestate should be called", () => {
        vi.spyOn(React, 'useState').mockImplementation(useStateMock('jnd'));
        render(<SideBarItem active={"unknowntab"} itemName={"Test"} itemIcon={<AArrowUp />} setSelectedpage={setState} />)
        const tab = screen.getByTestId("tabBox");
        fireEvent.click(tab);   
        expect(setState).toHaveBeenCalledTimes(1);
    })

    test("Check active css is getting applied", () => {
        render(<SideBarItem active={"TEST TAB"} itemName={"Test Tab"} itemIcon={<AArrowUp />} setSelectedpage={setState} />)
        const tab = screen.getByTestId("tabBox");
        expect(tab).toHaveStyle("background-color: lightgray;")
    })
})