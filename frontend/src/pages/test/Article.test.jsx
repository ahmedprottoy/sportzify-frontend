import { render, screen } from "@testing-library/react";
import { vi, expect, describe, test } from "vitest";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogData } from "../../hooks/useBlogData.js";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Article from "../Article";
import ErrorNotFound from "../ErrorNotFound";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useParams: vi.fn(() => ({ id: "123" })),
  useNavigate: vi.fn(() => mockNavigate),
}));

vi.mock("../../hooks/useBlogData", async () => ({
  ...(await vi.importActual("../../hooks/useBlogData")),
  useBlogData: vi.fn(),
}));

describe("Article", () => {
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

  test("should render article with correct data", () => {
    useBlogData.mockReturnValue({
      data: {
        title: "Test Article",
        author: "John Doe",
        postedAt: "2023-06-19T12:34:56Z",
        updatedAt: "2023-06-20T09:00:00Z",
        content: "<p>This is a test article.</p>",
      },
      isError: false,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Article />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(useBlogData).toHaveBeenCalledWith("123");
    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("This is a test article.")).toBeInTheDocument();
  });

  test("should render ErrorNotFound component when isError is true", () => {
    useBlogData.mockReturnValue({
      data: null,
      isError: true,
    });

    render(<Article />);

    expect(useBlogData).toHaveBeenCalledWith("123");
    expect(screen.getByTestId("error-not-found-component")).toBeInTheDocument();
  });

  test("should navigate to profile page when author button is clicked", () => {
    useBlogData.mockReturnValue({
      data: {
        title: "Test Article",
        author: "John",
        postedAt: "2023-06-19T12:34:56Z",
        updatedAt: "2023-06-20T09:00:00Z",
        content: "<p>This is a test article.</p>",
      },
      isError: false,
    });

    render(<Article />);

    // Simulate click on author button
    const authorButton = screen.getByText("John");
    authorButton.click();

    // Assertion
    expect(mockNavigate).toHaveBeenCalledWith("/profile/John");
  });

  
});
