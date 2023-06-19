import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, describe, test, beforeEach } from "vitest";
import SearchedUser from "../SearchedUser";
import { MemoryRouter } from "react-router-dom";

const mockNavigation = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockNavigation,
}));

describe("SearchedUser", () => {
  const data = {
    username: "John",
    fullname: "John Doe",
    imageUrl: "https://example.com/image.png",
  };

  const closeModal = vi.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <SearchedUser data={data} closeModal={closeModal} />
      </MemoryRouter>
    );
  });

    test("should render the user avatar", () => {
      const avatar = screen.getByTestId("user-avatar");
      expect(avatar).toBeInTheDocument();
    });

    test("should render the user name", () => {
      const name = screen.getByTestId("user-name");
      expect(name).toBeInTheDocument();
      expect(name.textContent).toBe("John");
    });

    test("should render the view profile button", async () => {
      const viewProfileButton = await screen.findByTestId(
        "view-profile-button"
      );
      expect(viewProfileButton).toBeInTheDocument();
      expect(viewProfileButton.textContent).toBe("View Profile");
    });

  test("should navigate to the profile page when the view profile button is clicked", () => {
    const viewProfileButton = screen.getByTestId("view-profile-button");
    fireEvent.click(viewProfileButton);
    expect(mockNavigation).toHaveBeenCalledWith("/profile/John");
  });
});
