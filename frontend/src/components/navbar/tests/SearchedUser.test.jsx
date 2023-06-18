import { render, screen, debug } from "@testing-library/react";
import { vi, expect, describe, test, beforeEach } from "vitest";
import SearchedUser from "../SearchedUser";
import { MemoryRouter, useNavigate, BrowserRouter } from "react-router-dom";


describe("SearchedUser", () => {
  const data = {
    username: "John Doe",
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
    expect(name.textContent).toBe("John Doe");
  });

  test("should render the view profile button", async() => {
    const viewProfileButton = await screen.findByTestId("view-profile-button");
    expect(viewProfileButton).toBeInTheDocument();
     expect(viewProfileButton.textContent).toBe("View Profile");
  });


//   test("should navigate to the profile page when the view profile button is clicked", () => {
//     const navigateMock = vi.fn();
//    vi.spyOn(useNavigate, "navigate").mockReturnValue(navigateMock);
//     const viewProfileButton = screen.getByTestId("view-profile-button");
//     viewProfileButton.click();
//     expect(navigateMock).toHaveBeenCalledWith("/profile/John Doe");
//   });

});
