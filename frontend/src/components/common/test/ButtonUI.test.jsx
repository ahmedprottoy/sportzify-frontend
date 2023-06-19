import { expect, test,vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ButtonUI from "../ButtonUI";

describe("ButtonUI component", () => {
  test("should render button with text", () => {
    const text = "Click Me";
    const { getByText } = render(<ButtonUI text={text} />);

    const buttonElement = getByText(text);
    expect(buttonElement).toBeInTheDocument();
  });
    test("should call onClick when button is clicked", () => {
      const onClick = vi.fn();
      const text = "Click Me";
      const { getByText } = render(<ButtonUI text={text} onClick={onClick} />);

      const buttonElement = getByText(text);
      fireEvent.click(buttonElement);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("should render button with icon", () => {
      const text = "Click Me";
      const iconSrc = "path/to/icon.png";
      const { getByAltText } = render(<ButtonUI text={text} Icon={iconSrc} />);

      const iconElement = getByAltText("");
      expect(iconElement).toBeInTheDocument();
    });
});
