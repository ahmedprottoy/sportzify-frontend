
import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";
import { expect } from "vitest";

describe("NotFound", () => {
  beforeEach(() => {
    render(<NotFound />);
  });

  test("should render the 'User Not Found' message", () => {
    const userNotFoundMessage = screen.getByText("User Not Found");
    expect(userNotFoundMessage).toBeInTheDocument();
  });

  test("should render the 'no user' image", () => {
    const noUserImage = screen.getByTestId("not-found-user");
    expect(noUserImage).toBeInTheDocument();
    noUserImage.src = "../../assets/404.svg";
    expect(noUserImage).toHaveAttribute("src", "../../assets/404.svg");
    expect(noUserImage).toHaveAttribute("type", "image/svg+xml");
    expect(noUserImage).toHaveClass("h-96 w-96");
    
  });
});
