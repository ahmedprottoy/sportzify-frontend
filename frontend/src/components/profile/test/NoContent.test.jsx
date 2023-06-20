import { render, screen, fireEvent } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import NoContent from "../NoContent";

const mockNavigation = vi.fn();

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockNavigation,
}));

describe("NoContent", () => {



  test("renders correctly and triggers navigation on button click", () => {
   
    const createButtonTestId = "create-button";

    render(<NoContent />);

    const noContentImage = screen.getByTestId("no-content");
    expect(noContentImage).toBeInTheDocument();

    const createButton = screen.getByTestId(createButtonTestId);
    expect(createButton).toBeInTheDocument();
    expect(createButton).toHaveTextContent("Create Blogs here!");

    fireEvent.click(createButton);
    expect(mockNavigation).toHaveBeenCalledWith("/create");
  });
});
