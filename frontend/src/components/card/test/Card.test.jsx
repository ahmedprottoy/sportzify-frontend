import { fireEvent, render, screen } from "@testing-library/react";
import { test, describe, vi, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { QueryClientProvider, QueryClient } from "react-query";
import Card from "../Card";

describe("Card", () => {
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

    const blog = {
      id: 1,
      author: "test",
      title: "test blog title",
      content: "test blog content",
      postedAt: "2023-05-30",
      imageUrl: "https://example.com/image.jpg",
    };

  test("renders card with blog data", () => {
    render(
        <QueryClientProvider client={queryClient}>
        <MemoryRouter>
            <AuthContext.Provider value={{ username: 'test' }}>
            <Card blog={blog} />
            </AuthContext.Provider>
        </MemoryRouter>
        </QueryClientProvider>
    )

    expect(screen.getByText(blog.author)).toBeInTheDocument()
    expect(screen.getByText(blog.title)).toBeInTheDocument()
    expect(screen.getByText(blog.content)).toBeInTheDocument()
    expect(screen.getByTestId('blog-image')).toBeInTheDocument();
  });

  test('doesn\'t render option button when logged in user is not the author', () => {

    render(
        <QueryClientProvider client={queryClient}>
        <MemoryRouter>
            <AuthContext.Provider value={{ username: 'test2' }}>
            <Card blog={blog} />
            </AuthContext.Provider>
        </MemoryRouter>
        </QueryClientProvider>
    )

    expect(screen.queryByTestId('option-button')).not.toBeInTheDocument();

  })

  test("navigates to correct URL when the Link is clicked", () => {
        render(
            <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <AuthContext.Provider value={{ username: 'test' }}>
                <Card blog={blog} />
                </AuthContext.Provider>
            </MemoryRouter>
            </QueryClientProvider>
        )

    
    const linkElement = screen.getByTestId("link", { name: blog.title });
    expect(linkElement.getAttribute("href")).toBe(`/article/${blog.id}`);
  });

});
