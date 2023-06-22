import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, expect, describe, test, afterEach } from "vitest";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../SignIn";
import { AuthContext } from "../../context/authContext";

vi.mock("../../services/authService", async () => ({
  ...(await vi.importActual("../../services/authService")),
  signInReq: vi.fn(),
}));

describe("SignIn", () => {
  const mockSetUsername = vi.fn();
  const mockSetImageUrl = vi.fn();
  const mockSetIsLoggedIn = vi.fn();

  beforeEach(() => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <AuthContext.Provider
            value={{
              setUsername: mockSetUsername,
              setImageUrl: mockSetImageUrl,
              setIsLoggedIn: mockSetIsLoggedIn,
            }}
          >
            <SignIn />
          </AuthContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("should render SignIn component with form and cover", () => {
    const signInForm = screen.getByTestId("sign-in-form");
    expect(signInForm).toBeInTheDocument();

    const signInCover = screen.getByTestId("sign-in-cover");
    expect(signInCover).toBeInTheDocument();
  });

  test("should call handleSubmit on form submission", async () => {
    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const submitButton = screen.getByTestId("sign-in-button");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.click(submitButton);

    waitFor(() => {
      expect(mockSetUsername).toHaveBeenCalled();
      expect(mockSetImageUrl).toHaveBeenCalled();
      expect(mockSetIsLoggedIn).toHaveBeenCalled();
      expect(window.location.pathname).toBe("/");
    });
  });
});
