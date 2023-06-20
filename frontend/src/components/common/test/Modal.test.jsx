import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {vi,test,expect,describe} from 'vitest'
import Modal from "../Modal";

describe("Modal", () => {
  test("renders modal content and closes on button click", () => {
    const closeModal = vi.fn();
    const content = "Modal content";

    render(<Modal closeModal={closeModal} content={content} />);

    expect(screen.getByText(content)).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("close-modal"));
    expect(closeModal).toHaveBeenCalled();
  });
});
