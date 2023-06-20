import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { AuthContext } from "../../../context/authContext";
import UserBlogs from "../UserBlogs";
import { MemoryRouter } from "react-router-dom";

describe("UserBlogs", () => {
  test("renders blogs correctly", () => {
    const username = "testuser";
    const userBlogs = [
      {
        id: 1,
        author: "John Doe",
        title: "Blog 1",
        content: "Lorem ipsum dolor sit amet.",
        postedAt: "2022-01-01",
        imageUrl: "https://example.com/image1.jpg",
      },
      {
        id: 2,
        author: "Jane Smith",
        title: "Blog 2",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        postedAt: "2022-02-02",
        imageUrl: "https://example.com/image2.jpg",
      },
    ];

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ username }}>
          <UserBlogs userBlogs={userBlogs} />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const blogElements = screen.getAllByTestId("blog-card");
    expect(blogElements).toHaveLength(2);

    const firstBlog = blogElements[0];
    expect(firstBlog).toHaveTextContent("John Doe");
    expect(firstBlog).toHaveTextContent("Blog 1");
    expect(firstBlog).toHaveTextContent("Lorem ipsum dolor sit amet.");
    

    const secondBlog = blogElements[1];
    expect(secondBlog).toHaveTextContent("Jane Smith");
    expect(secondBlog).toHaveTextContent("Blog 2");
    expect(secondBlog).toHaveTextContent(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    );
  
  });

    test("renders fallback content when userBlogs is not provided", () => {
      render(<UserBlogs />);

      const fallbackContent = screen.getByText("....");
      expect(fallbackContent).toBeInTheDocument();
    });
});
