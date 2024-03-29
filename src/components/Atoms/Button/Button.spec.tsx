import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Button from ".";
import { mock } from "node:test";

describe('Button', () => {

    test("should render a button", () => {
        render(<Button size="sm" />);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    });

    test("Able to pass button own props", () => {
        render(<Button size="sm" disabled />);
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    })  

    test("Check if button on click is working", () => {
        const handleClick = mock.fn();
        render(<Button size="sm" onClick={() => handleClick()}/>);
        const button = screen.getByRole('button');
        fireEvent.click(button)
    })

    test("Check if button is getting size applied", () => {
        render(<Button size="lg" >Click</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveStyle('font-size: 20px');
    })

    test("Check if button taking text children", () => {
        render(<Button size="lg" >Click Me</Button>);
        const button = screen.getByRole('button');
        expect(button).toHaveTextContent("Click Me");
    })
})