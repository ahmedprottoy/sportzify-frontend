import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, expect, describe, test, afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../SignUp";
import { AuthContext } from "../../context/authContext";

const mockMutation = vi.fn();

vi.mock("react-query", async () => ({
  ...(await vi.importActual("react-query")),
  useMutation: vi.fn(() => ({
    mutate: mockMutation,
  })),
}));

vi.mock("../../services/authService", async () => ({
  ...(await vi.importActual("../../services/authService")),
  signInReq: vi.fn(),
}));

describe("SignUp", () => {
  const mockSetUsername = vi.fn();
  const mockSetIsLoggedIn = vi.fn();

  beforeEach(() => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              setUsername: mockSetUsername,
              setIsLoggedIn: mockSetIsLoggedIn,
            }}
          >
            <SignUp />
          </AuthContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render SignUp component with form and cover", () => {
    const signUpForm = screen.getByTestId("sign-up-form");
    expect(signUpForm).toBeInTheDocument();

    const signUpCover = screen.getByTestId("sign-up-cover");
    expect(signUpCover).toBeInTheDocument();
  });

  test("should call handleSubmit on form submission", async () => {
    const usernameInput = screen.getByTestId("username-input");
    const fullnameInput = screen.getByTestId("fullname-input");
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const confirmPasswordInput = screen.getByTestId("confirmPassword-input");
    const submitButton = screen.getByTestId("sign-up-button");

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(fullnameInput, { target: { value: "test" } });
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.change(passwordInput, {
      target: { value: "Password1!" },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password1!" },
    });

    fireEvent.click(submitButton);

   expect(mockMutation).toHaveBeenCalled(
        expect.objectContaining({
            username: "test",
            fullname: "test",
            email: "test@gmail.com",
            password: "Password1!",
            confirmPassword: "Password1!",
        })
    );

     waitFor(() => {
       expect(mockSetUsername).toHaveBeenCalled();
       expect(mockSetIsLoggedIn).toHaveBeenCalled();
       expect(window.location.pathname).toBe("/");
     });
  });
});
