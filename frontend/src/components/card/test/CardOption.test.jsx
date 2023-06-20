import { fireEvent, screen, render } from "@testing-library/react";
import { vi, test, describe, expect } from "vitest";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { QueryClientProvider, QueryClient } from "react-query";
import CardOption from "../CardOption";
import BlogDelete from "../BlogDelete";


const mockNavigation = vi.fn();
const closeModal = vi.fn();



vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockNavigation,
}));

describe("CardOption", () => {
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
  test("should render the edit & delete buttons", () => {
    render(
      <MemoryRouter>
        <CardOption />
      </MemoryRouter>
    );
    const editButton = screen.getByTestId("edit-button");
    const deleteButton = screen.getByTestId("delete-button");
    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  test("should navigate to the update page when the edit button is clicked", () => {
    const blogId = 1;

    render(
      <MemoryRouter>
        <CardOption blogId={blogId} onClose={closeModal} />
      </MemoryRouter>
    );
    const editButton = screen.getByTestId("edit-button");
    fireEvent.click(editButton);

    expect(mockNavigation).toHaveBeenCalledWith(`/article/update/${blogId}`);
  });

//   test("calls handleDelete when delete button is clicked", () => {
//     const blogId = 1;
//     const setIsModalOpen = vi.fn();
//     const modal = {};
   
//     const setModalContent = vi.spyOn(modal, "setModalContent");

//     render(
//       <QueryClientProvider client={queryClient}>
//         <MemoryRouter>
//           <AuthContext.Provider value={{ username: "test" }}>
//             <CardOption blogId={blogId} onClose={closeModal} />
//           </AuthContext.Provider>
//         </MemoryRouter>
//       </QueryClientProvider>
//     );

//     const deleteButton = screen.getByTestId("delete-button");
//     fireEvent.click(deleteButton);

//     expect(setModalContent).toHaveBeenCalledWith(
//       <BlogDelete blogId={blogId} closeModal={closeModal} />
//     );
//     expect(setIsModalOpen).toHaveBeenCalledWith(true);
//   });

});
