import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import { AuthContext } from "../../../context/authContext";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import BlogDelete from "../BlogDelete";
import { deleteBlogReq } from "../../../services/blogService.js";

vi.mock("../../../services/blogService.js");

describe("BlogDelete", () => {
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
  test("renders delete confirmation modal and triggers delete mutation", async() => {
    const blogId = 1;
    const closeModal = vi.fn();

    const deleteBlogReqMock = vi.fn();

    deleteBlogReq.mockImplementation(deleteBlogReqMock);

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AuthContext.Provider value={{ username: "testUser" }}>
            <BlogDelete blogId={blogId} closeModal={closeModal} />
          </AuthContext.Provider>
        </MemoryRouter>
      </QueryClientProvider>
    );

    const deleteCheckbox = screen.getByLabelText("Yes, I'm sure");
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteCheckbox);
    fireEvent.click(deleteButton);

   await waitFor(() => {
    expect(deleteBlogReqMock).toHaveBeenCalledWith(blogId);
        expect(closeModal).toHaveBeenCalled();
   })
  });

   test("renders delete confirmation modal", async() => {
     const blogId = 1;
     const closeModal = vi.fn();

        render(
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>
              <AuthContext.Provider value={{ username: "testUser" }}>
                <BlogDelete blogId={blogId} closeModal={closeModal} />
              </AuthContext.Provider>
            </MemoryRouter>
          </QueryClientProvider>
        );

     const deleteCheckbox = screen.getByLabelText("Yes, I'm sure");
     const deleteButton = screen.getByText("Delete");
     const cancelButton = screen.getByText("Cancel");

     expect(deleteCheckbox).toBeInTheDocument();
     expect(deleteButton).toBeInTheDocument();
     expect(cancelButton).toBeInTheDocument();
     expect(deleteButton).toBeDisabled();

     fireEvent.click(deleteCheckbox);
    await waitFor(() => {
         expect(deleteButton).not.toBeDisabled();
    })

     fireEvent.click(deleteButton);
      await waitFor(() => {
        expect(closeModal).toHaveBeenCalled();
      });
    
   });
});
