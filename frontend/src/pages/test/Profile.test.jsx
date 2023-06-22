import { render, screen } from "@testing-library/react";
import { vi, expect, describe, test } from "vitest";
import { useQuery } from "react-query";
import { useParams, MemoryRouter } from "react-router-dom";
import Profile from "../Profile";
import { AuthContext } from "../../context/authContext";

vi.mock("react-query", async () => ({
  ...(await vi.importActual("react-query")),
  useQuery: vi.fn(),
}));

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useParams: vi.fn(),
}));

describe("Profile", () => {
  const mockUserData = {
    username: "john_doe",
    fullname: "John Doe",
    email: "john@example.com",
    imageUrl: "http://example.com/profile.jpg",
  };

  const mockUserBlogs = [
    {
      id: 1,
      title: "Blog 1",
      content: "Content 1",
      author: "John Doe",
      imageUrl: "http://example.com/blog1.jpg",
      postedAt: "2023-06-19T12:34:56Z",
      updatedAt: "2023-06-23T12:34:56Z",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content 2",
      author: "John Doe",
      imageUrl: "http://example.com/blog2.jpg",
      postedAt: "2023-06-20T09:00:00Z",
      updatedAt: "2023-06-25T09:00:00Z",
    },
  ];

  beforeEach(() => {
    useParams.mockReturnValue({ username: "john_doe" });

    useQuery.mockReturnValue({
      data: mockUserData,
      isError: false,
      error: null,
      refetch: vi.fn(),
    });

    useQuery.mockReturnValue({
      data: { data: mockUserBlogs },
      isError: false,
      error: null,
      refetch: vi.fn(),
    });
  });

  test("should render user profile with data", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ username: "john_doe" }}>
          <Profile />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const userImage = screen.getByTestId("user-image-container");
    expect(userImage).toBeInTheDocument();

    const profileButton = screen.getByTestId("edit-profile-button");
    expect(profileButton).toBeInTheDocument();

    const userInfo = screen.getByTestId("user-info");
    expect(userInfo).toBeInTheDocument();

    const userBlogs = screen.getByTestId("user-blogs");
    expect(userBlogs).toBeInTheDocument();
  });

  test("should render ErrorNotFound component when there is an error", () => {
    useQuery.mockReturnValueOnce({
      data: null,
      isError: true,
      error: "User data error",
      refetch: vi.fn(),
    });

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ username: "john_doe" }}>
          <Profile />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const errorNotFound = screen.getByTestId("error-not-found-component");
    expect(errorNotFound).toBeInTheDocument();
  });

  test("should render NoContent component when there are no user blogs", () => {
    useQuery.mockReturnValueOnce({
      data: mockUserData,
      isError: false,
      error: null,
      refetch: vi.fn(),
    });

    useQuery.mockReturnValueOnce({
      data: { data: [] },
      isError: false,
      error: null,
      refetch: vi.fn(),
    });

    render(
        <MemoryRouter>
      <AuthContext.Provider value={{ username: "john_doe" }}>
        <Profile />
      </AuthContext.Provider>
        </MemoryRouter>
    );

    const noContent = screen.getByTestId("no-content");
    expect(noContent).toBeInTheDocument();
  });
});
