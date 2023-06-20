import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import SignInForm from "./SignInForm";

describe("SignInForm", () => {
  test("renders sign-in form correctly", () => {
    render(
      <Router>
        <SignInForm
          userData={{ email: "", password: "" }}
          handleSubmit={() => {}}
          handleChange={() => {}}
          isloading={false}
          isError={false}
          error={null}
        />
      </Router>
    );

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signInButton = screen.getByTestId("sign-in-button");
    const linkElement = screen.getByRole('link', { name: /Sign Up/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  test("triggers handleSubmit and handleChange correctly", () => {
    const handleSubmit = vi.fn();
    const handleChange = vi.fn();

    render(
      <Router>
        <SignInForm
          userData={{ email: "", password: "" }}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          isloading={false}
          isError={false}
          error={null}
        />
      </Router>
    );

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const signInButton = screen.getByTestId("sign-in-button");
  

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(signInButton);

    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(expect.any(Object));
  });

  test("renders error message when isError is true", () => {
    const error = {
      response: {
        data: {
          message: "Invalid credentials",
        },
      },
    };

    render(
      <Router>
        <SignInForm
          userData={{ email: "", password: "" }}
          handleSubmit={() => {}}
          handleChange={() => {}}
          isloading={false}
          isError={true}
          error={error}
        />
      </Router>
    );

    const errorMessage = screen.getByText("Invalid credentials");
    expect(errorMessage).toBeInTheDocument();
  });
});
