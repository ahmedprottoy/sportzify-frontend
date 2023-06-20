import { fireEvent,screen,render } from "@testing-library/react";
import { vi, test, expect, describe, beforeEach } from "vitest";
import NotLoggedIn from '../NotLoggedIn'
import { MemoryRouter } from "react-router-dom";


const mockNavigation = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockNavigation,
}));

describe("NotLoggedIn", () => {

    beforeEach(() => {
        render(
            <MemoryRouter>
                <NotLoggedIn/>
            </MemoryRouter>
        );
    });


    test("renders NotLoggedIn content", () => {
        expect(screen.getByText("You must Login to visit this page !")).toBeInTheDocument()
    })

    test('renders the sign-in button',()=>{
        expect(screen.getByTestId('not-logged-signin-button')).toBeInTheDocument();
    })

    test('should navigate to the sign-in page when the sign-in button is clicked',()=>{
        const signInButton = screen.getByTestId('not-logged-signin-button');
        fireEvent.click(signInButton);
        expect(mockNavigation).toHaveBeenCalledWith("/sign-in");
    })

})