import { render, screen, waitFor } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./context/authContext";
import App from "./App";

describe("App", () => {
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

  test("renders the sign-up page", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MemoryRouter initialEntries={["/sign-up"]}>
            <App />
          </MemoryRouter>
        </AuthProvider>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("signup-page")).toBeInTheDocument();
    });
  });

  test("renders the home page", async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MemoryRouter initialEntries={["/"]}>
              <App />
            </MemoryRouter>
          </AuthProvider>
        </QueryClientProvider>
      );

      
      await waitFor(() => {
        expect(screen.getByTestId("homepage")).toBeInTheDocument();
      });
    });
});
