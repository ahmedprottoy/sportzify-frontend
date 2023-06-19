import { signInReq } from "../authService";
import axiosRequest from "../../utils/axios.util";
import {vi,describe,it} from  'vitest'

vi.mock("./axios.util", () => {
  const mockAxiosInstance = {
    create: vi.fn(() => mockAxiosInstance),
    request: vi.fn(),
  };

  return {
    __esModule: true,
    default: vi.fn(() => mockAxiosInstance),
  };
});

describe("AuthService", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should make a successful sign-in request", async () => {
    const responseData = { token: "your_token" };
    const requestData = { email: "test@example.com", password: "password" };

    // Mock the axios request to simulate a successful response
    axiosRequest.mockImplementation(() => Promise.resolve(responseData));

    // Call the signInReq function
    const response = await signInReq(requestData);

    // Assert that the response is correct
    expect(response).toEqual(responseData);
    expect(axiosRequest).toHaveBeenCalledWith(
      "v1/auth/sign-in",
      "POST",
      requestData
    );
  });

  it("should handle an error during sign-in request", async () => {
    const requestData = { email: "test@example.com", password: "password" };
    const error = new Error("Internal Server Error");

    // Mock the axios request to simulate an error response
    axiosRequest.mockImplementation(() => Promise.reject(error));

    // Call the signInReq function and expect it to throw an error
    await expect(signInReq(requestData)).rejects.toThrow(
      "Internal Server Error"
    );
    expect(axiosRequest).toHaveBeenCalledWith(
      "v1/auth/sign-in",
      "POST",
      requestData
    );
  });
});