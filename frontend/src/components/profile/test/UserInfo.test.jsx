import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import UserInfo from "../UserInfo";

describe("UserInfo", () => {
  test("renders user information correctly", () => {
    const username = "johndoe";
    const fullname = "John Doe";
    const email = "johndoe@example.com";

    render(<UserInfo username={username} fullname={fullname} email={email} />);

    const fullNameElement = screen.getByText(fullname);
    const usernameElement = screen.getByText(username);
    const emailElement = screen.getByText(email);

    expect(fullNameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();

    const authorIcon = screen.getByTestId("author-icon");
    const emailIcon = screen.getByTestId("email-icon");

    expect(authorIcon).toBeInTheDocument();
    expect(authorIcon).toHaveAttribute("src", "/src/assets/writer.png");
    expect(emailIcon).toBeInTheDocument();
    expect(emailIcon).toHaveAttribute("src", "/src/assets/email.png");
  });
});
