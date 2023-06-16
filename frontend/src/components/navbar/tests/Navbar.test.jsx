import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { QueryClientProvider, QueryClient } from "react-query";
import Navbar from "../Navbar";

describe("Navbar", () => {
  let queryClient;

  beforeEach(() => {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    });
  });

  test("renders the logo and brand name", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isLoggedIn: false }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoElement = document.querySelector("img");
    const brandNameElement = document.querySelector(".font-kalam");

    expect(logoElement).not.toBeNull();
    expect(brandNameElement).not.toBeNull();
    expect(brandNameElement.textContent).toBe("Sportzify");
  });

  test("renders the search box and user component when logged in", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AuthContext.Provider value={{ isLoggedIn: true }}>
            <Navbar />
          </AuthContext.Provider>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const searchBoxElement = document.querySelector(".end-1");
    const userElement = document.querySelector(".shrink-0");

    expect(searchBoxElement).not.toBeNull();
    expect(userElement).not.toBeNull();
  });

  test("renders the buttons when not logged in", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isLoggedIn: false }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const buttonsElement = document.querySelector(".inline-flex");

    expect(buttonsElement).not.toBeNull();
  });
});
