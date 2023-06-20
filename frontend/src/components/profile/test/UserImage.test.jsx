import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import UserImage from "../UserImage";

describe("UserImage", () => {
  test("renders user image when imageUrl is provided", () => {
    const imageUrl = "https://example.com/user-image.jpg";

    render(<UserImage imageUrl={imageUrl} />);

    const userImage = screen.getByTestId("user-image");
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute("src", imageUrl);
    expect(userImage).toHaveAttribute("alt", "cf");
  });

  test("renders no-image placeholder when imageUrl is not provided", () => {
    render(<UserImage />);

    const noUserImage = screen.getByTestId("no-user-image");
    expect(noUserImage).toBeInTheDocument();
    expect(noUserImage).toHaveAttribute("src", "/src/assets/NoImage.jpg");
    expect(noUserImage).toHaveAttribute("alt", "noImage");
  });
});
