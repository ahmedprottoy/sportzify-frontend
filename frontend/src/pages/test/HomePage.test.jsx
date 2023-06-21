import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi, expect, describe, test } from "vitest";
import { useQuery } from "react-query";
import HomePage from "../HomePage";
import { getBlogsReq } from "../../services/blogService.js";
import Card from "../../components/card/Card";
import ErrorNotFound from "../ErrorNotFound";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { QueryClientProvider, QueryClient } from "react-query";

vi.mock("react-query", async () => ({
  ...(await vi.importActual("react-query")),
  useQuery: vi.fn(),
}));

const mockGoToPage = vi.fn();
const mockGoToPreviousPage = vi.fn();
const mockGoToNextPage = vi.fn();

describe("HomePage", () => {
  beforeEach(() => {
    useQuery.mockReturnValue({
      data: [
        {
          id: 1,
          title: "Blog 1",
          content: "Content 1",
          author: "Author 1",
          imageUrl: "http//:image.com",
          postedAt: "2023-06-19T12:34:56Z",
          updatedAt: "2023-06-23T12:34:56Z",
        },
        {
          id: 2,
          title: "Blog 2",
          author: "Author 2",
          content: "Content 2",
          imageUrl: "http//:image.com",
          postedAt: "2023-06-20T09:00:00Z",
          updatedAt: "2023-06-25T09:00:00Z",
        },
        
      ],
      isError: false,
    });
  });

  test("should render blogs with pagination", async () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isLoggedIn: true }}>
          <HomePage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

   
    const blogCards = screen.getAllByTestId("blog-card");
    expect(blogCards.length).toBe(2); 

   
    const previousButton = screen.getByText("Previous");
    const nextButton = screen.getByText("Next");
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    
    fireEvent.click(nextButton);
  });

  test("should disable previous button on the first page", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ isLoggedIn: true }}>
          <HomePage />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const previousButton = screen.getByText("Previous");
    expect(previousButton).toBeDisabled();
    fireEvent.click(previousButton);
    expect(mockGoToPreviousPage).not.toHaveBeenCalled();
  });


});
