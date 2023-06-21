import { expect, test, beforeEach, vi } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { AuthContext } from "../../context/authContext";
import { MemoryRouter, Route,Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import NotLoggedIn from "../common/NotLoggedIn";

describe("PrivateRoutes", () => {
  let mockAuthContextValue;

  beforeEach(() => {
    mockAuthContextValue = {
      isLoggedIn: true, // Change this value to test different scenarios
    };
  });

  test("should render Outlet if user is logged in", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/private"]}>
        <AuthContext.Provider value={mockAuthContextValue}>
          <PrivateRoutes />
          <Routes>
            <Route path="/private" element={<div>Outlet</div>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(container.textContent).toContain("Outlet");
    expect(container.textContent).not.toContain(
      /You must Login to visit this page !/i
    );
  });
});
