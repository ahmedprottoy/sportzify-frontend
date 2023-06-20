import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { MemoryRouter as Router } from "react-router-dom";
import SignUpForm from "./SignUpForm";

describe("SignInForm", () => {
  test("renders sign-up form correctly", () => {
    render(
      <Router>
        <SignUpForm
          userData={{
            username: "",
            fullname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          handleSubmit={() => {}}
          handleChange={() => {}}
          isloading={false}
          isError={false}
          error={null}
        />
      </Router>
    );

    const usernameInput = screen.getByTestId("username-input");
    const fullnameInput = screen.getByTestId("fullname-input");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const confirmPasswordInput = screen.getByTestId("confirmPassword-input");
    const signUpButton = screen.getByTestId("sign-up-button");


    const linkElement = screen.getByRole("link", { name: /Log in/i });

    expect(usernameInput).toBeInTheDocument();
    expect(fullnameInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });

  //   test("triggers handleSubmit and handleChange correctly", () => {
  //     const handleSubmit = vi.fn();
  //     const handleChange = vi.fn();

  //     render(
  //       <Router>
  //         <SignInForm
  //           userData={{ email: "", password: "" }}
  //           handleSubmit={handleSubmit}
  //           handleChange={handleChange}
  //           isloading={false}
  //           isError={false}
  //           error={null}
  //         />
  //       </Router>
  //     );

  //     const emailInput = screen.getByTestId("email-input");
  //     const passwordInput = screen.getByTestId("password-input");
  //     const signInButton = screen.getByTestId("sign-in-button");

  //     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  //     fireEvent.change(passwordInput, { target: { value: "password123" } });
  //     fireEvent.click(signInButton);

  //     expect(handleChange).toHaveBeenCalledTimes(2);
  //     expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  //     expect(handleSubmit).toHaveBeenCalledTimes(1);
  //     expect(handleSubmit).toHaveBeenCalledWith(expect.any(Object));
  //   });

  //   test("renders error message when isError is true", () => {
  //     const error = {
  //       response: {
  //         data: {
  //           message: "Invalid credentials",
  //         },
  //       },
  //     };

  //     render(
  //       <Router>
  //         <SignInForm
  //           userData={{ email: "", password: "" }}
  //           handleSubmit={() => {}}
  //           handleChange={() => {}}
  //           isloading={false}
  //           isError={true}
  //           error={error}
  //         />
  //       </Router>
  //     );

  //     const errorMessage = screen.getByText("Invalid credentials");
  //     expect(errorMessage).toBeInTheDocument();
  //   });
});
