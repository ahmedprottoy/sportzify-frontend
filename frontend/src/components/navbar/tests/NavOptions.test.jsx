import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import NavOptions from "../NavOptions";

test("renders navigation options correctly", () => {
  const username = "Vinicius Jr";

  render(
    <MemoryRouter>
      <AuthContext.Provider value={{ username }}>
        <NavOptions />
      </AuthContext.Provider>
    </MemoryRouter>
  );

  const homeLink = screen.getByText("Home");
  const createLink = screen.getByText("Create");
  const profileLink = screen.getByText("Profile");

  expect(homeLink).toBeInTheDocument();
  expect(createLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();

  expect(homeLink).toHaveAttribute("href", "/");
  expect(createLink).toHaveAttribute("href", "/create");
  expect(profileLink).toHaveAttribute("href", `/profile/${username}`);
});
