import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, describe, test } from "vitest";
import { useNavigate } from "react-router-dom";
import ErrorNotFound from "../ErrorNotFound";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: vi.fn(),
}));

describe("ErrorNotFound", () => {
  test("should navigate back when Go Back button is clicked", () => {
    const mockedNavigate = vi.fn();
    useNavigate.mockReturnValue(mockedNavigate);

    render(<ErrorNotFound />);

    const goBackButton = screen.getByText("Go Back!");

    fireEvent.click(goBackButton);

    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
