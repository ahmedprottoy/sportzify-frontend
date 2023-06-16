import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavButtons from "../NavButtons";

test("renders the buttons in Navbar", () => {
  render(
    <MemoryRouter>
      <NavButtons />
    </MemoryRouter>
  );
  const loginButton = screen.getByText("Log In");
  const signupButton = screen.getByText("Sign Up");

    expect(loginButton).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    
});
