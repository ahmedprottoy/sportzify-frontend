import { expect, test,vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

test("should render button with text", () => {
  const text = "Click Me";
  const { getByText } = render(<Button text={text} />);

  const buttonElement = getByText(text);
  expect(buttonElement).toBeInTheDocument();
});

test("should call onClick when button is clicked", () => {
  const onClick = vi.fn();
  const text = "Click Me";
  const { getByText } = render(<Button text={text} onClick={onClick} />);

  const buttonElement = getByText(text);
  fireEvent.click(buttonElement);

  expect(onClick).toHaveBeenCalledTimes(1);
});
